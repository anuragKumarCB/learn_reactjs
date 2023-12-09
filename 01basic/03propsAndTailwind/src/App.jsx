import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import ItemDetails from './components/ItemDetails'

function App() {
  // const item1 = {
  //   cName: 'Puma',
  //   imgSrc: 'https://images.pexels.com/photos/6777913/pexels-photo-6777913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //   size1: 6,
  //   size2: 8,
  //   size3: 9
  // }
  // const item2 = {
  //   cName: 'Nice',
  //   imgSrc: 'https://images.pexels.com/photos/18946895/pexels-photo-18946895/free-photo-of-air-jordan-retro-4-union-guava-ice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //   size1: 6,
  //   size2: 7,
  //   size3: 8
  // }
  // const item3 = {
  //   cName: 'Adidas',
  //   imgSrc: 'https://images.pexels.com/photos/1599005/pexels-photo-1599005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //   size1: 6,
  //   size2: 9,
  //   size3: 10
  // }
  // const item4 = {
  //   cName: 'Reebok',
  //   imgSrc: 'https://images.pexels.com/photos/18946633/pexels-photo-18946633/free-photo-of-reebok-question-mid-nice-kicks-bubba-chuck-shoe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //   size1: 7,
  //   size2: 8,
  //   size3: 9
  // }

  return (
    <>
      <h1 className="text-xxl bg-pink-700 py-2 px-4 mb-4 max-w-xs	`">
        Tailwind CSS
      </h1>
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">

        {/* <Card itemDetails={item1} />
        <Card itemDetails={item2} />
        <Card itemDetails={item3} />
        <Card itemDetails={item4} /> */}
        {ItemDetails.map((item, index) => {
          return <Card itemDetails={item} />
        })}
      </div>

    </>
  )
}

export default App
