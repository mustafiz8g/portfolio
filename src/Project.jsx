

const projects = [
  {
    id: 1,
    title: "Team Scout App",
    image: "https://i.ibb.co/BfYYc02/Screenshot-5-1-2025-75240-team-scout-netlify-app.jpg",
    description: "A web app to scout and manage teams with real-time collaboration.",
    technologies: ["React", "Express", "MongoDB", "Tanstack", "Tailwind"],
    liveLink: "https://team-scout.netlify.app",
    repoLink: "https://github.com/username/team-scout",
  },
  {
    id: 2,
    title: "Portfolio Website",
    image: "https://i.ibb.co/KjH36p2/Screenshot-5-1-2025-75143-mustafiz8g-github-io.jpg",
    description: "A modern and responsive portfolio showcasing my projects and skills.",
    technologies: ["React", "Tailwind", "GitHub Pages"],
    liveLink: "https://mustafiz8g.github.io",
    repoLink: "https://github.com/username/portfolio",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    image: "https://i.ibb.co/KFhHDJ5/Screenshot-5-1-2025-75037-mustafiz8g-github-io.jpg",
    description: "A fully functional e-commerce site with secure payment integration.",
    technologies: ["React", "Express", "MongoDB", "Tailwind"],
    liveLink: "https://ecommerce.netlify.app",
    repoLink: "https://github.com/username/ecommerce-platform",
  },
];

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-5 p-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex  h-[340px] shadow-lg rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          {/* Image Section */}
          <div className="w-full flex-1 h-[340px] border-2 border-base-200 rounded-lg  overflow-hidden relative">
            <img
              src={project.image}
              alt={project.title}
              className="absolute top-0 left-0 w-full transition-transform duration-1000 hover:translate-y-[-74%]"
            />
          </div>

          {/* Text Section */}
          <div className="p-6 flex-1 lg:w-1/2">
            <h2 className="text-xl font-bold ">{project.title}</h2>
            <p className=" mt-2">{project.description}</p>
            <div className="mt-4">
              <h3 className=" font-semibold">Technologies:</h3>
              <ul className="list-disc list-inside  mt-1">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="flex mt-4 space-x-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Live
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Repository
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
