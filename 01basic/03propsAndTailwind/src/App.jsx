import './App.css'
import Card from './components/Card'
import ItemDetails from './components/ItemDetails'

function App() {

  return (
    <>
      <h1 className="text-xxl bg-pink-700 py-2 px-4 mb-4 max-w-xs">
        Tailwind CSS
      </h1>
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">

        {ItemDetails.map((item, index) => {
          return <Card itemDetails={item} />
        })}
      </div>

    </>
  )
}

export default App
