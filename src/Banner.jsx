
import { MdFileDownload } from 'react-icons/md';
import mustafizur from '../src/assets/mustafizur.png'
import './Banner.css'

const Banner = () => {
    return (
        <header className=" flex justify-center ">
        <div className=" flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 lg:text-left p-4 space-y-4 max-w-[700px]">
          <h1 className="lg:text-4xl text-3xl font-bold ">
              Hi, I'm 
            </h1>
            <h1 className="text-4xl lg:text-6xl font-bold text_css">
            Mustafizur Rahman  </h1>
            
            <p className="text-xl lg:text-2xl font-medium">
              A <span className="text-2xl lg:text-4xl font-bold text_css">
              Front-End </span> Artisan crafting seamless, modern, and responsive web experiences with creativity and code.
            </p>
            <div className="space-x-4">
              <button className='btn_css  border-slate-400 '><MdFileDownload className='inline'/>
              Resume</button>
              <button className='btn_css border-slate-400 '>Hire Me</button>
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