import { useState, useEffect } from 'react'
import Home from './components/Home'
import Questions from './components/Questions'
import Result from './components/Result'


function App() {

  const [questions, setQuestions] = useState()

  function getQuestions() {
    fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
    .then(res => res.json())
    .then(data => setQuestions(data.results))
  }
  
  useEffect(function() {
      getQuestions()
  },[])

  const questionElements = questions.map(data => (
    <Questions 
      question={data.question}
    />
  ))

  return (
    <div className="App">
      <div className="bg-fixed text-slate-800 bg-[url('/ssscribble.svg')] h-screen flex justify-center items-center font-Inter font-normal">
        <section className="quiz-container w-[36rem] flex flex-col items-center justify-center p-12 bg-white rounded-3xl bg-[url('/blue-blobs.svg'),_url('/yellow-blobs.svg')] bg-[position:bottom_left,_top_right] bg-no-repeat">
          {/* <Home /> */}
          <section className="question-container flex flex-col">
            {questionElements}
          </section>
          <section className="check-answer flex justify-center items-center mt-4">
            <button className="font-Inter text-sm text-zinc-200 bg-sky-600 px-8 py-3 rounded-2xl w-[170px]">Check Answer</button>
          </section>
          {/* <Result /> */}
        </section>
      </div>
    </div>
  )
}

export default App
