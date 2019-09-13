import React, { useContext } from 'react'
import { Data } from 'context'
import CreateImgCanvas from './CreateImgCanvas'

const CreateImg = () => {
  const { images } = useContext(Data.Context)

  return images.map((image, i) => <CreateImgCanvas key={i} image={image} />)
}

export default CreateImg
