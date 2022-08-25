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
      setQuestions(generateNewQuestions)
  },[])

  function generateNewQuestions() {
    const newQuestions = questionsData?.map(questions => ({
      id: nanoid(),
      question: questions.question,
      correct_answer: questions.correct_answer,
      incorrect_answers: questions.incorrect_answers
    }))
    return newQuestions
  }

  // function generateAnswerOption() {
  //   // wrong syntax for making an object like this
  //   const answerOptions = [{answer: questions.correct_answer, isTrue: true}]
  //   const wrongAnswer = questions?.incorrect_answers
  //   console.log(wrongAnswer.length)
  //   for(let i=0; i < wrongAnswer.length; i++){
  //     answerOptions.push({
  //       answer: wrongAnswer[i],
  //       isTrue: false
  //     })
  //   }
  //   return answerOptions
  // }
  
  console.log(questions);

  const questionElements = questions?.map(q => (
    <Questions 
      key={q.id}
      question={he.decode(q.question)}
      correctAnswer={he.decode(q.correct_answer)}
      incorrectAnswers={q.incorrect_answers.map(i => he.decode(i))}
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
