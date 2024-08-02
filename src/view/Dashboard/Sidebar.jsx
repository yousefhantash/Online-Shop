import { Link } from "react-router-dom";

export default function Sidebar(){

    return(

    <div className=" flex flex-col text-left p-[20px] border-r-2 border-r-slate-900 border-solid w-[15%] h-[100vh]">
        <div className="flex flex-row">
            <i class="fa-solid fa-users p-2 text-[15px]"></i>
            <Link to={'/dashboard/users'} className="text-slate-900 text-[20px] font-semibold mb-[15px] ">Users</Link>
        </div>
        <div>
            <i class="fa-solid fa-truck p-2 text-[15px]"></i>
            <Link to={'/dashboard/products'} className="text-slate-900 text-[20px] font-semibold mb-[15px] ">Products</Link>     
        </div>
    </div>

    );

}