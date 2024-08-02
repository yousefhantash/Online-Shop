import axios from 'axios';
import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './login.css';

export default function Login(){


const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [accept,setAccept] = useState(false);
const [emailError,setEmailError] = useState('')


async function Submit(e){
let flag = true
e.preventDefault();
setAccept(true);

if(password.length < 8 ){
    flag = false;
}else flag = true;
try{
if(flag){
let res = await axios.post('http://127.0.0.1:8000/api/login', {

        email: email,
        password: password,

      });
      if(res.status === 200){
        window.localStorage.setItem("email" , email );
        window.location.pathname='/'
      }
  }
}catch(err){
setEmailError(err.response.status);
}
}

return(
    
    <div>
    <Navbar/>
    <div className="flex justify-center items-center flex-col ">
     
     <img src='https://upload.wikimedia.org/wikipedia/commons/f/f7/IATAlogo.svg' alt='at' className='w-[200px]  mt-24 mb-4'/>
     <div className='login'>
        <form onSubmit={Submit} className="w-[400px] p-[20px] shadow-2xl">
            
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Email..." required className='p-[10px]' value={email} onChange={(e) => setEmail(e.target.value)}/>
            {accept && emailError === 422 && <p className='mt-0 text-red-600 text-[14px] pb-[20px]'>Email is already been taken!</p>}
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Password..." className='p-[10px]' value={password} onChange={(e) => setPassword(e.target.value)}/>
            {password.length < 8 && accept && <p className='mt-0 text-red-600 text-[14px] pb-[20px]'>Password must be more than 8 char</p>}
            
            
            <div className='text-center'>
                <button type='submit'>Login</button>
            </div>
        </form>
     </div>
    </div>
    </div>
    );

}