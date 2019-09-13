import React, { useState, useRef, useEffect } from 'react'

const loadImg = ({ image, ctx }) => {
  ctx.imageSmoothingEnabled = true

  const imageEl = new Image()
  imageEl.src = image.url

  const drawOptions = {
    x: 0,
    y: 0,
    cropWidth: 2000,
    cropHeight: 2000,
    offsetX: 0,
    offsetY: 0,
    scaleWidth: 250,
    scaleHeight: 250
  }

  imageEl.addEventListener(
    'load',
    () => {
      ctx.drawImage(
        imageEl,
        ...Object.entries(drawOptions).map(([k, v]) => v)
      )
    },
    false
  )
}

const getDataUrl = (ref) => {
  return HTMLCanvasElement.prototype.toDataURL.call(ref.current)
}

const downloadFromUrl = ({
  url,
  filename = 'file'
}) => {
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
}

const CreateImg = ({ image }) => {
  const canvasEl = useRef(null)
  const [ctx, setCtx] = useState(null)


  useEffect(() => {
    if (canvasEl) {
      setCtx(canvasEl.current.getContext('2d'))
    }
  }, [canvasEl])

  useEffect(() => {
    if (image && ctx) {
      loadImg({
        image,
        ctx
      })
    }
  }, [image, ctx])

  const onDownloadClick = () => {
    const url = getDataUrl(canvasEl)
    downloadFromUrl({
      url,
      filename: 'image'
    })
  }

  return (
    <div>
      <canvas ref={canvasEl} />
      <button
        onClick={onDownloadClick}
      >
        llink
      </button>
    </div>
  )
}

export default CreateImg
