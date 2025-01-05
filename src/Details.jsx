


const Details = () => {
  const project = {
    id: 1,
    title: "Team Scout App",
    image: "https://i.ibb.co/BfYYc02/Screenshot-5-1-2025-75240-team-scout-netlify-app.jpg",
    description:
      "A powerful team management platform offering real-time collaboration, advanced scouting features, and customizable dashboards for better team performance. Designed with React, Express, MongoDB, Tanstack Query, and Tailwind CSS for seamless functionality and user-friendly navigation.",
    technologies: ["React", "Express", "MongoDB", "Tanstack", "Tailwind"],
    liveLink: "https://team-scout.netlify.app",
    repoLink: "https://github.com/username/team-scout",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <h2 className="text-6xl font-semibold">Working on it. After finishing wil be updated</h2>
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="relative group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Details Section */}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">{project.title}</h1>
          <p className="mt-4 text-gray-600">{project.description}</p>

          {/* Technologies */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800">Technologies Used</h2>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="mt-6 flex space-x-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300"
            >
              Live Site
            </a>
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow hover:bg-gray-900 transition duration-300"
            >
              Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
