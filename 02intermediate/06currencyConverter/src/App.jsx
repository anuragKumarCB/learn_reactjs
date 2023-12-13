import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const BackgroundImage = `https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
  //states 
  const [amount, setAmount] = useState(0)   // amount for refference
  const [from, setFrom] = useState('inr')   // from is currency type of amount
  const [to, setTo] = useState('usd')       // to is currency type in which conversion needs to happen
  const [convertedAmount, setConvertedAmount] = useState(0)

  //getting currency info from hook
  const currencyInfo = useCurrencyInfo(from)
  console.log(currencyInfo)

  // to show currency option we need name of currency not value and name is stored in key of object
  const options = Object.keys(currencyInfo)

  //swaing both amount and currency
  const swap = () => {
    setAmount(convertedAmount)
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
  }

  // conversion of amount 
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])  // to is desired currency option
  }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}
                currencyOptions={options}
                onCurrencyChange={(currency) =>
                  setAmount(amount)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) =>
                  setTo(currency)}
                selectCurrency={to}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default App;