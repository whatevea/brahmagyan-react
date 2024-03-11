import { useState } from "react"
import { FaBook, FaCloud, FaList, FaPhone } from "react-icons/fa";
import { PiInfoBold } from "react-icons/pi";
import logo from "../logotransparent.png"
import { Link } from "react-router-dom";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className=" w-full bg-[#011e29] text-white domine">
            <div className=" m-auto flex sticky top-0 h-20  p-3 md:w-3/4 justify-between" >
                <img src={logo} className="bg-white rounded-full h-full mr-4" alt="logo" />
                <div className="navbar-items hidden md:flex gap-2">
                    <NavItems />
                </div>
                <button onClick={() => { setIsOpen(prevState => !prevState) }} className="md:hidden inline rouned-md p-2 text-2xl"> <FaList /> </button>
                {isOpen && (
                    <div className="flex  flex-col absolute right-0 top-20 w-full bg-[#011e29] p-2">
                        <NavItems />
                    </div>
                )}
            </div>
        </div >
    )
}
const NavItems = () => {
    return (<>
        <button className="p-2 hover:border"> <FaBook className="inline" />  <Link to="/"> Book of Brahmagyan </Link> </button>
        <button className="p-2 hover:border"> <PiInfoBold className="inline" /> Introduction</button>
        <button className="p-2 hover:border"><FaList className="inline" /> Chapters </button>
        <button className="p-2 hover:border"> <FaCloud className="inline" /> Something </button>
        <button className="p-2 hover:border"> <FaPhone className="inline" /> Contact Us </button>
    </>)
}