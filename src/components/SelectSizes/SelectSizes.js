import React, { useContext } from 'react'
import { Data } from 'context'

const SIZES = [
  {
    height: 300,
    width: 300
  },
  {
    height: 500,
    width: 500
  },
  {
    height: 100,
    width: 200
  },
  {
    height: 200,
    width: 100
  }
]

const SelectSizes = () => {
  const { toggleSize } = useContext(Data.ActionsContext)

  return (
    <div>
      {
        SIZES.map((size, i) => (
          <label key={i}>
            <input
              type='checkbox'
              name='sizes'
              value={i}
              onChange={e => toggleSize(SIZES[i])}
            />
            <span>{ size.width } x { size.height }</span>
          </label>
        ))
      }
    </div>
  )
}

export default SelectSizes
