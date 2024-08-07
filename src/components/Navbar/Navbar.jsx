import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar(){

    function handleLogOut(){
        window.localStorage.removeItem('email');
        window.location.pathname='/';
    }

    return(

        <div className='w-full px-[90px] shadow-xl'>
        <nav className='flex justify-between items-center'>
            <div className='flex justify-between items-center'>
               <Link to='/'> <img src='https://upload.wikimedia.org/wikipedia/commons/f/f7/IATAlogo.svg' alt='at' className='w-[90px] mr-[30px] my-[10px]'/></Link>
                <Link to='/' className='p-[10px] text-[20px] font-bold text-slate-900 '>Home</Link>
                <Link to='/About' className='p-[10px] text-[20px] font-bold text-slate-900 '>About</Link>
                <Link to='/Contact' className='p-[10px] text-[20px] font-bold text-slate-900 '>Contact Us</Link>
            </div>
            <div className='flex justify-between items-center'>
                {!window.localStorage.getItem("email") ? <> <Link to='/register' className="text-center register-nav">Register
                </Link>
                <Link to='/login' className="text-center register-nav">Login
                </Link> </> : <div className='register-nav' onClick={handleLogOut}>Log Out</div>}
            </div>
        </nav>
    </div>
    );

}