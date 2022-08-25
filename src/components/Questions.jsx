import { useEffect, useState } from 'react';

const Questions = ({question, correctAnswer, incorrectAnswers}) => {
    const [options, setOptions] = useState();
    const [selected, setSelected] = useState(null);
    const hasPickedAnswer = setSelected !== null

    useEffect(() => {
        const allAnswers = [correctAnswer, ...incorrectAnswers]
        const handleShuffle = (answer) => {
            return answer.sort(() => Math.random() - 0.5)
        }

        const shuffledAnswers = handleShuffle(allAnswers)
        setOptions(shuffledAnswers)
    },[])

    const handleClick = (e) => {
        const playerAnswer = e.target.innerHTML
        setSelected(playerAnswer);
        const wasPlayerCorrect = playerAnswer === correctAnswer;
        console.log(wasPlayerCorrect)
    }
    
    return (
        <div> 
            <section className="question">
                <p className="question font-Karla text-base mt-3">{question}</p>
                <div 
                    className="answer-option flex flex-row mt-3 gap-3 font-Inter font-medium"
                >
                    {options?.map(option => {  
                        let className = "text-sm px-4 py-1 rounded-2xl"
                        if(hasPickedAnswer){
                            if(option === selected){
                                className += " bg-purple-300"
                            } else {
                                className += " border border-purple-400"
                            }
                        }

                        return (
                        <p 
                            className={className}
                            onClick={handleClick}
                            key={option}
                        >{option}</p>
                        )
                    })}

                </div>
                <hr className="mt-4 border-1 border-purple-100" />
            </section> 
        </div>
    );
}
 
export default Questions;