

import { useEffect, useState } from "react";

const Skill = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("tech.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
 <div className="mt-20 mb-20">
    
    <h2 className="text-center font-medium text-3xl mb-9">Technologies Powering My Projects</h2>
   
    <div className="grid grid-cols-6 lg:grid-cols-12 p-6 max-w-7xl mx-auto gap-4">
      {data.map((image) => (
        <div
          key={image.index}
          className="group relative p-2 lg:p-3 hover:border-none"
        >
          <img
            className="transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:rotate-2"
            src={image.tech_img}
            alt=""
          />
          <span className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-500 transition-all duration-300 ease-in-out pointer-events-none"></span>
        </div>
      ))}
    </div>
 </div>
  );
};

export default Skill;


/**
 
https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg
 
https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg


https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg

https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg

https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg


https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg

https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg



https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg

https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg


https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg


https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg


https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg












 */