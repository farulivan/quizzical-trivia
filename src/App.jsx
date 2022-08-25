import { nanoid } from 'nanoid'
import { useState, useEffect } from 'react'
import questionsData from './data'
import Home from './components/Home'
import Questions from './components/Questions'
import Result from './components/Result'
import he from 'he'


function App() {

  const [questions, setQuestions] = useState(null)
  // const [answerOptions, setAnswerOptions] = useState()

  // function getQuestions() {
  //   fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
  //   .then(res => res.json())
  //   .then(data => setQuestions(data.results))
  // }
  
  useEffect(function() {
      // setQuestions(questionsData?.map(questions => {
      //   return {
      //     id: nanoid(),

      //     ...questions
      //   }
      // }))
      // questions && console.log(questions)
      generateNewQuestions()
      // generateNewAnswer()
  },[])

  function generateNewQuestions() {
    const newQuestions = questionsData?.map(questions => ({
      id: nanoid(),
      question: questions.question,
      correct_answer: {answer: questions.correct_answer, isTrue: true},
      // belum ketemu cara masukin incorrect answernya
    }))
    return console.log(newQuestions)
  }
  
  console.log(questions);

  // function generateNewAnswer() {
  //   const newAnswer = []
  //   questionsData?.map(answer => {
  //     newAnswer.push((answer.correct_answer))
  //   })
  //   return console.log(newAnswer)
  // }

  // function chooseAnswer(id) {
  //   setQuestions(prevAnswer => prevAnswer.map(answer => (
  //     answer.id === id ?
  //       {...answer, isChoosen: !answer.isChoosen}
  //       : answer
  //   )))
  // }

  const questionElements = questions?.map(q => (
    <Questions 
      key={q.id}
      question={he.decode(q.question)}
      answer={[q.correct_answer, ...q.incorrect_answers]}
      choose={() => chooseAnswer(q.id)}
    />
   ))

  return (
    <div className="App">
      <div className="bg-fixed text-slate-800 bg-[url('/ssscribble.svg')] h-screen flex justify-center items-center font-Inter font-normal">
        <section className="quiz-container min-w-[36rem] flex flex-col items-center justify-center p-12 bg-white rounded-3xl bg-[url('/blue-blobs.svg'),_url('/yellow-blobs.svg')] bg-[position:bottom_left,_top_right] bg-no-repeat">
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
