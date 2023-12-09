import { useState } from 'react'
import './App.css'
import ColorBtn from './components/ColorBtn'
import ColorBtnData from './components/ColorBtnData'

function App() {
  //intial color using state
  const [bgColor, setBgColor] = useState('black')

  // function for changing color
  // const setRed = () => {
  //   setColor(prevColor => 'red')
  // }
  // const setGreen = () => {
  //   setColor(prevColor => 'green')
  // }
  // const setYellow = () => {
  //   setColor(prevColor => 'yellow')
  // }
  // const setBlue = () => {
  //   setColor(prevColor => 'blue')
  // }
  // const setOlive = () => {
  //   setColor(prevColor => 'olive')
  // }
  // const setGray = () => {
  //   setColor(prevColor => 'gray')
  // }
  // const setPink = () => {
  //   setColor(prevColor => 'pink')
  // }
  // const setPurple = () => {
  //   setColor(prevColor => 'purple')
  // }
  // const setLarvender = () => {
  //   setColor(prevColor => 'larvender')
  // }
  // const setWhite = () => {
  //   setColor(prevColor => 'white')
  // }
  // const setBlack = () => {
  //   setColor(prevColor => 'black')
  // }
  const cName = 'py-2 px-6 border-2 rounded-full';
  return (
    <div className='h-screen w-screen ' style={{ backgroundColor: bgColor }}>
      <div className="my-0 mx-auto flex gap-6 justify-center items-center max-w-fit py-2 px-6 bg-white rounded-full">
        <ColorBtn colorName="Red" handleClick={() => setBgColor('red')} cName={cName} />
        <ColorBtn colorName="Green" handleClick={() => setBgColor('green')} cName={cName} />
        <ColorBtn colorName="Blue" handleClick={() => setBgColor('blue')} cName={cName} />
        <ColorBtn colorName="Olive" handleClick={() => setBgColor('olive')} cName={cName} />
        <ColorBtn colorName="Gray" handleClick={() => setBgColor('gray')} cName={cName} />
        <ColorBtn colorName="Yellow" handleClick={() => setBgColor('yellow')} cName={cName} textColor="Black" />
        <ColorBtn colorName="Pink" handleClick={() => setBgColor('pink')} cName={cName} textColor="Black" />
        <ColorBtn colorName="Purple" handleClick={() => setBgColor('purple')} cName={cName} />
        <ColorBtn colorName="Lavender" handleClick={() => setBgColor('lavender')} cName={cName} textColor="Black" />
        <ColorBtn colorName="White" handleClick={() => setBgColor('white')} cName={cName} textColor="Black" />
        <ColorBtn colorName="Black" handleClick={() => setBgColor('black')} cName={cName} />

      </div>
    </div>
  )
}

export default App
