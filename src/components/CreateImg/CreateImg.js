import React, { useContext, useEffect } from 'react'
import { Data } from 'context'
import CreateImgCanvas from './CreateImgCanvas'

const CreateImg = () => {
  const images = useContext(Data.ImagesContext)
  const sizes = useContext(Data.SizesContext)
  const { setCanvases, addCanvases } = useContext(Data.ActionsContext)

  useEffect(() => {
    setCanvases([])
  }, [images, setCanvases])

  return images.map((image, i) => (
    Array.from(sizes).map((size, j) => {
      return (
        <CreateImgCanvas
          key={`${i}_${j}`}
          image={image}
          size={size}
          onCanvasCreate={addCanvases}
        />
      )
    })
  ))
}

export default CreateImg
