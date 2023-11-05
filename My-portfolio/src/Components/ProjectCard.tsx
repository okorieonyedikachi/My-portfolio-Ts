import { useState } from "react"

type ProjectProps = {
    item: {
        image: string
        link: string 
    }
}

const ProjectCard:React.FC<ProjectProps> = ({item}) => {
    const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="inline-block px-3 w-[650px] h-[400px] max-sm:w-[200px] max-sm:h-[200px] relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <img src={item.image} className="h-full" />
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="bg-orange-500 w-[180px] h-16 rounded-full flex justify-center items-center max-sm:h-12 max-sm:w-[90px]">
              <p className="text-white text-xl font-semibold max-sm:text-sm">
                Click here
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard