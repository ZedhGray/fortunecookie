import getRandomArray from '../utils/getRandomArray'
import quotes from '../utils/quotes.json'

const Button = ({ setQuoteRandom, setNumberImg }) => {
  const handleChangeQuote = () => {
    const newQuote = getRandomArray(quotes)
    setQuoteRandom(newQuote)
    setNumberImg(getRandomArray([1, 2, 3, 4, 5, 6]))
  }
  return <button className="App_btn" onClick={handleChangeQuote}></button>
}

export default Button
