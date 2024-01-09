import { useState } from 'react'
import './App.css'

function App() {
  const colorObject = [
    //color property is background color
    //textBlack property is color of text on that specific background
    {
      color: 'red',
      textBlack: false
    },
    {
      color: 'green',
      textBlack: false
    },
    {
      color: 'blue',
      textBlack: false
    },
    {
      color: 'olive',
      textBlack: false
    },
    {
      color: 'gray',
      textBlack: false
    },
    {
      color: 'yellow',
      textBlack: true
    },
    {
      color: 'pink',
      textBlack: true
    },
    {
      color: 'purple',
      textBlack: false
    },
    {
      color: 'lavender',
      textBlack: true
    },
    {
      color: 'white',
      textBlack: true
    },
    {
      color: 'black',
      textBlack: false
    },]

  const [bgColor, setBgColor] = useState('tomato')
  const buttonClassName = 'py-2 px-6 border-2 rounded-full'

  return (
    <>
      <div className='h-screen w-screen bg-green-400' style={{ backgroundColor: bgColor }}>
        <div className='my-0 mx-auto flex gap-6 justify-center items-center max-w-fit py-2 px-6 bg-white rounded-full '>

          {colorObject.map((item) => (
            <button key={item.color} className={`${buttonClassName} ${item.textBlack ? 'text-black' : 'text-white'}`} onClick={() => setBgColor(item.color)} style={{ backgroundColor: item.color, }}>{item.color.toUpperCase()}</button>
          ))}

        </div>

      </div>
    </>
  )
}

export default App
