import { FaBars, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

import logo from '../src/assets/mylogo.png'

import './Navbar.css'
const Navbar = () => {



    const navOptions = < >
       
        <li><Link className='navStyle ' smooth={true}
            duration={500} to='skill'>Skill</Link></li>
        <li><Link className='navStyle' smooth={true}
            duration={500} to='project'>Project</Link></li>
        <li><Link className='navStyle' smooth={true}
            duration={500} to='about'>About</Link></li>
        <li><Link className='navStyle' smooth={true}
            duration={500} to='contact'>Contact</Link></li>


    </>





    return (

        <div className="navbar sticky top-0 flex justify-around border-red-600 max-w-7xl mx-auto   ">

            <div className="first">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <FaBars className="text-xl" />

                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                        {navOptions}
                    </ul>
                </div>
                <Link to='/' className=" text-3xl font-bold bottom-[2px] relative mr-2"><img className="w-8 " src={logo} alt="" /></Link>
                <div className="second hidden md:flex">
                    <ul className="flex gap-2  px-2 border-2 border-slate-400 rounded-lg ">
                        {navOptions}
                    </ul>

                </div>
            </div>
            <div>
              
                <div className="third flex gap-2 ">


                    <FaGithub className="text-lg"></FaGithub>
                    <FaLinkedin className="text-lg"></FaLinkedin>
                    <FaFacebook className="text-lg"></FaFacebook>

                </div>
            </div>
        </div>

    );
};

export default Navbar;