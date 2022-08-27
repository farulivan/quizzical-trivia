import { useEffect, useState } from "react";
import questionsData from "../data";
import Answer from "./Answer";
import he from 'he';

const Questions = (props) => {
    const [questions, setQuestions] = useState(null)
    const [userAnswer, setUserAnswer] = useState(
        {
            1: "",
            2: "",
            3: "",
            4: "",
            5: ""
        }
    )
    const [score, setScore] = useState(0)
    const [finish, setFinish] = useState(false)

    const scoreCalculation = () => {
        for(let i=0; i < 5; i++){
            if (userAnswer[i+1] === questions[i].correct_answer){
                setScore(score => score+1)
            }
        }
    }

    useEffect(function() {
        fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
          .then(data => data.json())
          .then(response => setQuestions(response.results))
      },[])
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setUserAnswer(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleClick() {
        scoreCalculation()
        setFinish(true)
    }
    
    return ( 
        questions &&
            <section className="questions p-3">
                <section className="flex flex-col">
                    {questions.map((q, i) => {
                        return(
                            <fieldset 
                                className="question-container mt-3 border-b-2 border-b-sky-100" 
                                key={q.question}
                            >
                                <legend className="question font-Karla text-sm sm:text-base">{he.decode(q.question)}</legend>
                                <Answer
                                    index={i+1}
                                    correctAnswer={q.correct_answer}
                                    incorrectAnswers={q.incorrect_answers}
                                    handleChange={handleChange}
                                    finish={finish}
                                />
                            </fieldset>
                        )
                    })}
                </section>
                <section className="check-answer flex justify-center items-center mt-4">
                    {finish && <p className="font-Inter font-semibold mr-7">You scored {score} / {questions.length} correct answers</p>}
                    {finish ? 
                        <button 
                        onClick={() => props.back()}
                        className="font-Inter text-sm text-white bg-sky-600 px-8 py-3 rounded-2xl w-[170px]"
                        >
                        Play Again
                        </button> :
                            <button 
                            onClick={() => handleClick()}
                            className="font-Inter text-sm text-white bg-sky-600 px-8 py-3 rounded-2xl w-[170px]"
                            >
                                Check Answers
                            </button>
                    }
                </section>
            </section>   
    );
}
 
export default Questions;