import './App.css'
import Button from './components/Button'
import Quote from './components/Quote'
import quotes from './utils/quotes.json'
import getRandomArray from './utils/getRandomArray'
import { useState } from 'react'
const imgs = [1, 2, 3, 4, 5, 6]

function App() {
  const [quoteRandom, setQuoteRandom] = useState(getRandomArray(quotes))
  const [numberImg, setNumberImg] = useState(getRandomArray(imgs))

  const appStyle = {
    backgroundImage: `url('/backgrounds/bg-${numberImg}.jpg')`,
  }
  return (
    <div style={appStyle} className="App">
      <h1 className="App_title">Fortune Cookie</h1>
      <Button setQuoteRandom={setQuoteRandom} setNumberImg={setNumberImg} />
      <Quote quoteRandom={quoteRandom} />
    </div>
  )
}

export default App
