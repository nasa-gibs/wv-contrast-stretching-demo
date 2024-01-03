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
  const { id } = layer

  const swirUrl =
    'https://kv9drwgv6l.execute-api.us-west-2.amazonaws.com/mosaic/tiles/e8fc0cdcadc40f9de03fa907de071a9e/WGS1984Quad/12/2342/1161@1x.tif?pixel_selection=first&assets=B07&assets=B05&assets=B04&unscale=false&resampling=nearest&post_process=swir'

  const noSwirUrl =
    'https://kv9drwgv6l.execute-api.us-west-2.amazonaws.com/mosaic/tiles/e8fc0cdcadc40f9de03fa907de071a9e/WGS1984Quad/12/2342/1163@1x.tif?pixel_selection=first&assets=B07&assets=B05&assets=B04&unscale=false&resampling=nearest'

  const preformedUrl =
    layer.id === 'hls_landsat_firms_swir' ? swirUrl : noSwirUrl

  const urls = [preformedUrl]

  const geoTiffSource = new GeoTIFFSource({
    sources: [{ url: preformedUrl }],
    // normalize: false,
  })

  const geoTiffLayer = new TileLayer({
    source: geoTiffSource,
    className: id,
    id: id,
    // style: {
    //   variables: getVariables(),
    //   color: [
    //     'array',
    //     ['/', ['band', ['var', 'red']], ['var', 'redMax']],
    //     ['/', ['band', ['var', 'green']], ['var', 'greenMax']],
    //     ['/', ['band', ['var', 'blue']], ['var', 'blueMax']],
    //     1,
    //   ],
    // },
  })

  return geoTiffLayer
}
