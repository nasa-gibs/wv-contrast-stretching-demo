import GeoTIFFSource from 'ol/source/GeoTIFF'
import TileLayer from 'ol/layer/Tile'
import OlSourceXYZ from 'ol/source/XYZ'
import { get } from 'ol/proj'
import registerSearch from './register-search'
import { sourceConfig } from '../../config/sourceConfig'

export const createHLSLayerGeoTIFF = async (layer) => {
  const searchID = await registerSearch(layer)
  const { r, g, b } = layer
  const assets = [r, g, b]
  const params = assets.map((asset) => `assets=${asset}`)
  params.push('format=tif')
  const sourceUrl = 'https://kv9drwgv6l.execute-api.us-west-2.amazonaws.com/'

  const tileUrlFunction = (tileCoord) => {
    const z = tileCoord[0] - 1
    const x = tileCoord[1]
    const y = tileCoord[2]

    const urlParams = `mosaic/tiles/${searchID}/WGS1984Quad/${z}/${x}/${y}@1x?post_process=swir&${params
      .filter((p) => !p.split('=').includes('undefined'))
      .join('&')}`

    return sourceUrl + urlParams
  }

  const source = sourceConfig['GIBS:geographic']
  const maxExtent = [-180, -90, 180, 90]
  const crs = 'EPSG:4326'

  const xyzSourceOptions = {
    crossOrigin: 'anonymous',
    projection: get(crs),
    tileUrlFunction,
  }

  const xyzSource = new OlSourceXYZ(xyzSourceOptions)

  const hlsLayer = new TileLayer({
    source: xyzSource,
    minZoom: 7,
    extent: maxExtent,
  })

  return hlsLayer
}

// example URL:
// https://kv9drwgv6l.execute-api.us-west-2.amazonaws.com/mosaic/tiles/00c726d5fc0da431d8b638fd5a5ee860/WGS1984Quad/10/586/289@1x.tif?post_process=swir&assets=B07&assets=B05&assets=B04
