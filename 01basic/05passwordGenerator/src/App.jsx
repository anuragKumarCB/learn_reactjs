import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {

  // states here
  const [password, setPassword] = useState("")  // this app is about password-generation so password
  const [length, setLength] = useState(8) // passwrod needs a length so length 
  const [numberAllowed, setNumberAllowed] = useState(false) // password can be numerical so numbers or no-number
  const [characterAllowed, setCharacterAllowed] = useState(false) // password can contain special-characters so yes or no

  // useRef() hooks
  const passwordRef = useRef(null)  //initial value null

  // password generation and updation function
  const generatePassword = useCallback(() => {  // for optimization use useCallback()

    let passwordString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" //variable containing all the character from which password can be generated
    let passwordGenerated = ""  // variable to store randomly generated characters

    if (numberAllowed) passwordString += "0123456789" // if numbers are allowed then add it to passwordString
    if (characterAllowed) passwordString += "@#$%&*_-~" // if special-character are allowed then add it to passwordString

    for (let i = 0; i < length; i++) {
      let randomCharacter = Math.floor(Math.random() * passwordString.length + 1) //genertating random character for password
      passwordGenerated += passwordString.charAt(randomCharacter) //store it to a variable
    }
    setPassword(passwordGenerated)  //update the state

  }, [length, numberAllowed, characterAllowed, setPassword])

  //password copy function
  const copyPasswordToClipboard = useCallback(() => { //if you need optimization then use it if not then don't
    passwordRef.current?.select() //selecting only when there is value
    passwordRef.current?.setSelectionRange(0, 21) //doing this makes it more optimize
    window.navigator.clipboard.writeText(password)  //window is directly avaiable becuase we are using React and React is JS
  })
  // rendering password
  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, characterAllowed, generatePassword])

  return (
    <>
      <div className='w-xl max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 text-orange-500  bg-gray-700 shrink-0'>
        <h1 className='text-white text-center my-5 text-2xl'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            placeholder='Password'
            className='outline-none w-full py-1 px-3'
            readOnly //user cant add anything to the field
            ref={passwordRef} //providing refference 
          />
          <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-600'
            onClick={copyPasswordToClipboard}
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2 '>
          <div className='flex items-center gap-x-1 '>
            <input
              type="range"
              id='passwordLength'
              min={6}
              max={20}
              value={length}
              className='cursor-pointer '
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
            <label htmlFor="passwordLength">Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              id='numberInput'
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput">Include-Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              id="specialCharacterInput"
              defaultChecked={characterAllowed}
              onChange={() => {
                setCharacterAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="specialCharacterInput">Special-Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
