import React, { useState, createContext } from 'react'

const Context = createContext({})
const ImagesContext = createContext([])
const SizesContext = createContext(new Set())
const ActionsContext = createContext({})

const Provider = ({ children }) => {
  const [images, setImages] = useState([])
  const [sizes, setSizes] = useState(new Set())

  const toggleSize = (inputSize) => {
    setSizes(sizes => {
      const newSizes = new Set(sizes)
      newSizes.delete(inputSize) || newSizes.add(inputSize)
      return newSizes
    })
  }

  const value = {
    images, sizes
  }

  const actions = {
    setImages, toggleSize, setSizes
  }

  return (
    <Context.Provider value={value}>
      <ImagesContext.Provider value={images}>
        <SizesContext.Provider value={sizes}>
          <ActionsContext.Provider value={actions}>
            {children}
          </ActionsContext.Provider>
        </SizesContext.Provider>
      </ImagesContext.Provider>
    </Context.Provider>
  )
}

export {
  Context,
  ImagesContext,
  SizesContext,
  ActionsContext,
  Provider
}
