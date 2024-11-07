import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <div className="flex flex-col min-h-screen">
     <Navbar />
     <div>
       <Outlet />
     </div>
    </div>
  )
}

export default App
