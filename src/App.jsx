import './App.css'
import { Flex } from '@chakra-ui/react'
import Sidebar from './components/sidebar/sidebar'
import Map from './components/ol-map/map'
import { MapProvider } from './context/mapContext'

function App() {
  return (
    <MapProvider>
      <Flex id="app-container">
        <Sidebar />
        <Map />
      </Flex>
    </MapProvider>
  )
}

export default App
