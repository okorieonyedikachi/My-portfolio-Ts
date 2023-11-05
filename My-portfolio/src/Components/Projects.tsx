import { projectData } from "../data";

const Projects = () => {
  return (
    <div className="w-[94%] m-10 max-sm:mb-4">
      <h3 className="text-5xl font-bold text-slate-50 mb-10 max-sm:text-3xl">
        PROJECTS|
      </h3>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
          {projectData.map((item, index) => (
            <div
              key={index}
              className="inline-block px-3 w-[650px] h-[400px] max-sm:w-[200px] max-sm:h-[200px]"
            >
              <div className="w-full h-full  overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img src={item.image} className="h-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
