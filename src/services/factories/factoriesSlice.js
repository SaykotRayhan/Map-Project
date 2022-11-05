import { createSlice } from '@reduxjs/toolkit'

export const factoriesSlice = createSlice({
  name: 'factories',
  initialState: {
    stations: [],
    factories: [],
    filter: false,
  },
  reducers: {
    updateFilters: (state, action) => {
      state.filter = action.payload.filter
    },
    setStations: (state, action) => {
      state.stations = action.payload.stations
    },
    setFactories: (state, action) => {
      state.factories = action.payload.factories
    },
  },
})

export const { updateFilters, setStations, setFactories } =
  factoriesSlice.actions

export default factoriesSlice.reducer
