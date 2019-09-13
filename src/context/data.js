import React, { useState, createContext } from 'react'

const Context = createContext({
  images: []
})
const ActionsContext = createContext({})

const Provider = ({ children }) => {
  const [images, setImages] = useState([])

  const value = {
    images
  }
  const actions = {
    setImages
  }

  return (
    <Context.Provider value={value}>
      <ActionsContext.Provider value={actions}>
        {children}
      </ActionsContext.Provider>
    </Context.Provider>
  )
}

export { Context, ActionsContext, Provider }
