import React, { createContext, useState } from 'react'

export const MapContext = createContext({
  map: null,
  setMap: () => {},
})

export const MapProvider = ({ children }) => {
  const [map, setMap] = useState(null)

  return (
    <MapContext.Provider value={{ map, setMap }}>
      {children}
    </MapContext.Provider>
  )
}
