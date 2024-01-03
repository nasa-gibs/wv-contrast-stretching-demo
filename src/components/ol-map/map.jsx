import { useEffect, useContext, useRef } from 'react'
import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import { MapContext } from '../../context/mapContext'
import createWMTSLayer from './wmts-layer'
import { createHLSLayer } from './hls-layer'
import { createHLSLayerGeoTIFF } from './hls-layer-geotiff'
import {
  correctedReflectance,
  referenceFeatures,
  referenceLabels,
  hls_landsat_firms,
} from '../../config/layerConfig'

const OLMap = () => {
  console.log('rendering OLMap')
  const { map, setMap } = useContext(MapContext)
  const mapRef = useRef()

  useEffect(() => {
    const correctedReflectanceLayer = createWMTSLayer(correctedReflectance)
    const referenceFeaturesLayer = createWMTSLayer(referenceFeatures)
    const referenceLabelsLayer = createWMTSLayer(referenceLabels)

    const olMap = new Map({
      target: mapRef.current,
      layers: [
        correctedReflectanceLayer,
        referenceFeaturesLayer,
        referenceLabelsLayer,
      ],
      view: new View({
        center: [-77.0369, 38.9072],
        zoom: 12.5,
        projection: 'EPSG:4326',
      }),
    })

    olMap.on('moveend', () => {
      setMap(olMap)
    })

    setMap(olMap)

    const addAsyncLayer = async (olMap) => {
      const hls_landsat_firmsLayer =
        await createHLSLayerGeoTIFF(hls_landsat_firms)
      olMap.addLayer(hls_landsat_firmsLayer)
    }
    addAsyncLayer(olMap)

    return () => olMap.setTarget(undefined)
  }, [])

  return <div ref={mapRef} style={{ height: '100vh', width: '67%' }}></div>
}

export default OLMap
