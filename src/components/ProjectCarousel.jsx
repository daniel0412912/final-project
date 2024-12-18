import { useState } from "react";

export default function ProjectCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const myProjects = [
    {
      title: "Todo List",
      techStack: ["HTML", "CSS", "JavaScript"],
      img: "TodoList.png",
    },
    {
      title: "Gym Tracker",
      techStack: ["React", "Tailwind"],
      img: "GymTracker.png",
    },
    {
      title: "Movie Search",
      techStack: ["React", "Tailwind", "API"],
      img: "MovieBrowser.png",
    },
    {
      title: "Etch-A-Sketch",
      techStack: ["HTML", "CSS", "JavaScript"],
      img: "Etch-A-Sketch.png",
    },
    {
      title: "Weather App",
      techStack: ["HTML", "CSS", "JavaScript", "API"],
      img: "WeatherApp.png",
    },
    {
      title: "Book Recorder",
      techStack: ["HTML", "CSS", "JavaScript"],
      img: "BookRecorder.png",
    },
  ];

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? myProjects.length - 1 : prevSlide - 1
    );
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === myProjects.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl text-center font-semibold">
        {myProjects[currentSlide].title}
      </h1>
      <div className="flex gap-2 items-center justify-center">
        {myProjects[currentSlide].techStack.map((tool, index) => (
          <div
            key={index}
            className="bg-green-400 dark:bg-green-600 p-2 rounded-lg text-center font-bold
              flex items-center justify-center h-fit text-sm"
          >
            {tool}
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        {/* Left Arrow Button */}
        <div className="left-0">
          <button
            onClick={handlePrevClick}
            className="bg-blue-500 hover:bg-blue-300 text-gray-200 font-bold py-2 px-4 text-2xl lg:text-3xl"
          >
            &lt;
          </button>
        </div>
        {/* Project Image */}
        <div className="relative flex flex-col items-center border-4 border-blue-500 rounded-sm">
          <img
            src={
              myProjects[currentSlide].img
                ? myProjects[currentSlide].img
                : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            }
            alt="Project image"
            className="md:max-w-2xl lg:max-w-2xl w-full h-full object-contain"
          />
          <div className="absolute flex gap-2 bottom-4 text-center">
            {myProjects.map((s, i) => {
              return (
                <div
                  key={"circle" + i}
                  className={`rounded-full w-5 h-5 ${
                    i === currentSlide ? "bg-blue-500" : "bg-gray-500"
                  }`}
                ></div>
              );
            })}
          </div>
        </div>
        {/* Right Arrow Button */}
        <div className="right-0">
          <button
            onClick={handleNextClick}
            className="bg-blue-500 hover:bg-blue-300 text-gray-200 font-bold py-2 px-4 text-2xl lg:text-3xl"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
