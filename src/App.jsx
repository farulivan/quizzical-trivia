import { useState, useEffect } from 'react'
import questionsData from './data'
import Home from './components/Home'
import Questions from './components/Questions'

function App() {
  const [isHome, setIsHome] = useState(true)

  return (
    <div className="App">
      <div className="bg-fixed text-sky-900 bg-[url('/ssscribble.svg')] h-screen flex justify-center items-center font-Inter font-normal">
        <section className="quiz-container min-h-screen min-w-screen sm:min-w-[30rem] sm:min-h-[30rem] flex flex-col items-center justify-center sm:m-7 p-12 bg-white rounded-3xl bg-[url('/blue-blobs.svg'),_url('/yellow-blobs.svg')] bg-[position:bottom_left,_top_right] bg-no-repeat">
          {isHome ? 
            <Home start={() => setIsHome(false)} /> 
            : <Questions back={() => setIsHome(true)} />
          }
        </section>
      </div>
    </div>
  )
}

export default App
