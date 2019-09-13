import React, { useContext } from 'react'
import { Data } from 'context'

const PreviewImages = () => {
  const { images } = useContext(Data.Context)

  return (
    <figure>
      {images.map(image => (
        <img
          src={image.url}
          key={image.url}
          alt=""
        />
      ))}
    </figure>
  )
}

export default PreviewImages
