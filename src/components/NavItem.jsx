import { NavLink } from "react-router-dom"

export default function NavItem({ location, children }) {
  return (
    <li>
        <NavLink 
          to={location}
          className={({ isActive }) =>
            isActive ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded font-semibold" : "hover:text-gray-400 px-4 py-2 font-semibold"
          }
        >{children}</NavLink>
    </li>
  )
}
