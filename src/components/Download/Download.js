import React, { useContext } from 'react'
import { Data } from 'context'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'

const Downloaad = () => {
  const canvases = useContext(Data.CanvasesContext)

  const genBlob = (ref, cb) => {
    return HTMLCanvasElement.prototype.toBlob.call(ref.current, cb)
  }

  const onDownloadClick = () => {
    const zip = new JSZip()

    const generations = canvases.map((canvas, i) => {
      return new Promise(resolve => {
        genBlob(canvas, blob => {
          zip.file(`image_${i}.png`, blob,  { base64: true })
          resolve()
        })
      })
    })

    Promise.all(generations).then(() => {
      zip.generateAsync({ type: 'blob' })
        .then(content => {
          saveAs(content, 'example.zip')
        })
    })
  }

  return (
    <div>
      <button onClick={onDownloadClick}>
        Download
      </button>
    </div>
  )
}

export default Downloaad
