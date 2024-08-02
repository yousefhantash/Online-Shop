import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Dashboard(){

    return(

        <div>
            <Topbar/>
            <div className="flex ">
            <Sidebar/>
            test
            </div>
        </div>




    );
}