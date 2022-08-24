import { useState } from 'react'
import Home from './components/Home'
import Questions from './components/Questions'
import Result from './components/Result'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="bg-fixed text-slate-800 bg-[url('/ssscribble.svg')] h-screen flex justify-center items-center font-Inter font-normal">
        <section className="quiz-container w-[36rem] h-[36rem] bg-white rounded-3xl relative">
          <img className="absolute top-0 right-0 rounded-tr-3xl" src="/yellow-blobs.svg" />
          {/* <Home /> */}
          <Questions />
          {/* <Result /> */}
          <img className="absolute bottom-0 left-0 rounded-bl-3xl" src="/blue-blobs.svg" />
        </section>
      </div>
    </div>
  )
}

export default App
