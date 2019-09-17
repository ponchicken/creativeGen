import React, { useState, createContext } from 'react'

const Context = createContext({})
const ImagesContext = createContext([])
const SizesContext = createContext(new Set([]))
const CanvasesContext = createContext(new Set([]))
const ActionsContext = createContext({})
const TextesContext = createContext([])

const Provider = ({ children }) => {
  const [images, setImages] = useState([])
  const [sizes, setSizes] = useState(new Set([]))
  const [textes, setTextes] = useState([])
  const [canvases, setCanvases] = useState(new Set())

  const toggleSize = (inputSize) => {
    setSizes(sizes => {
      const newSizes = new Set(sizes)
      newSizes.delete(inputSize) || newSizes.add(inputSize)
      return newSizes
    })
  }

  const addCanvases = (inputCanvases) => {
    console.log('addCanvases', inputCanvases)
    setCanvases(prev => {
      return [
        ...prev, ...inputCanvases
      ]
    })
  }

  const addText = (text) => {
    setTextes(prev => prev.concat(text))
  }

  const value = {
    images, sizes, canvases, textes
  }

  const actions = {
    setImages, toggleSize, setSizes, setCanvases, addCanvases, setTextes, addText
  }

  return (
    <Context.Provider value={value}>
      <ImagesContext.Provider value={images}>
        <TextesContext.Provider value={textes}>
          <SizesContext.Provider value={sizes}>
            <CanvasesContext.Provider value={canvases}>
              <ActionsContext.Provider value={actions}>
                {children}
              </ActionsContext.Provider>
            </CanvasesContext.Provider>
          </SizesContext.Provider>
        </TextesContext.Provider>
      </ImagesContext.Provider>
    </Context.Provider>
  )
}

export {
  Context,
  ImagesContext,
  SizesContext,
  TextesContext,
  CanvasesContext,
  ActionsContext,
  Provider
}
