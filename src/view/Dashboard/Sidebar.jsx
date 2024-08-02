import { Link } from "react-router-dom";

export default function Sidebar(){

    return(
        <div className="p-[20px] border-r-2 border-r-slate-900 border-solid w-[15%] h-[100vh]">
        <Link to={'/dashboard/users'} className="text-slate-900 text-[20px] font-semibold p-4">Users</Link>    
        </div>
    );

}