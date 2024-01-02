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
  const { map, setMap } = useContext(MapContext)
  const mapRef = useRef()

  useEffect(() => {
    if (map) return

    const initializeMap = async () => {
      const correctedReflectanceLayer = createWMTSLayer(correctedReflectance)
      const referenceFeaturesLayer = createWMTSLayer(referenceFeatures)
      const referenceLabelsLayer = createWMTSLayer(referenceLabels)
      const hls_landsat_firmsLayer =
        await createHLSLayerGeoTIFF(hls_landsat_firms)

      const olMap = new Map({
        target: mapRef.current,
        layers: [
          correctedReflectanceLayer,
          referenceFeaturesLayer,
          referenceLabelsLayer,
          hls_landsat_firmsLayer,
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
      return olMap
    }

    let olMap
    // Initialize the map
    if (!map) {
      initializeMap().then((createdMap) => {
        olMap = createdMap
      })
    }

    return () => {
      if (olMap) {
        olMap.setTarget(undefined)
      }
    }
  }, [map, setMap, mapRef])

  return <div ref={mapRef} style={{ height: '100vh', width: '67%' }}></div>
}

export default OLMap
