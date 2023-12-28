import './App.css'
import { useEffect, useRef } from 'react'
import { Flex } from '@chakra-ui/react'
import Sidebar from './components/sidebar'
import Map from './components/ol-map/map'

function App() {
  const mapRef = useRef()

  return (
    <Flex id="app-container">
      <Sidebar mapRef={mapRef} />
      <Map mapRef={mapRef} />
    </Flex>
  )
}

export default App
