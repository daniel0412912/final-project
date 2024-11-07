export default function ProjectCard({ title, img }) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-md p-4">
        <div className="w-full h-72 overflow-hidden rounded-md mb-2">
            <img
                src={img}
                className="rounded mb-2 object-cover"
            />
        </div>
        <h2 className="text-white font-bold text-2xl">{title}</h2>
        <p></p>
    </div>
  )
}
