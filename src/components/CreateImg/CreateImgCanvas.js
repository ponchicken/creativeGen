import React, { useState, useRef, useEffect } from 'react'

const getCropCoords = ({
  img,
  canvas
}) => {
  const scales = {
    x: 1, y: 1
  }

  const proportions = img.width / img.height

  if (img.width > canvas.width) {
    scales.x = canvas.width / img.width
  }

  const scale = (scales.x > scales.y) ? scales.y : scales.x

  return {
    srcX: 0,
    srcY: 0,
    srcWidth: img.width,
    srcHeight: img.height,
    x: 0,
    y: 0,
    width: img.width * scale,
    height: img.width * scale
  }
}

const loadImg = ({
  image,
  ctx,
  size
}) => {
  const imageEl = new Image()
  imageEl.src = image.url

  imageEl.addEventListener('load', () => {
    const drawOptions = getCropCoords({
      img: {
        width: imageEl.naturalWidth,
        height: imageEl.naturalHeight
      },
      canvas: {
        width: size.width,
        height: size.height
      }
    })
    
    ctx.drawImage(
      imageEl,
      ...Object.entries(drawOptions).map(([k, v]) => v)
    )
  })
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
