import { Component, useState } from 'react'
import './App.css'
import Quote from './AdviceComponent'
import Advice from './AdviceComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Advice />
    </>
  )
}

export default App;
