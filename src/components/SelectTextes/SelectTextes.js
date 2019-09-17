import React, { useState, useContext } from 'react'
import { Data } from 'context'

const SelectTextes = () => {
  const { addText } = useContext(Data.ActionsContext)
  const [text, setText] = useState('')

  const onFormSubmit = (e) => {
    e.preventDefault()
    addText(text)
    setText('')
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button type='submit'>add text</button>
    </form>
  )
}

export default SelectTextes
