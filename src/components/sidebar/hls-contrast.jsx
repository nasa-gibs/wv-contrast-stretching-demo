import React, { useState, useEffect, useContext } from 'react'
import {
  Box,
  Flex,
  Badge,
  Text,
  Container,
  Heading,
  Switch,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react'
import { MdGraphicEq } from 'react-icons/md'
import { MapContext } from '../../context/mapContext'
import { useSelector, useDispatch } from 'react-redux'
import { updateLayerRgb } from '../../redux/mapSlice'

const HlsContrast = () => {
  const { map } = useContext(MapContext)
  const dispatch = useDispatch()

  const hlsLayers = useSelector((state) =>
    state.mapState.layers.filter(
      (layer) =>
        layer.id === 'hls_landsat_firms_swir' ||
        layer.id === 'hls_landsat_firms_no_swir'
    )
  )

  const updateRgb = (layer, color, value) => {
    const updatedLayer = { ...layer, [color]: value }
    dispatch(updateLayerRgb(updatedLayer))
  }

  return (
    <Container mt="2">
      <Heading
        as="h2"
        size="lg"
        mb="1"
        color="whiteAlpha.900"
        textAlign="center"
      >
        HLS Contrast
      </Heading>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        {hlsLayers &&
          hlsLayers.map((layer) => {
            return (
              <Flex
                flexDirection="column"
                justifyContent="center"
                mt="4"
                width="100%"
                key={layer.id}
              >
                <Text color="whiteAlpha.900" as="b" textAlign="center">
                  {layer.name}
                </Text>

                <Slider
                  aria-label="red-slider"
                  colorScheme="red"
                  defaultValue={layer.red}
                  mt="8"
                  onChange={(value) => {
                    updateRgb(layer, 'red', value)
                  }}
                >
                  <SliderMark
                    value={layer.red}
                    textAlign="center"
                    bg="red.500"
                    color="white"
                    mt="-10"
                    ml="-5"
                    w="12"
                  >
                    {layer.red}%
                  </SliderMark>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb boxSize={6}>
                    <Box color="tomato" as={MdGraphicEq} />
                  </SliderThumb>
                </Slider>

                <Slider
                  aria-label="green-slider"
                  colorScheme="green"
                  defaultValue={layer.green}
                  mt="16"
                  onChange={(value) => {
                    updateRgb(layer, 'green', value)
                  }}
                >
                  <SliderMark
                    value={layer.green}
                    textAlign="center"
                    bg="green.500"
                    color="white"
                    mt="-10"
                    ml="-5"
                    w="12"
                  >
                    {layer.green}%
                  </SliderMark>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb boxSize={6}>
                    <Box color="green" as={MdGraphicEq} />
                  </SliderThumb>
                </Slider>

                <Slider
                  aria-label="blue-slider"
                  colorScheme="blue"
                  defaultValue={layer.blue}
                  mt="16"
                  onChange={(value) => {
                    updateRgb(layer, 'blue', value)
                  }}
                >
                  <SliderMark
                    value={layer.blue}
                    textAlign="center"
                    bg="blue.500"
                    color="white"
                    mt="-10"
                    ml="-5"
                    w="12"
                  >
                    {layer.blue}%
                  </SliderMark>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb boxSize={6}>
                    <Box color="blue" as={MdGraphicEq} />
                  </SliderThumb>
                </Slider>
              </Flex>
            )
          })}
      </Flex>
    </Container>
  )
}

export default HlsContrast
