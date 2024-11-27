import Hero from "../components/Hero";
import ProjectCarousel from "../components/ProjectCarousel";

export default function Home() {
  return (
    <div className="h-full mb-[5rem]">
      <Hero />
      <div className="border-t-4 mx-4"></div>
      <h1 className="text-4xl font-semibold my-6 mx-6">My Projects</h1>
      <ProjectCarousel />
    </div>
  );
}
