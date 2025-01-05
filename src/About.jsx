
import { NavLink } from 'react-router-dom';
import me from '../src/assets/about.jpg'

import { FaUserAlt, FaBriefcase, FaCog, FaFileAlt, FaEnvelope } from "react-icons/fa";

const About = () => {
    return (
        <div className="flex flex-col items-center max-w-7xl mx-auto p-6 mt-20">
            {/* Profile Section */}
            <div className="flex flex-col md:flex-row  shadow-md rounded-lg overflow-hidden w-full">
                {/* Sidebar */}
                <div className=" w-full md:w-1/4 flex flex-col items-center py-6">
                    <div>
                    <img
                        src={me}
                        alt="Profile"
                        className="w-40 h-40 rounded-full mb-4"
                    />
                    </div>
                    <div>
                    <ul className="w-full flex flex-col space-y-4">
                       <NavLink>
                       <li className="flex items-center gap-2 px-4 py-3 btn_css ">
                            <FaUserAlt />
                            <span>About Me</span>
                        </li>
                       </NavLink>
                        <NavLink>
                        <li className="flex items-center gap-2 px-4 py-3 btn_css">
                            <FaBriefcase />
                            <span>Portfolio</span>
                        </li>
                        </NavLink>
                       <NavLink>
                       <li className="flex items-center gap-2 px-4 py-3 btn_css">
                            <FaCog />
                            <span>Skills</span>
                        </li>
                       </NavLink>
                       <NavLink>
                       <li className="flex items-center gap-2 px-4 py-3 btn_css">
                            <FaFileAlt />
                            <span>Resume</span>
                        </li>
                       </NavLink>
                       <NavLink>
                       <li className="flex items-center gap-2 px-4 py-3 btn_css">
                            <FaEnvelope />
                            <span>Contact</span>
                        </li>
                       </NavLink>
                    </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="p-6 md:w-3/4">
                    <h1 className="text-3xl font-bold mb-4">Who am I?</h1>
                    <p className="text-lg mb-4">
                        I'm a <span className="text-red-500 font-bold">front-end developer</span> Mymensingh , Bangladesh. I'm bringing the <span className="text-red-500 font-bold">creativity</span> of
                        the nasheed industry and the <span className="text-red-500 font-bold">precision</span> of
                        journalism to a webpage near you. Coding has become a perfect union of my two favourite
                        passions, and I love seeing the results of my efforts helping the user's experience.
                    </p>
                    <p className="text-lg mb-4">
                        I’m finding unique solutions to complex problems, and I’m doing it all while making{" "}
                        <span className="text-red-500 font-bold">the worst puns</span> you’ve never heard
                        before.
                    </p>
                    <hr className="my-6" />
                  
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li>✔ Critical Thinker</li>
                        <li>✔ Goal-Oriented</li>
                        <li>✔ Effective Communicator</li>
                        <li>✔ Time-Management Expert</li>
                        <li>✔ Excellent Collaboration Skills</li>
                        <li>✔ Strategic Problem Solver</li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
