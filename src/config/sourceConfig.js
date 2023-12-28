export const sourceConfig = {
    "GIBS:geographic": {
      matrixSets: {
        "16km": {
          id: "16km",
          maxResolution: 0.5625,
          resolutions: [0.5625, 0.28125, 0.140625],
          tileSize: [512, 512],
          tileMatrices: [
            {
              matrixWidth: 2,
              matrixHeight: 1,
            },
            {
              matrixWidth: 3,
              matrixHeight: 2,
            },
            {
              matrixWidth: 5,
              matrixHeight: 3,
            },
          ],
        },
        "2km": {
          id: "2km",
          maxResolution: 0.5625,
          resolutions: [
            0.5625, 0.28125, 0.140625, 0.0703125, 0.03515625, 0.017578125,
          ],
          tileSize: [512, 512],
          tileMatrices: [
            {
              matrixWidth: 2,
              matrixHeight: 1,
            },
            {
              matrixWidth: 3,
              matrixHeight: 2,
            },
            {
              matrixWidth: 5,
              matrixHeight: 3,
            },
            {
              matrixWidth: 10,
              matrixHeight: 5,
            },
            {
              matrixWidth: 20,
              matrixHeight: 10,
            },
            {
              matrixWidth: 40,
              matrixHeight: 20,
            },
          ],
        },
        "1km": {
          id: "1km",
          maxResolution: 0.5625,
          resolutions: [
            0.5625, 0.28125, 0.140625, 0.0703125, 0.03515625, 0.017578125,
            0.0087890625,
          ],
          tileSize: [512, 512],
          tileMatrices: [
            {
              matrixWidth: 2,
              matrixHeight: 1,
            },
            {
              matrixWidth: 3,
              matrixHeight: 2,
            },
            {
              matrixWidth: 5,
              matrixHeight: 3,
            },
            {
              matrixWidth: 10,
              matrixHeight: 5,
            },
            {
              matrixWidth: 20,
              matrixHeight: 10,
            },
            {
              matrixWidth: 40,
              matrixHeight: 20,
            },
            {
              matrixWidth: 80,
              matrixHeight: 40,
            },
          ],
        },
        "500m": {
          id: "500m",
          maxResolution: 0.5625,
          resolutions: [
            0.5625, 0.28125, 0.140625, 0.0703125, 0.03515625, 0.017578125,
            0.0087890625, 0.00439453125,
          ],
          tileSize: [512, 512],
          tileMatrices: [
            {
              matrixWidth: 2,
              matrixHeight: 1,
            },
            {
              matrixWidth: 3,
              matrixHeight: 2,
            },
            {
              matrixWidth: 5,
              matrixHeight: 3,
            },
            {
              matrixWidth: 10,
              matrixHeight: 5,
            },
            {
              matrixWidth: 20,
              matrixHeight: 10,
            },
            {
              matrixWidth: 40,
              matrixHeight: 20,
            },
            {
              matrixWidth: 80,
              matrixHeight: 40,
            },
            {
              matrixWidth: 160,
              matrixHeight: 80,
            },
          ],
        },
        "250m": {
          id: "250m",
          maxResolution: 0.5625,
          resolutions: [
            0.5625, 0.28125, 0.140625, 0.0703125, 0.03515625, 0.017578125,
            0.0087890625, 0.00439453125, 0.002197265625,
          ],
          tileSize: [512, 512],
          tileMatrices: [
            {
              matrixWidth: 2,
              matrixHeight: 1,
            },
            {
              matrixWidth: 3,
              matrixHeight: 2,
            },
            {
              matrixWidth: 5,
              matrixHeight: 3,
            },
            {
              matrixWidth: 10,
              matrixHeight: 5,
            },
            {
              matrixWidth: 20,
              matrixHeight: 10,
            },
            {
              matrixWidth: 40,
              matrixHeight: 20,
            },
            {
              matrixWidth: 80,
              matrixHeight: 40,
            },
            {
              matrixWidth: 160,
              matrixHeight: 80,
            },
            {
              matrixWidth: 320,
              matrixHeight: 160,
            },
          ],
        },
        "31.25m": {
          id: "31.25m",
          maxResolution: 0.5625,
          resolutions: [
            0.5625, 0.28125, 0.140625, 0.0703125, 0.03515625, 0.017578125,
            0.0087890625, 0.00439453125, 0.002197265625, 0.0010986328125,
            0.00054931640625, 0.000274658203125,
          ],
          tileSize: [512, 512],
          tileMatrices: [
            {
              matrixWidth: 2,
              matrixHeight: 1,
            },
            {
              matrixWidth: 3,
              matrixHeight: 2,
            },
            {
              matrixWidth: 5,
              matrixHeight: 3,
            },
            {
              matrixWidth: 10,
              matrixHeight: 5,
            },
            {
              matrixWidth: 20,
              matrixHeight: 10,
            },
            {
              matrixWidth: 40,
              matrixHeight: 20,
            },
            {
              matrixWidth: 80,
              matrixHeight: 40,
            },
            {
              matrixWidth: 160,
              matrixHeight: 80,
            },
            {
              matrixWidth: 320,
              matrixHeight: 160,
            },
            {
              matrixWidth: 640,
              matrixHeight: 320,
            },
            {
              matrixWidth: 1280,
              matrixHeight: 640,
            },
            {
              matrixWidth: 2560,
              matrixHeight: 1280,
            },
          ],
        },
        "15.625m": {
          id: "15.625m",
          maxResolution: 0.5625,
          resolutions: [
            0.5625, 0.28125, 0.140625, 0.0703125, 0.03515625, 0.017578125,
            0.0087890625, 0.00439453125, 0.002197265625, 0.0010986328125,
            0.00054931640625, 0.000274658203125, 0.0001373291015625,
          ],
          tileSize: [512, 512],
          tileMatrices: [
            {
              matrixWidth: 2,
              matrixHeight: 1,
            },
            {
              matrixWidth: 3,
              matrixHeight: 2,
            },
            {
              matrixWidth: 5,
              matrixHeight: 3,
            },
            {
              matrixWidth: 10,
              matrixHeight: 5,
            },
            {
              matrixWidth: 20,
              matrixHeight: 10,
            },
            {
              matrixWidth: 40,
              matrixHeight: 20,
            },
            {
              matrixWidth: 80,
              matrixHeight: 40,
            },
            {
              matrixWidth: 160,
              matrixHeight: 80,
            },
            {
              matrixWidth: 320,
              matrixHeight: 160,
            },
            {
              matrixWidth: 640,
              matrixHeight: 320,
            },
            {
              matrixWidth: 1280,
              matrixHeight: 640,
            },
            {
              matrixWidth: 2560,
              matrixHeight: 1280,
            },
            {
              matrixWidth: 5120,
              matrixHeight: 2560,
            },
          ],
        },
      },
      url: "https://gibs-{a-c}.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi",
    },
    "GIBS:arctic": {
      url: "https://gibs-{a-c}.earthdata.nasa.gov/wmts/epsg3413/best/wmts.cgi",
      matrixSets: {
        "1km": {
          id: "1km",
          maxResolution: 8192.0,
          resolutions: [8192.0, 4096.0, 2048.0, 1024.0],
          tileSize: [512, 512],
          tileMatrices: [
            {
              matrixWidth: 2,
              matrixHeight: 2,
            },
            {
              matrixWidth: 4,
              matrixHeight: 4,
            },
            {
              matrixWidth: 8,
              matrixHeight: 8,
            },
            {
              matrixWidth: 16,
              matrixHeight: 16,
            },
          ],
        },
        "500m": {
          id: "500m",
          maxResolution: 8192.0,
          resolutions: [8192.0, 4096.0, 2048.0, 1024.0, 512.0],
          tileSize: [512, 512],
          tileMatrices: [
            {
              matrixWidth: 2,
              matrixHeight: 2,
            },
            {
              matrixWidth: 4,
              matrixHeight: 4,
            },
            {
              matrixWidth: 8,
              matrixHeight: 8,
            },
            {
              matrixWidth: 16,
              matrixHeight: 16,
            },
            {
              matrixWidth: 32,
              matrixHeight: 32,
            },
          ],
        },
        "250m": {
          id: "250m",
          maxResolution: 8192.0,
          resolutions: [8192.0, 4096.0, 2048.0, 1024.0, 512.0, 256.0],
          tileSize: [512, 512],
          tileMatrices: [
            {
              matrixWidth: 2,
              matrixHeight: 2,
            },
            {
              matrixWidth: 4,
              matrixHeight: 4,
            },
            {
              matrixWidth: 8,
              matrixHeight: 8,
            },
            {
              matrixWidth: 16,
              matrixHeight: 16,
            },
            {
              matrixWidth: 32,
              matrixHeight: 32,
            },
            {
              matrixWidth: 64,
              matrixHeight: 64,
            },
          ],
        },
        "31.25m": {
          id: "31.25m",
          maxResolution: 8192.0,
          resolutions: [
            8192.0, 4096.0, 2048.0, 1024.0, 512.0, 256.0, 128.0, 64.0, 32.0,
          ],
          tileSize: [512, 512],
          tileMatrices: [
            {
              matrixWidth: 2,
              matrixHeight: 2,
            },
            {
              matrixWidth: 4,
              matrixHeight: 4,
            },
            {
              matrixWidth: 8,
              matrixHeight: 8,
            },
            {
              matrixWidth: 16,
              matrixHeight: 16,
            },
            {
              matrixWidth: 32,
              matrixHeight: 32,
            },
            {
              matrixWidth: 64,
              matrixHeight: 64,
            },
            {
              matrixWidth: 128,
              matrixHeight: 128,
            },
            {
              matrixWidth: 256,
              matrixHeight: 256,
            },
            {
              matrixWidth: 512,
              matrixHeight: 512,
            },
          ],
        },
      },
    },
    "GIBS:antarctic": {
      url: "https://gibs-{a-c}.earthdata.nasa.gov/wmts/epsg3031/best/wmts.cgi",
      matrixSets: {
        "1km": {
          id: "1km",
          maxResolution: 8192.0,
          resolutions: [8192.0, 4096.0, 2048.0, 1024.0],
          tileSize: [512, 512],
          tileMatrices: [
            {
              matrixWidth: 2,
              matrixHeight: 2,
            },
            {
              matrixWidth: 4,
              matrixHeight: 4,
            },
            {
              matrixWidth: 8,
              matrixHeight: 8,
            },
            {
              matrixWidth: 16,
              matrixHeight: 16,
            },
          ],
        },
        "500m": {
          id: "500m",
          maxResolution: 8192.0,
          resolutions: [8192.0, 4096.0, 2048.0, 1024.0, 512.0],
          tileSize: [512, 512],
          tileMatrices: [
            {
              matrixWidth: 2,
              matrixHeight: 2,
            },
            {
              matrixWidth: 4,
              matrixHeight: 4,
            },
            {
              matrixWidth: 8,
              matrixHeight: 8,
            },
            {
              matrixWidth: 16,
              matrixHeight: 16,
            },
            {
              matrixWidth: 32,
              matrixHeight: 32,
            },
          ],
        },
        "250m": {
          id: "250m",
          maxResolution: 8192.0,
          resolutions: [8192.0, 4096.0, 2048.0, 1024.0, 512.0, 256.0],
          tileSize: [512, 512],
          tileMatrices: [
            {
              matrixWidth: 2,
              matrixHeight: 2,
            },
            {
              matrixWidth: 4,
              matrixHeight: 4,
            },
            {
              matrixWidth: 8,
              matrixHeight: 8,
            },
            {
              matrixWidth: 16,
              matrixHeight: 16,
            },
            {
              matrixWidth: 32,
              matrixHeight: 32,
            },
            {
              matrixWidth: 64,
              matrixHeight: 64,
            },
          ],
        },
      },
    },
    "GIBS:wms": {
      url: "https://gibs-{a-c}.earthdata.nasa.gov/wms/epsg4326/best/wms.cgi",
    },
    "GIBS:wms:arctic": {
      url: "https://gibs-{a-c}.earthdata.nasa.gov/wms/epsg3413/best/wms.cgi",
    },
    "GIBS:wms:antarctic": {
      url: "https://gibs-{a-c}.earthdata.nasa.gov/wms/epsg3031/best/wms.cgi",
    },
    "WDPA:wms": {
      url: "https://gis.unep-wcmc.org/arcgis/services/wdpa/public/MapServer/WMSServer",
    },
  }

export const projections = {
    antarctic: {
      id: "antarctic",
      epsg: 3031,
      crs: "EPSG:3031",
      proj4:
        "+title=WGS 84 / Antarctic Polar Stereographic +proj=stere +lat_0=-90 +lat_ts=-71 +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
      units: "m",
      maxExtent: [-4194304, -4194304, 4194304, 4194304],
      restrictedExtent: [-6500000, -5000000, 6500000, 5000000],
      resolutions: [16384.0, 8192.0, 4096.0, 2048.0, 1024.0, 512.0, 256.0],
      numZoomLevels: 7,
      fractionalZoom: false,
      startCenter: [0, 0],
      startZoom: 1,
    },
    arctic: {
      id: "arctic",
      epsg: 3413,
      crs: "EPSG:3413",
      proj4:
        "+title=WGS 84 / NSIDC Sea Ice Polar Stereographic North +proj=stere +lat_0=90 +lat_ts=70 +lon_0=-45 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
      units: "m",
      maxExtent: [-4194304, -4194304, 4194304, 4194304],
      restrictedExtent: [-6500000, -5000000, 6500000, 5000000],
      resolutions: [16384.0, 8192.0, 4096.0, 2048.0, 1024.0, 512.0, 256.0],
      numZoomLevels: 12,
      fractionalZoom: false,
      startCenter: [0, 0],
      startZoom: 1,
    },
    geographic: {
      id: "geographic",
      epsg: 4326,
      crs: "EPSG:4326",
      maxExtent: [-180, -90, 180, 90],
      restrictedExtent: [-230, -120, 230, 120],
      resolutions: [
        0.5625, 0.28125, 0.140625, 0.0703125, 0.03515625, 0.017578125,
        0.0087890625, 0.00439453125, 0.002197265625, 0.0010986328125,
        0.00054931640625, 0.00027465820313,
      ],
      numZoomLevels: 12,
      startCenter: [0, 0],
      startZoom: 1,
    },
  }