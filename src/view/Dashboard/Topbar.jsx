import { Link } from 'react-router-dom';
import '../../components/Navbar/Navbar.css';

export default function Topbar(){

    return(
        <div className=" w-full px-[90px]  flex justify-between items-center border-b-2 shadow-md border-slate-900">
            <h1 className='text-[30px] font-bold text-slate-900'>Online Shop</h1>
            <Link to={'/'} className='register-nav'>Go To Website</Link>
        </div>

    );
}