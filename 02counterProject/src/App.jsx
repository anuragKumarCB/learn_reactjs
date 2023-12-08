import { useState } from 'react'
import './App.css'

function App() {
  // let count = 10;
  let upperLimit = 20;
  let lowerLimit = 0;
  let [count, setCount] = useState(10)

  const addCount = () => {
    if (count < upperLimit) {
      count = count + 1;
      console.log(count)
      setCount(count)
    }
    else if (count === upperLimit) {
      alert(`you have hit the upper limit`)
    }
  }

  const removeCount = () => {
    if (count > lowerLimit) {
      count = count - 1;
      console.log(count)
      setCount(count)
    }
    else if (count === lowerLimit) {
      alert(`you have hit the lower limit`)
    }

  }

  return (
    <>
      <h1>Counter App</h1>
      <h3>Count : {count}</h3>
      <br />
      <button
        onClick={addCount}
      >
        Increase Count
      </button>
      <button
        onClick={removeCount}
      >
        Decrease Count
      </button>
      <p>I have count value too : {count}</p>
      <span>well i have too : {count}</span>
      <h4>no sh*t : {count}</h4>
      <h3>do whatever you want but you cant go upper than <span className='limits'>{upperLimit}</span> and lower than <span className='limits'>{lowerLimit}</span></h3>
    </>
  )
}

export default App
