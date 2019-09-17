import React from 'react'

import { Data } from 'context'

import {
  CreateImg, SelectImages, SelectSizes, SelectTextes, Preview, Download
} from 'components'

const Creatives = () => {
  return (
    <Data.Provider>
      <div className="raw">
        <SelectSizes />
      </div>
      <div className="raw">
        <SelectTextes />
      </div>
      <div className="raw">
        <Preview.Textes />
      </div>
      <div className="raw">
        <SelectImages />
      </div>
      <div className="raw">
        <Preview.Image />
      </div>
      <div className="raw resultImages">
        <CreateImg />
      </div>
      <div className="raw">
        <Download />
      </div>
    </Data.Provider>
  )
}

export default Creatives
