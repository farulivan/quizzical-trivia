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

    return ( 
        <section className="answer-option flex flex-row my-3 gap-3 font-Inter font-medium">
            {answerOptions?.map(answer => {
                return (
                <section key={answer}>
                    <input
                        className="hidden peer"
                        type="radio"
                        id={answer}
                        name={props.index}
                        value={answer}
                        // checked={formData.employment ===  {answer}}
                        onChange={props.handleChange}
                        required
                    />
                    <label 
                        className="inline-flex font-Inter font-normal text-sm justify-between items-center px-5 py-2 w-full bg-white rounded-2xl border border-sky-900 cursor-pointer peer-checked:bg-sky-200 peer-checked:border-0 hover:bg-gray-100"
                        htmlFor={answer}
                    >
                        {answer}
                    </label>
                </section>
                )
            })}
        </section>
    );
}
 
export default Answer;