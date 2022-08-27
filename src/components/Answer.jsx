import { useEffect, useState } from "react";

const Answer = (props) => {
    const [answerOptions, setAnswerOptions] = useState()

    useEffect(() => {
        const options = [props.correctAnswer, ...props.incorrectAnswers]
        const handleShuffle = (answer) => {
            return answer.sort(() => Math.random() - 0.5)
        }   
        setAnswerOptions(handleShuffle(options))
    },[])

    // console.log(answerOptions)

    return ( 
        <section className="answer-option flex flex-row my-3 gap-3 font-Inter font-medium">
            {answerOptions?.map(answer => {
                return (
                <section key={answer}>
                    <input
                        className=""
                        type="radio"
                        id= {answer}
                        name={props.index}
                        value= {answer}
                        // checked={formData.employment ===  {answer}}
                        onChange={props.handleChange}
                    />
                    <label htmlFor= {answer}>{answer}</label>
                </section>
                )
            })}
        </section>
    );
}
 
export default Answer;