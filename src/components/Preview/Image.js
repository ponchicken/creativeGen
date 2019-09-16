import React, { useContext } from 'react'
import { Data } from 'context'

const PreviewImages = () => {
  const { images } = useContext(Data.Context)

  return (
    <div>
      {images.map(image => (
        <img
          src={image.url}
          key={image.url}
          alt=""
        />
      ))}
    </div>
  )
}

export default PreviewImages
