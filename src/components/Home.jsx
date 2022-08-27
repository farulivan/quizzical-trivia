const Home = (props) => {
    return ( 
        <div>
            <section className="home-page h-full flex flex-col justify-center items-center">
                <h1 className="font-Karla text-4xl">Quizzical</h1>
                <p className="mt-2">Test your knowledge</p>
                <button className="font-medium text-white bg-sky-600 px-8 py-3 rounded-2xl mt-7" onClick={props.start}>Start Quiz</button>
            </section>
        </div>
     );
}
 
export default Home;