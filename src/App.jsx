import { nanoid } from 'nanoid'
import { useState, useEffect } from 'react'
import questionsData from './data'
import Home from './components/Home'
import Questions from './components/Questions'
import he from 'he'


function App() {
  const [questions, setQuestions] = useState(null)
  const [isHome, setIsHome] = useState(true)
  
  // useEffect(function() {

  // },[])

  // function generateNewQuestions() {
  //   const newQuestions = questionsData?.map(questions => ({
  //     id: nanoid(),
  //     question: questions.question,
  //     correct_answer: questions.correct_answer,
  //     incorrect_answers: questions.incorrect_answers
  //   }))
  //   return newQuestions
  // }

  // const questionElements = questions?.map(q => (
  //   <Questions 
  //     key={q.id}
  //     question={he.decode(q.question)}
  //     correctAnswer={he.decode(q.correct_answer)}
  //     incorrectAnswers={q.incorrect_answers.map(i => he.decode(i))}
  //     choose={() => chooseAnswer(q.id)}
  //   />
  // ))



  return (
    <div className="App">
      <div className="bg-fixed text-sky-900 bg-[url('/ssscribble.svg')] h-screen flex justify-center items-center font-Inter font-normal">
        <section className="quiz-container min-w-[36rem] min-h-[36rem] flex flex-col items-center justify-center m-7 p-12 bg-white rounded-3xl bg-[url('/blue-blobs.svg'),_url('/yellow-blobs.svg')] bg-[position:bottom_left,_top_right] bg-no-repeat">
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
