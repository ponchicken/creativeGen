import React from 'react'

const IMAGE_FORMATS = Object.freeze(new Set(['image/png', 'image/jpeg']))

const filterFormats = (files, formats) => {
  return Array.from(files).filter(file => formats.has(file.type))
}

const UploadFiles = ({
  onUploadFiles
}) => {
  const onInputChange = e => {
    const filteredImages = filterFormats(e.target.files, IMAGE_FORMATS)
    onUploadFiles(filteredImages)
  }

  return (
    <input
      type="file"
      multiple
      accept="image/*"
      onChange={onInputChange}
      placeholder="load imgs"
    />
  )
}

export default UploadFiles
