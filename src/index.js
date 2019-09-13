import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

import { Creatives } from './entries'

function App() {
  return (
    <div className="App">
      <Creatives />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
