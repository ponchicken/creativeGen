import React, { useState, useRef, useEffect } from 'react'

const loadImg = ({ image, ctx }) => {
  const imageEl = new Image()
  imageEl.src = image.url
  console.log(image.url)
  imageEl.addEventListener(
    'load',
    function() {
      ctx.drawImage(imageEl, 0, 0)
    },
    false
  )
}

const CreateImg = ({ image }) => {
  const canvasEl = useRef()
  const [ctx, setCtx] = useState(null)

  useEffect(() => {
    setCtx(canvasEl.current.getContext('2d'))
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
