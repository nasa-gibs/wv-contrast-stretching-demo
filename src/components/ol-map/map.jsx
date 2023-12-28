import { useEffect } from 'react'
import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import CreateWMTSLayer from './wmts-layer'
import {
  correctedReflectance,
  referenceFeatures,
  referenceLabels,
} from '../../config/layerConfig'

const OLMap = ({ mapRef }) => {
  useEffect(() => {
    const correctedReflectanceLayer = CreateWMTSLayer(correctedReflectance)
    const referenceFeaturesLayer = CreateWMTSLayer(referenceFeatures)
    const referenceLabelsLayer = CreateWMTSLayer(referenceLabels)

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
  }, [])

  return <div ref={mapRef} style={{ height: '100vh', width: '67%' }}></div>
}

export default OLMap
