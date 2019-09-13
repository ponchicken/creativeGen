import React, { useContext } from 'react'
import { Data } from 'context'
import CreateImgCanvas from './CreateImgCanvas'

const CreateImg = () => {
  const { images } = useContext(Data.Context)
  const { sizes } = useContext(Data.Context)

  return images.map((image, i) => (
    Array.from(sizes).map((size, j) => {
      return (
        <CreateImgCanvas
          key={`${i}_${j}`}
          image={image}
          size={size}
        />
      )
    })
  ))
}

export default CreateImg
