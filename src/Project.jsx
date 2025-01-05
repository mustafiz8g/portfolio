import { NavLink } from "react-router-dom";


const projects = [
  {
    id: 1,
    title: "Team Scout App",
    image: "https://i.ibb.co/BfYYc02/Screenshot-5-1-2025-75240-team-scout-netlify-app.jpg",
    description: "A powerful team management platform offering real-time collaboration, advanced scouting features, and customizable dashboards for better team performance. Designed with React, Express, MongoDB, Tanstack Query, and Tailwind CSS for seamless functionality and user-friendly navigation.",
    technologies: ["React", "Express", "MongoDB", "Tanstack", "Tailwind"],
    liveLink: "https://team-scout.netlify.app",
    repoLink: "https://github.com/username/team-scout",
  },
  {
    id: 2,
    title: "Fitness Care",
    image: "https://i.ibb.co/KjH36p2/Screenshot-5-1-2025-75143-mustafiz8g-github-io.jpg",
    description: "A responsive and interactive fitness care web app featuring workout plans, health tips, and progress tracking. Built with React and Tailwind CSS, ensuring smooth animations, sleek UI, and accessibility across various devices for an enhanced user experience.",
    technologies: ["React", "Tailwind", "Firebase", "React Router"],
    liveLink: "https://mustafiz8g.github.io",
    repoLink: "https://github.com/username/portfolio",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    image: "https://i.ibb.co/KFhHDJ5/Screenshot-5-1-2025-75037-mustafiz8g-github-io.jpg",
    description: "An e-commerce solution with a secure payment gateway, intuitive design, and robust backend for efficient product management. Crafted using React, Express, MongoDB, and Tailwind CSS to provide scalability, performance, and a seamless shopping experience for users",
    technologies: ["React", "Express", "MongoDB", "Tailwind"],
    liveLink: "https://ecommerce.netlify.app",
    repoLink: "https://github.com/username/ecommerce-platform",
  },
];

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-5 p-6 ">
      <h2 className="text-center font-medium text-3xl mb-9"> My Projects <div className="badge badge-secondary bottom-4 relative text-white">Will be updated soon. </div></h2>

      {projects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col gap-2 h-[700px] md:flex-row md:h-[340px] rounded-lg overflow-hidden  transition-shadow duration-300 "
        >
          {/* Image Section */}
          <div className="w-full flex-1 h-[700px] md:h-[340px] border-2 border-base-200 rounded-lg  overflow-hidden relative">
            <img
              src={project.image}
              alt={project.title}
              className="absolute top-0 left-0 w-full transition-transform duration-1000 hover:translate-y-[-74%]"
            />
          </div>
          <div className=""></div>

          {/* Text Section */}
          <div className=" flex-1 lg:w-1/2 p-6  pl-3">
            <h2 className="text-xl font-bold ">{project.title}</h2>
            <p className="text-justify mt-2">{project.description}</p>
            <div className="mt-4">
              <h3 className=" font-semibold">Technologies:</h3>
              <div className="space-x-1  mt-1">
                {project.technologies.map((tech, index) => (
                  <span className="border px-1 rounded-md" key={index}>{tech}</span>
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-4 ">
              <div>
                <NavLink to='/details'>
                  <button

                    type="submit"
                    className="w-[200px] px-2 py-1 rounded-md text-gray-900 font-semibold text-[18px] transition hover:opacity-90"
                    style={{
                      background: "linear-gradient(-25deg, #1fbcb9 0%, #b2bf43 100%)",
                    }}
                  >
                    Details
                  </button>
                </NavLink>
              </div>
              <div className="flex gap-2">
                <button className='btn_css w-16 border-slate-400'>
                  live</button>
                <button className='btn_css w-28 border-slate-400'>
                  Repository</button>
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
