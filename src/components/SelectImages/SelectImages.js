import React, { useContext } from 'react'
import { Data } from 'context'
import { UploadFiles } from 'components'

const SelectImages = () => {
  const { setImages } = useContext(Data.ActionsContext)

  const onUploadFiles = files => {
    setImages(
      files.map(file => ({
        file,
        url: window.URL.createObjectURL(file)
      }))
    )
  }

  return (
    <div>
      <UploadFiles
        onUploadFiles={onUploadFiles}
      />
    </div>
  )
}

export default SelectImages
