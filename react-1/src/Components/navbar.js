import image from "../images/react-logo.png"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import { useState } from "react";
import {BsToggleOn, BsToggleOff} from "react-icons/bs"

function Navbar(props) {
    const [nav, setNav] = useState(true)
      

    function handleNav() {
        return setNav(prevNav => !prevNav)
    }
    return (
        <nav className={!props.lightMode ? "bg-slate-800 flex justify-between md:justify-around flex-wrap items-center text-2xl  mx-auto py-2 px-8 text-slate-300 font-serif" : "bg-slate-200 flex justify-between md:justify-around flex-wrap items-center text-2xl  mx-auto py-2 px-8 text-slate-400 font-serif"}>
            <div className="flex items-center space-x-2 font-bold">
                <img className="w-12 h-12 font-bold" src={image} alt="logo" />
                <h2 className="text-blue-400">REACT</h2>
            </div>
            <div onClick={props.toggleLightMode} className={!props.lightMode ? "flex text-sm items-center text-slate-200" : "flex text-sm items-center text-slate-800"}>
                <p className={!props.lightMode ? "text-slate-500" : ""}>Light</p>
                {!props.lightMode ? <BsToggleOn size={35} className="py-1" /> : <BsToggleOff size={35} className="py-1" />}
                <p className={!props.lightMode ? "" : "text-slate-400"}>Dark</p>
            </div>
            <ul className="hidden md:flex space-x-8">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Works</li>
                <li>Contact</li>
            </ul>            
            <div onClick={handleNav} className={!props.lightMode ? "block md:hidden text-slate-200" : "block md:hidden text-slate-800"}>
                {!nav ? <AiOutlineClose /> : <AiOutlineMenu />}                
            </div> 
            {/* {!props.lightMode ? "bg-slate-800 border-r-slate-800": "bg-slate-200 text-slate-400 border-r-slate-200"} */}
            <div className={!nav ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-slate-800 bg-slate-800 ease-in-out duration-700" : "fixed hidden md:hidden left-[-100%] top-[-100%] h-full ease-in-out duration-700"}>
            <div className="flex items-center space-x-2 font-bold pt-2 pl-8">
                <img className="w-12 h-12 font-bold" src={image} alt="logo" />
                <h2 className="text-blue-400">REACT</h2>
            </div>
            <ul className="pl-8">
                <li className="p-4 border-b border-slate-700">Home</li>
                <li className="p-4 border-b border-slate-700">About</li>
                <li className="p-4 border-b border-slate-700">Skills</li>
                <li className="p-4 border-b border-slate-700">Works</li>
                <li className="p-4">Contact</li>
            </ul>
            </div>
            
           
        </nav>
    )
}

export default Navbar;