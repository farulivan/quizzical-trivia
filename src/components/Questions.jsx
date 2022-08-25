import he from 'he'

const Questions = (props) => {
    return (
        <section className="question">
            {/* {console.log()} */}
            <p className="question font-Karla text-base">{props.question}</p>
            <div 
                className="answer-option flex flex-row mt-3 gap-3 font-Inter font-medium"
            >
                {props.answer.map(answer => (
                    // <Answer 
                    //     // id={props.id}
                    //     // value={answer.value}
                    //     // isChoose={props.}
                    // />
                    answer
                ))}    
                {/* <p className="text-sm px-4 py-1 rounded-2xl bg-purple-300">Adios</p>    
                <p className="text-sm border border-purple-400  px-4 py-1 rounded-2xl">Adios</p>     */}   
            </div>
            <hr className="mt-4 border-1 border-purple-100" />
        </section>
    );
}
 
export default Questions;