import React, { useState, useRef, useEffect } from 'react'

const loadImg = ({
  image,
  ctx,
  size
}) => {
  // ctx.imageSmoothingEnabled = true

  const imageEl = new Image()
  imageEl.src = image.url

  const drawOptions = {
    x: 0,
    y: 0,
    width: size.width,
    height: size.height,
    // offsetX: 0,
    // offsetY: 0,
    // scaleWidth: size.width,
    // scaleHeight: size.height
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

const CreateImgCanvas = ({
  image,
  size
}) => {
  const canvasEl = useRef(null)
  const [ctx, setCtx] = useState(null)


  useEffect(() => {
    if (canvasEl) {
      setCtx(canvasEl.current.getContext('2d'))
    }
  }, [canvasEl])

  useEffect(() => {
    if (image && size && ctx) {
      loadImg({
        image,
        size,
        ctx
      })
    }
  }, [image, size, ctx])

  const onDownloadClick = () => {
    const url = getDataUrl(canvasEl)
    downloadFromUrl({
      url,
      filename: 'image'
    })
  }

  return (
    <div>
      <canvas
        ref={canvasEl}
        width={size.width}
        height={size.height}
      />
      <button
        onClick={onDownloadClick}
      >
        llink
      </button>
    </div>
  )
}

export default CreateImgCanvas
