// src/components/Projects.jsx
import { projects } from "../data/projectData.js";
import { FiGithub } from "react-icons/fi";

const techColorMap = {
    HTML: "bg-[#e34c26]",
    Lua: "bg-[#000080]",
    Python: "bg-[#3572A5]",
    Java: "bg-[#b07219]",
    "Jupyter Notebook": "bg-[#DA5B0B]",
    "Spring Boot": "bg-[#6DB33F]",
    React: "bg-[#61DAFB]",
    default: "bg-gray-500",
};

function Projects() {
    console.log("Data loaded into Projects component:", projects);

    return (
        <section className="min-h-screen w-full relative flex flex-col items-center justify-center text-white scroll-snap-align-start px-4 sm:px-8 py-24">

            <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold text-yellow-300" style={{ textShadow: '0 0 10px rgba(253, 224, 71, 0.6)' }}>
                    My Projects
                </h2>
                <p className="text-gray-300 mt-3 text-lg max-w-2xl mx-auto">
                    A selection of my featured work and personal experiments.
                </p>
            </div>

            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="
              h-52 flex flex-col justify-between p-4 rounded-lg
              bg-[#161b22]
              border border-[#30363d]
              hover:border-[#8b949e]
              transition-all duration-200
            "
                    >
                        {/* Card Top Section */}
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-[#58a6ff]">
                                {project.title}
                            </h3>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-gray-400 transition-colors"
                                title="View Source on GitHub"
                            >
                                <FiGithub className="text-xl" />
                            </a>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-sm line-clamp-3 flex-grow mb-3">
                            {project.description}
                        </p>

                        {/* Card Bottom Section */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-auto">
                            {project.tech.map((tech) => (
                                <div key={tech} className="flex items-center gap-1.5">
                                    <span className={`h-3 w-3 rounded-full ${techColorMap[tech] || techColorMap.default}`}></span>
                                    <span className="text-xs text-gray-500">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;