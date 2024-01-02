import GeoTIFFSource from 'ol/source/GeoTIFF'
import TileLayer from 'ol/layer/WebGLTile.js'
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

  const preformedURL =
    'https://kv9drwgv6l.execute-api.us-west-2.amazonaws.com/mosaic/tiles/e8fc0cdcadc40f9de03fa907de071a9e/WGS1984Quad/12/2342/1161@1x.tif?pixel_selection=first&assets=B07&assets=B05&assets=B04&unscale=false&resampling=nearest&post_process=swir'

  const urls = [preformedURL]
  const geoTiffSource = new GeoTIFFSource({
    sources: [
      {
        url: preformedURL,
      },
    ],
  })

  const geoTiffLayer = new TileLayer({
    source: geoTiffSource,
  })

  return geoTiffLayer
}
