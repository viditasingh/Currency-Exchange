import { useState } from 'react'
import './App.css'
import {InputBox} from './components '
import {useCurrencyInfo} from './hooks/useCurrencyInfo'

function App() {

  const [amount,setAmount] = useState(0)
  const [from,setFrom] = useState("inr")
  const [to,setTo] = useState("usd")
  const[convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {setConvertedAmount(amount*currencyInfo[to])}

  return (
    <>
      <h1 className='text-3xl bg-orange-500'>Currency app by Vidita</h1>
    </>
  )
}

export default App
