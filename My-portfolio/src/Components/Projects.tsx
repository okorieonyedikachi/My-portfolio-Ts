import { projectData } from "../data";
import ProjectCard from "./ProjectCard";


const Projects = () => {


  return (
    <div className="w-[94%] m-10 max-sm:mb-4">
      <h3 className="text-5xl font-bold text-orange-500 mb-10 max-sm:text-3xl">
        PROJECTS|
      </h3>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
          {projectData.map((item, index) => (
            <ProjectCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
