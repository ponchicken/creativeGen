import React, { useContext } from 'react'
import { Data } from 'context'

const PreviewImages = () => {
  const textes = useContext(Data.TextesContext)

  return (
    <div>
      {textes.map((text, i) => (
        <div key={i}>{ text }</div>
      ))}
    </div>
  )
}

export default PreviewImages
