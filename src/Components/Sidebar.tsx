import { NavLink } from "react-router-dom";
import { sidebarLinks } from "../constants/SidebarLinks";
const Sidebar = () => {
  return (
    <div className="w-28 min-h-screen p-6 border-2 border-sky-500">
      <ul className="space-y-4 pt-[70px]">
        {sidebarLinks.map((items:any, ind:number) => {
          return (
            <li key={ind}>
              <NavLink to={items.route}
              className={( { isActive }) => `block py-1 px-4 rounded ${isActive ? "bg-sky-200" : "bg-white"}`}>
                <div className="flex items-center my-3 ">
                <img
                  src={items.imgUrl}
                  alt={items.route} 
                  className="w-5 h-5 mr-2"
                />
                </div>
              </NavLink>



            </li>
          )
        })}

      </ul>

    </div>
  )
}

export default Sidebar