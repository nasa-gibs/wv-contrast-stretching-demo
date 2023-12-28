import { useEffect } from 'react'
import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import createWMTSLayer from './wmts-layer'
import registerSearch from './register-search'
import {
  correctedReflectance,
  referenceFeatures,
  referenceLabels,
  hls_landsat_firms,
} from '../../config/layerConfig'

const OLMap = ({ mapRef }) => {
  useEffect(() => {
    const initializeMap = async () => {
      const correctedReflectanceLayer = createWMTSLayer(correctedReflectance)
      const referenceFeaturesLayer = createWMTSLayer(referenceFeatures)
      const referenceLabelsLayer = createWMTSLayer(referenceLabels)
      const hls_landsat_firmsLayer = await registerSearch(hls_landsat_firms)

      new Map({
        target: mapRef.current,
        layers: [
          correctedReflectanceLayer,
          referenceFeaturesLayer,
          referenceLabelsLayer,
        ],
        view: new View({
          center: [-77.0369, 38.9072],
          zoom: 8.2,
          projection: 'EPSG:4326',
        }),
      })
    }

    initializeMap()
  }, [mapRef])

  return <div ref={mapRef} style={{ height: '100vh', width: '67%' }}></div>
}

export default OLMap
