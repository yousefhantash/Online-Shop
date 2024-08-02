import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './view/Home/Home.';
import Login from './view/Login/Login';
import SignUp from './view/SignUp/SignUp';

function App() {
  return (
    
    <div className='w-full m-0 p-0'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element= {<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      
    </div>
  );
}

export default App;