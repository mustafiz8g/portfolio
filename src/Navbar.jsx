import { FaBars, FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

import logo from '../src/assets/mylogo.png'

import './Navbar.css'
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { SiLinkedin } from "react-icons/si";
const Navbar = () => {



    const navOptions = < >
       
        <li><Link className='nav_btn ' smooth={true}
            duration={500} to='skill'>Skills</Link></li>
        <li><Link className='nav_btn' smooth={true}
            duration={500} to='projects'>Projects</Link></li>
        <li><Link className='nav_btn' smooth={true}
            duration={500} to='about'>About-Me</Link></li>
        <li><Link className='nav_btn' smooth={true}
            duration={500} to='contact'>Contact</Link></li>


    </>

    return (

        <div className="navbar  z-20 sticky top-0 flex justify-between gap-2 border-red-600 max-w-7xl mx-auto mt-4  ">

            <div className="first ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden ">
                        <FaBars className="text-2xl navblur" />

                    </div>
                    <ul
                        tabIndex={0}
                        className=" dropdown-content rounded-box z-[1] mt-3 w-36 p-2 shadow navblur">
                        {navOptions}
                    </ul>
                </div>
                
                <NavLink to='/' className="  font-bold bottom-[2px] relative mr-2 navblur"><img className="w-12 " src={logo} alt="" /></NavLink>
                <div className="second hidden md:flex">
                    <ul className="flex gap-2  px-2 border-2 border-slate-400 rounded-md hover:border-green-500 navblur">
                        {navOptions}
                    </ul>

                </div>
            </div>
            <div>
              
                <div className="third flex gap-3 px-2 border-2 border-slate-400 hover:border-green-500 rounded-lg py-[2px] navblur">

                <a href="https://github.com/mustafiz8g" target="_blank">
                <FaGithub className="text-2xl hover:text-white hover:bg-black rounded-full"></FaGithub>
                </a>

                <a href="https://www.linkedin.com/in/mustafizur-rahman-130312317/" target="_blank">
                <SiLinkedin className="text-2xl hover:text-blue-600 hover:bg-white rounded-sm"></SiLinkedin>
                </a>

                <a href="https://www.facebook.com/mustafizurrahman819/" target="_blank">
                <FaFacebook className="text-2xl hover:text-white hover:bg-blue-500 rounded-full"></FaFacebook>
                </a>

        
                  
                   

                </div>
                    <ThemeToggle></ThemeToggle>
            </div>
        </div>

    );
};

export default Navbar;