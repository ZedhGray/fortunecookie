import './App.css'
import Button from './components/Button'
import Quote from './components/Quote'
import quotes from './utils/quotes.json'
import getRandomArray from './utils/getRandomArray'
import { useState } from 'react'
import ParticlesBackground from './components/ParticlesBackground'
const imgs = [1, 2, 3]

function App() {
  const [quoteRandom, setQuoteRandom] = useState(getRandomArray(quotes))
  const [numberImg, setNumberImg] = useState(getRandomArray(imgs))

  const appStyle = {
    backgroundImage: `url('/backgrounds/bg-${numberImg}.jpg')`,
  }
  return (
    <div style={appStyle} className="App">
      <ParticlesBackground />
      <h1 className="App_title">
        <img src="backgrounds/H1.png" alt="" />
      </h1>
      <Button setQuoteRandom={setQuoteRandom} setNumberImg={setNumberImg} />
      <Quote quoteRandom={quoteRandom} />
    </div>
  )
}

export default App
