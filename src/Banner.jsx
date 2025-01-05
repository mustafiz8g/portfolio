
import { MdFileDownload } from 'react-icons/md';
import mustafizur from '../src/assets/mustafizur.png'
import './Banner.css'
import { Link } from 'react-scroll';

const Banner = () => {
    return (
        <header className=" flex justify-center lg:mt-20 mt-6 max-w-7xl mx-auto">
        <div className=" flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 lg:text-left p-4 space-y-4 ">
          <h1 className="lg:text-4xl text-3xl font-bold ">
              Hi, I'm 
            </h1>
            <h1 className="text-4xl lg:text-6xl font-bold text_css">
            Mustafizur Rahman  </h1>
            
            <p className="text-xl lg:text-2xl font-medium ">
              A <span className="text-2xl lg:text-4xl font-bold text_css">
              Front-End </span> Artisan crafting seamless, modern, and responsive web experiences with creativity and code.
            </p>
            <div className="space-x-4">
             <a href="https://drive.google.com/file/d/17Bs-KU0xKrQTuWO40a3Fp_TnjYUf3JQ9/view?usp=sharing"
             target='_blank'
             rel="noopener noreferrer"
             >
             <button className='btn_css  border-slate-400'><MdFileDownload className='inline'/>
             Resume</button>
             </a>
            <Link smooth={true}
            duration={500} to='contact'>  <button className='btn_css border-slate-400 '>Hire Me</button></Link>
            </div>
          </div>
  
          {/* Right Content */}
          <div className="mt-10 lg:mt-0 flex-1 flex justify-end ">
            <img
              src={mustafizur}
              alt="Profile"
              className="w-[400px] lg:w-[490px] "
            />
          </div>
        </div>
      </header>
    );
};

export default Banner;