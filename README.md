# React + Vite

This is a work in progress. This should demonstrate the ability to perform contrast stretching on DDV GeoTIFF tiles in OpenLayers.

## Installation and Operation

1. `git clone https://github.com/nasa-gibs/wv-contrast-stretching-demo.git`
2. `npm install`
3. `npm run dev`
4. App will be available at `http://localhost:5173/wv-contrast-stretch-demo/`

## Notes

If the GeoTIFF files do not appear on the initial load, refresh the page. The GeoTIFF source from OL seems to be blocking the GeoTIFF requests occasionally.

There are just 2 GeoTIFF files available on the map. The northernmost tile is a DDV tile with SWIR. The southernmost tile is a DDV tile without SWIR.
