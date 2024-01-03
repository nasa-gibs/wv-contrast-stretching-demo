export const correctedReflectance = {
    id: "VIIRS_SNPP_CorrectedReflectance_TrueColor",
    name: 'VIIRS_SNPP_CorrectedReflectance_TrueColor',
    title: 'Corrected Reflectance (True Color)',
    type: "wmts",
    format: "image/jpeg",
    period: "daily",
    startDate: "2015-11-24T00:00:00Z",
    dateRanges: [
      {
        startDate: "2015-11-24T00:00:00Z",
        endDate: "2017-03-29T00:00:00Z",
        dateInterval: "1",
      },
      {
        startDate: "2017-04-02T00:00:00Z",
        endDate: "2020-12-25T00:00:00Z",
        dateInterval: "1",
      },
      {
        startDate: "2020-12-27T00:00:00Z",
        endDate: "2022-07-26T00:00:00Z",
        dateInterval: "1",
      },
      {
        startDate: "2022-08-23T00:00:00Z",
        endDate: "2022-10-24T00:00:00Z",
        dateInterval: "1",
      },
    ],
    projections: {
      geographic: {
        source: "GIBS:geographic",
        matrixSet: "250m",
      },
      antarctic: {
        source: "GIBS:antarctic",
        matrixSet: "250m",
      },
      arctic: {
        source: "GIBS:arctic",
        matrixSet: "250m",
      },
    },
    conceptIds: [
      {
        shortName: "VNP02IMG_NRT",
        title: "VIIRS/NPP Imagery Resolution 6-Min L1B Swath 375m NRT",
        type: "NRT",
        value: "C2185504759-LANCEMODIS",
        version: "2",
      },
      {
        shortName: "VNP03IMG_NRT",
        title:
          "VIIRS/NPP Imagery Resolution Terrain-Corrected Geolocation 6-Min L1 Swath 375m NRT",
        type: "NRT",
        value: "C2185522599-LANCEMODIS",
        version: "2",
      },
      {
        shortName: "VNP02MOD_NRT",
        title:
          "VIIRS/NPP Moderate Resolution Bands L1B 6-Min Swath 750 m NRT",
        type: "NRT",
        value: "C2185497928-LANCEMODIS",
        version: "2",
      },
      {
        shortName: "VNP03MOD_NRT",
        title:
          "VIIRS/NPP Moderate Resolution Terrain-Corrected Geolocation 6-Min L1 Swath 750m NRT",
        type: "NRT",
        value: "C2185511251-LANCEMODIS",
        version: "2",
      },
    ],
    dataCenter: ["MODAPS SIPS"],
    daynight: ["day"],
    layerPeriod: "Daily",
    ongoing: true,
    orbitDirection: ["ascending"],
    orbitTracks: ["OrbitTracks_Suomi_NPP_Ascending"],
    subtitle: "Suomi NPP / VIIRS",
    description: "viirs/VIIRS_SNPP_CorrectedReflectance_TrueColor",
    tags: "natural color cr s-npp snpp",
    layergroup: "Corrected Reflectance",
    group: "baselayers",
    wrapadjacentdays: true,
}

export const referenceFeatures = {
    id: "Reference_Features_15m",
      type: "wmts",
      format: "image/png",
      projections: {
        geographic: {
          source: "GIBS:geographic",
          matrixSet: "15.625m",
          subtitle: "&copy; OpenStreetMap contributors",
          tags: "borders reference osm",
        },
        arctic: {
          id: "Reference_Features",
          tags: "osm reference, country, countries, state, province",
          source: "GIBS:arctic",
          matrixSet: "250m",
        },
      },
      ongoing: false,
      subtitle: "&copy; OpenStreetMap contributors, Natural Earth",
      title: "Coastlines / Borders / Roads",
      description: "reference/Reference_Features_15m",
      tags: "osm reference, country, countries, state, province",
      group: "overlays",
      layergroup: "Reference",
      wrapX: true,
}

export const referenceLabels = {
    id: "Reference_Labels_15m",
    type: "wmts",
    format: "image/png",
    projections: {
      geographic: {
        source: "GIBS:geographic",
        matrixSet: "15.625m",
      },
      arctic: {
        id: "Reference_Labels",
        tags: "osm reference, country, countries, state, province, cities, city",
        source: "GIBS:arctic",
        matrixSet: "250m",
      },
    },
    ongoing: false,
    subtitle: "&copy; OpenStreetMap contributors, Natural Earth",
    title: "Place Labels",
    description: "reference/Reference_Labels_15m",
    tags: "osm reference, country, countries, state, province, cities, city, towns, town, lakes, lake, parks, park, airports, airport",
    group: "overlays",
    layergroup: "Reference",
    noTransition: true,
    wrapX: true,
}

export const hls_landsat_firms = {
  id: "hls_landsat_firms_swir",
  name: 'hls_landsat_firms',
  title: 'Corrected Reflectance (True Color)',
  r: 'B07',
  g: 'B05',
  b: 'B04',
  collectionID: 'HLSL30',
}