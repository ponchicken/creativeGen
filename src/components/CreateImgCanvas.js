import React, { useState, useRef, useEffect } from 'react'

const loadImg = ({ image, ctx }) => {
  ctx.imageSmoothingEnabled = true

  const imageEl = new Image()
  imageEl.src = image.url
  console.log(image.url)
  const drawOptions = {
    x: 0,
    y: 0,
    cropWidth: 2000,
    cropHeight: 2000,
    offsetX: 0,
    offsetY: 0,
    scaleWidth: 200,
    scaleHeight: 200
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

const CreateImg = ({ image }) => {
  const canvasEl = useRef()
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

  return (
    <div>
      <button onClick={loadImg}>load img</button>
      <canvas ref={canvasEl} />
    </div>
  )
}

export default CreateImg
