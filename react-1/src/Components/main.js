import main from "../images/react-large-icon.png"
import gmail from "../images/gmail.png"
import linkedin from "../images/linkedin.png"
import anne from "../images/anne-marie.jpg"
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import github from "../images/github.png"

function Main(props) {
    return (
        <main className={!props.lightMode ? "py-20 px-20 font-sans h-full bg-slate-900 bg-no-repeat bg-right" : "py-20 px-20 font-sans h-full bg-slate-300 bg-no-repeat bg-right"} style={{backgroundImage: `url(${main})`}}>
            <h1 className={!props.lightMode ? "text-6xl text-white font-semibold" : "text-6xl text-slate-700 font-semibold"}>Fun Facts About React</h1>
            <ul className={!props.lightMode ? "pt-10 pl-10 text-xl text-white space-y-3 list-disc marker:text-slate-400 marker:text-2xl" : "pt-10 pl-10 text-xl text-slate-700 space-y-3 list-disc marker:text-slate-700 marker:text-2xl"}>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>

            <div className="flex flex-col border border-slate-800 rounded-3xl md:w-2/4 mt-20">
                <img className="rounded-t-3xl" src={anne} alt="anne-marie" />
                <div className="p-5">
                    <div className="flex flex-col items-center">
                        <h2 className={!props.lightMode ? "text-5xl text-white" : "text-5xl text-slate-700"}>Anne Marie</h2>
                        <h3 className={!props.lightMode ? "text-xl text-white" : "text-xl text-slate-700"}>Frontend Developer</h3>
                        <span className="flex space-x-5 ml-4 mt-4 mb-9">
                            <button className="flex items-center border-none space-x-2 rounded-lg px-9 py-1 bg-white">
                                <img className="w-4" src={gmail} alt="gmail" />
                                Email
                            </button>
                            <button className="flex space-x-5 border-none rounded-lg px-8 py-1 bg-blue-600 text-white">
                                <img className="w-6" src={linkedin} alt="linkedin" />
                                LinkedIn
                            </button>
                        </span>
                    </div>
                    <div className={!props.lightMode ? "text-white" : "text-slate-700"}>
                        <h3 className="text-2xl">About</h3>
                        <p>Anne-Marie Rose Nicholson (born 7 April 1991) is an English singer. She has attained charting singles on the UK Singles Chart, including Clean Bandit's "Rockabye", which peaked at number one, as well as "Alarm", "Ciao Adios", "Friends", "2002", "Don't Play" and "Kiss My (Uh-Oh)".</p>
                        <h3 className="text-2xl mt-3">Interests</h3>
                        <p>Anne-Marie was nominated for four awards at the 2019 Brit Awards, including Best British Female Solo Artist. To date she has been nominated for ten Brit Awards and has also received a nomination for a Billboard Music Award.</p>
                    </div>                    
                </div>
                <footer className={!props.lightMode ? "flex  justify-center items-center space-x-3 rounded-b-3xl py-2 bg-slate-400" : "flex  justify-center items-center space-x-3 rounded-b-3xl py-2 bg-slate-700"}>
                    <img className="w-10" src={facebook} alt="facebook" />
                    <img className="w-10" src={twitter} alt="twitter" />
                    <img className="w-10" src={github} alt="github" />
                </footer>
                
            </div>
        </main>
    )
}

export default Main;