import React from 'react'

import { Data } from 'context'

import {
  CreateImg, SelectImages, SelectSizes, Preview
} from 'components'

const Creatives = () => {
  return (
    <Data.Provider>
      <div className="raw">
        <SelectSizes />
      </div>
      <div className="raw">
        <SelectImages />
      </div>
      <div className="raw">
        <Preview.Image />
      </div>
      <div className="raw">
        <CreateImg />
      </div>
    </Data.Provider>
  )
}

export default Creatives
