import React, { useState, createContext } from 'react'

const Context = createContext({})
const ImagesContext = createContext([])
const SizesContext = createContext(new Set())
const CanvasesContext = createContext([])
const ActionsContext = createContext({})

const Provider = ({ children }) => {
  const [images, setImages] = useState([])
  const [sizes, setSizes] = useState(new Set())
  const [canvases, setCanvases] = useState(new Set())

  const toggleSize = (inputSize) => {
    setSizes(sizes => {
      const newSizes = new Set(sizes)
      newSizes.delete(inputSize) || newSizes.add(inputSize)
      return newSizes
    })
  }

  const addCanvases = (inputCanvases) => {
    setCanvases(prev => {
      return [
        ...prev, ...inputCanvases
      ]
    })
  }

  const value = {
    images, sizes, canvases
  }

  const actions = {
    setImages, toggleSize, setSizes, setCanvases, addCanvases
  }

  return (
    <Context.Provider value={value}>
      <ImagesContext.Provider value={images}>
        <SizesContext.Provider value={sizes}>
          <CanvasesContext.Provider value={canvases}>
            <ActionsContext.Provider value={actions}>
              {children}
            </ActionsContext.Provider>
          </CanvasesContext.Provider>
        </SizesContext.Provider>
      </ImagesContext.Provider>
    </Context.Provider>
  )
}

export {
  Context,
  ImagesContext,
  SizesContext,
  CanvasesContext,
  ActionsContext,
  Provider
}
