import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

import { Data } from './context'

import CreateImg from './components/CreateImg'
import UploadFile from './components/UploadFile'
import { PreviewImages } from './components/PreviewImages'

function App() {
  return (
    <div className="App">
      <Data.Provider>
        <div className="raw">
          <UploadFile />
        </div>
        <div className="raw">
          <PreviewImages />
        </div>
        <div className="raw">
          <CreateImg />
        </div>
      </Data.Provider>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
