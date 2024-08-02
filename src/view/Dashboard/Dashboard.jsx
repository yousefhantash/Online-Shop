import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Dashboard(){

    return(

        <div>
            <Topbar/>
            <div className="flex ">
            <Sidebar/>
            <div className="w-[85%]">
            <Outlet/>
            </div>
            </div>
        </div>




    );
}