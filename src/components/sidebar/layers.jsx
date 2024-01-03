import React, { useState, useEffect, useContext } from 'react'
import {
  Box,
  Flex,
  Badge,
  Text,
  Container,
  Heading,
  Switch,
} from '@chakra-ui/react'
import { MapContext } from '../../context/mapContext'
import { useSelector, useDispatch } from 'react-redux'
import { setLayerVisibility } from '../../redux/mapSlice'

const Layers = () => {
  const { map } = useContext(MapContext)
  const layers = useSelector((state) => state.mapState.layers)
  const dispatch = useDispatch()

  const updateVisibility = (layer) => {
    const olMapLayers = map.getLayers().getArray()
    const olLayer = olMapLayers.find(
      (olLayer) => olLayer.get('id') === layer.id
    )
    olLayer.setVisible(!layer.visible)

    dispatch(setLayerVisibility(layer))
  }

  return (
    <Container mt="8">
      <Heading
        as="h2"
        size="lg"
        mb="4"
        color="whiteAlpha.900"
        textAlign="center"
      >
        Layers
      </Heading>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        {layers.map((layer) => (
          <Flex
            key={layer.id}
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            mb="4"
          >
            <Text color="whiteAlpha.900">{layer.name}</Text>
            <Switch
              colorScheme="blue"
              size="sm"
              isChecked={layer.visible}
              onChange={() => updateVisibility(layer)}
            />
          </Flex>
        ))}
      </Flex>
    </Container>
  )
}

export default Layers
