import axios from 'axios'
import qs from 'qs'

export default async (layer) => {
  const BASE_URL = 'https://d1nzvsko7rbono.cloudfront.net'
  const { r, g, b, collectionID } = layer
  const bandCombo = [r, g, b].join(',')
  const temporalRange = ['2023-11-11T00:00:00Z', ' 2023-11-11T23:59:59Z']

  const collectionsFilter = {
    op: '=',
    args: [{ property: 'collection' }, collectionID],
  }

  const temporalFilter = {
    op: 't_intersects',
    args: [{ property: 'datetime' }, { interval: temporalRange }],
  }

  const searchBody = {
    'filter-lang': 'cql2-json',
    context: 'on',
    filter: {
      op: 'and',
      args: [collectionsFilter, temporalFilter],
    },
  }

  const mosaicResponse = await axios
    .post(`${BASE_URL}/mosaic/register`, searchBody)
    .then((res) => res.data)
    .catch((error) => {
      console.error('Error with mosaic registration:', error.response)
      throw error
    })

  const tilesHref = mosaicResponse.links.find(
    (link) => link.rel === 'tilejson'
  ).href

  const params = {
    post_process: 'swir',
    assets: bandCombo,
  }

  const queryString = qs.stringify(params, { arrayFormat: 'repeat' })

  const tilejsonResponse = await axios
    .get(tilesHref, {
      params: new URLSearchParams(queryString),
    })
    .then((res) => res.data)

  const { name } = tilejsonResponse

  return name
}
