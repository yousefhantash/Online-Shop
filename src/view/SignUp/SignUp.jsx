import axios from 'axios';
import { useState } from 'react';
import './signup.css';

export default function SignUp(){

const [name,setName] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [passwordR,setPasswordR] = useState('');
const [accept,setAccept] = useState(false);
const [emailError,setEmailError] = useState('')



async function Submit(e){
let flag = true
e.preventDefault();
setAccept(true);

if(name === '' || password.length < 8 || passwordR !== password){
    flag = false;
}else flag = true;
try{
if(flag){
let res = await axios.post('http://127.0.0.1:8000/api/register', {
    
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordR,
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
    <div className="flex justify-center items-center h-[80vh] flex-col">
    <img src='https://upload.wikimedia.org/wikipedia/commons/f/f7/IATAlogo.svg' alt='at' className='w-[200px] mb-4'/>
     <div className='register'>
        <form onSubmit={Submit} className="w-[400px] p-[20px] shadow-2xl">
            <label htmlFor="name">Name</label>
            <input id="name" type="name" placeholder="Name..." className='p-[10px]' value={name} onChange={(e) => setName(e.target.value)}/>
            {name === '' && accept && <p className='mt-0 text-red-600 text-[14px] pb-[20px]'>Name is required!</p> }
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Email..." required className='p-[10px]' value={email} onChange={(e) => setEmail(e.target.value)}/>
            {accept && emailError === 422 && <p className='mt-0 text-red-600 text-[14px] pb-[20px]'>Email is already been taken!</p>}
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Password..." className='p-[10px]' value={password} onChange={(e) => setPassword(e.target.value)}/>
            {password.length < 8 && accept && <p className='mt-0 text-red-600 text-[14px] pb-[20px]'>Password must be more than 8 char</p>}
            <label htmlFor="repeat">Repeat Password</label>
            <input id="repeat" type="password" placeholder="Repeat Password..." className='p-[10px]' value={passwordR} onChange={(e) => setPasswordR(e.target.value)}/>
            {passwordR !== password && accept && <p className='mt-0 text-red-600 text-[14px] pb-[20px]'>Password does not match</p>}
            <div className='text-center'>
                <button type='submit'>Register</button>
            </div>
        </form>
     </div>
    </div>
    );
}