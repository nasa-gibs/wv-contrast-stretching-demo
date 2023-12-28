import GeoTIFFSource from 'ol/source/GeoTIFF'
import TileLayer from 'ol/layer/Tile'
import registerSearch from './register-search'
import { sourceConfig } from '../../config/sourceConfig'

const CreateGeoTIFFLayer = async (layer) => {
  const { r, g, b } = layer

  const searchID = await registerSearch(layer)
  const source = sourceConfig['GIBS:geographic']
}

// example URL:
// https://kv9drwgv6l.execute-api.us-west-2.amazonaws.com/mosaic/tiles/00c726d5fc0da431d8b638fd5a5ee860/WGS1984Quad/10/586/289@1x.tif?post_process=swir&assets=B07&assets=B05&assets=B04
