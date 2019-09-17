import React, { useState, useRef, useEffect } from 'react'
import { cover } from './helpers'
import Promise from 'lie'

const loadImg = ({
  image,
  ctx,
  size
}) => {
  return new Promise(resolve => {
    const imageEl = new Image()
    imageEl.src = image.url
  
    imageEl.addEventListener('load', () => {
      const {
        x, 
        y, 
        width, 
        height
      } =  cover(
        imageEl.naturalWidth,
        imageEl.naturalHeight,
        size.width,
        size.height
      )
      console.log(
        imageEl.naturalWidth,
        imageEl.naturalHeight,
        size.width,
        size.height)
      
      ctx.drawImage(
        imageEl,
        x,
        y, 
        width, 
        height,
        0,
        0,
        size.width,
        size.height
      )

      resolve(ctx)
    })
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
  size,
  text,
  onCanvasCreate
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
        text,
        ctx
      }).then((ctx) => {
        onCanvasCreate([canvasEl])
      })
      
    }
  }, [image, size, text, ctx])

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
        <span role='img' aria-label='download'>📥</span>
      </button>
    </div>
  )
}

export default CreateImgCanvas
