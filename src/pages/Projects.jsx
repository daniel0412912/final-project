import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  return (
    <div className="min-h-screen px-20">
      <h1 className="text-4xl font-semibold my-6">My Projects</h1>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
        <ProjectCard title="Todo List" img="TodoList.png" />
        <ProjectCard title="Gym Tracker" img="GymTracker.png" />
        <ProjectCard title="Movie Search" img="MovieBrowser.png" />
        <ProjectCard title="Etch-A-Sketch" img="Etch-A-Sketch.png" />
        <ProjectCard title="Weather App" img="WeatherApp.png" />
        <ProjectCard title="Book Recorder" img="BookRecorder.png" />
      </div>
    </div>
  )
}
