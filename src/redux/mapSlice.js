import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    layers: [
        {
            name: "Corrected Reflectance (True Color)",
            visible: true,
            order: 0,
            id: "VIIRS_SNPP_CorrectedReflectance_TrueColor"
        },
        {
            name: "HLS Landsat FIRMS SWIR",
            visible: true,
            order: 1,
            id: "hls_landsat_firms_swir",
        },
        {
            name: "HLS Landsat FIRMS NO SWIR",
            visible: true,
            order: 2,
            id: "hls_landsat_firms_no_swir",
        },
        {
            name: "Coastlines / Borders / Roads",
            visible: true,
            order: 3,
            id: "Reference_Features_15m",
        },
        {
            name: "Place Labels",
            visible: true,
            order: 4,
            id: "Reference_Labels_15m",
        },
    ],
}

export const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        setLayerVisibility: (state, action) => {
            const { id, visible } = action.payload;
            const layer = state.layers.find(layer => layer.id === id);
            if (layer) {
                layer.visible = !visible;
            }
        },
    },
})

export const { setLayerVisibility } = mapSlice.actions
export default mapSlice.reducer