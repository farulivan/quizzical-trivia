import { useEffect, useState } from "react";
import he from 'he';


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
                        className={`hidden peer correct`}
                        type="radio"
                        id={answer}
                        name={props.index}
                        value={answer}
                        onChange={props.handleChange}
                        disabled={props.finish}
                    />
                    <label 
                        className=
                        {`
                            inline-flex font-Inter font-normal text-[10px] sm:text-xs text-center justify-between items-center 
                            px-5 py-2 w-full cursor-pointer rounded-2xl 
                            peer-checked:border-0 hover:bg-gray-100
                            ${props.finish ? 
                                answer === props.correctAnswer ? 
                                    'peer-checked:bg-emerald-300 bg-emerald-300' : 'peer-checked:bg-red-300 opacity-50 border border-sky-900'
                                : 'border border-sky-900 peer-checked:bg-sky-200'
                            }
                        `}
                        htmlFor={answer}
                    >
                        {he.decode(answer)}
                    </label>
                </section>
                )
            })}
        </section>
    );
}
 
export default Answer;