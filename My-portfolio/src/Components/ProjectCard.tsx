import { useState } from "react";

type ProjectProps = {
  item: {
    image: string;
    link: string;
    details: string
  };
};

const ProjectCard: React.FC<ProjectProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="inline-block px-3 w-[650px] h-[400px] max-sm:w-[300px] max-sm:h-[200px] relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl  transition-shadow duration-300 ease-in-out">
        <img src={item.image} className="h-full" />
        {isHovered && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75">
            <div className="text-slate-200 w-10/12 h-[100px] mb-3 max-sm:text-xs max-sm:h-[80px]">
              {item.details}
            </div>
            <a href={item.link} target="blank">
              <div className="bg-orange-500 w-[120px] h-8 rounded-full flex justify-center items-center max-sm:h-12 max-sm:w-[90px]">
                <p className="text-white text-sm font-semibold max-sm:text-sm">
                  Click here
                </p>
              </div>{" "}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
