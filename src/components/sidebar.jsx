import React, { useState, useEffect, useContext } from 'react'
import { Box, Button, Flex, Badge, Text } from '@chakra-ui/react'
import { MapContext } from '../context/mapContext'

const Sidebar = () => {
  const { map } = useContext(MapContext)

  const getXYZ = () => {
    if (!map) return { zoom: null, xTile: null, yTile: null }
    const view = map.getView()
    const zoom = view.getZoom()
    const center = view.getCenter()

    const longitude = center[0]
    const latitude = center[1]

    const numTiles = Math.pow(2, zoom)

    const xTile = Math.floor(((longitude + 180) / 360) * numTiles)

    const radianLatitude = (latitude * Math.PI) / 180
    const yTile = Math.floor(
      ((1 -
        Math.log(Math.tan(radianLatitude) + 1 / Math.cos(radianLatitude)) /
          Math.PI) /
        2) *
        numTiles
    )

    return { zoom, xTile, yTile }
  }

  const [zoom, setZoom] = useState(null)
  const [coordinates, setCoordinates] = useState(null)
  const { xTile, yTile } = getXYZ()

  useEffect(() => {
    if (map) {
      const updateView = () => {
        const view = map.getView()
        setZoom(view.getZoom().toFixed(2))
        const center = view.getCenter()
        setCoordinates(center.map((coord) => coord.toFixed(4)).join(', '))
      }
      map.on('moveend', updateView) // Update on map move
      updateView()
      return () => {
        map.un('moveend', updateView)
      }
    }
  }, [map])

  return (
    <Box id="sidebar" width="33%" p={4} bg="blackAlpha.800" height="100vh">
      <Flex justifyContent="center" mb="4">
        <Button colorScheme="teal" variant="outline" onClick={getXYZ}>
          Console
        </Button>
      </Flex>

      <Flex justifyContent="space-evenly" mb="4">
        <Badge borderRadius="full" px="2" colorScheme="teal">
          Coordinates
        </Badge>
        <Text color="whiteAlpha.900"> {coordinates} </Text>
      </Flex>

      <Flex justifyContent="space-evenly" mb="4">
        <Badge borderRadius="full" px="2" colorScheme="teal">
          Zoom
        </Badge>
        <Text color="whiteAlpha.900"> {zoom} </Text>
      </Flex>
    </Box>
  )
}

export default Sidebar
