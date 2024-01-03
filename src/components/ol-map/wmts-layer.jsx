import OlTileGridWMTS from 'ol/tilegrid/WMTS'
import OlSourceWMTS from 'ol/source/WMTS'
import OlLayerTile from 'ol/layer/Tile'
import { sourceConfig } from '../../config/sourceConfig'
import { projections } from '../../config/sourceConfig'
import {
  calcExtentsFromLimits,
  toISOStringSeconds,
  roundTimeOneMinute,
} from '../../selectors/selectors'

const CreateWMTSLayer = (layer) => {
  const {
    id,
    format,
    matrixIds,
    matrixSet = layer.projections.geographic.matrixSet,
    matrixSetLimits,
    style,
  } = layer
  const configSource = sourceConfig['GIBS:geographic']
  const configMatrixSet = configSource.matrixSets[matrixSet]
  const { tileMatrices, resolutions, tileSize } = configMatrixSet
  const dateString = 'Fri Nov 24 2023 19:00:00 GMT-0500 (Eastern Standard Time)'
  const date = new Date(dateString)
  const day = 0
  const selected = projections.geographic
  const { origin, extent } = calcExtentsFromLimits(
    configMatrixSet,
    matrixSetLimits,
    day,
    selected
  )
  const sizes = !tileMatrices
    ? []
    : tileMatrices.map(({ matrixWidth, matrixHeight }) => [
        matrixWidth,
        matrixHeight,
      ])
  const urlParameters = `?TIME=${toISOStringSeconds(roundTimeOneMinute(date))}`
  const sourceURL = layer.sourceOverride || configSource.url

  const tileGridOptions = {
    origin: origin,
    extent: extent,
    sizes,
    resolutions,
    matrixIds: matrixIds || resolutions.map((set, index) => index),
    tileSize: tileSize[0],
  }

  const sourceOptions = {
    url: sourceURL + urlParameters,
    layer: id,
    cacheSize: 4096,
    crossOrigin: 'anonymous',
    format,
    transition: 0,
    matrixSet: configMatrixSet.id,
    tileGrid: new OlTileGridWMTS(tileGridOptions),
    wrapX: false,
    style: typeof style === 'undefined' ? 'default' : style,
  }

  const tileSource = new OlSourceWMTS(sourceOptions)

  const layerTile = new OlLayerTile({
    extent: extent,
    preload: 0,
    source: tileSource,
    className: id,
    id: id,
  })

  return layerTile
}

export default CreateWMTSLayer
