import NavItem from "./NavItem"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="p-5 flex justify-between items-center">
        <div className="font-serif">
            <Link className="text-4xl font-semibold hover:text-gray-500" to="/">DANIEL LI</Link>
        </div>
        <div className="flex items-center pr-4">
            <ul className="flex flex-row gap-4 text-xl">
                <NavItem location="about">ABOUT</NavItem>
                <NavItem location="projects">PROJECTS</NavItem>
                <NavItem location="contact">CONTACT</NavItem>
            </ul>
        </div>
    </nav>
  )
}
