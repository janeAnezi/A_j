import Links from "./Links";
import ToggleButton from "./ToggleButton";


export default function SideBar() {
  return (
    <div className="sidebar ">
        <div className="bg">
           <Links/>
        </div>
        <ToggleButton/>
    </div>
  )
}
