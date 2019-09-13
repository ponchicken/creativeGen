import React, { useContext } from 'react'
import { Data } from '../context'

const IMAGE_FORMATS = Object.freeze(new Set(['image/png', 'image/jpeg']))

const filterFormats = (files, formats) => {
  return Array.from(files).filter(file => formats.has(file.type))
}

const onChange = onFinish => e => {
  const images = filterFormats(e.target.files, IMAGE_FORMATS)
  onFinish(images)
}

const UploadFile = () => {
  const { setImages } = useContext(Data.ActionsContext)

  const onLoadFinish = files => {
    setImages(
      files.map(file => ({
        file,
        url: window.URL.createObjectURL(file)
      }))
    )
  }

  return (
    <div>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={onChange(onLoadFinish)}
        placeholder="load imgs"
      />
    </div>
  )
}

export default UploadFile
