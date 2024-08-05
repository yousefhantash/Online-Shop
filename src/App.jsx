import { Route, Routes } from 'react-router-dom';
import Users from '../src/view/Dashboard/Users/Users';
import './App.css';
import Dashboard from './view/Dashboard/Dashboard';
import UpdateUser from './view/Dashboard/UpdateUser/UpdateUser';
import Home from './view/Home/Home.';
import Login from './view/Login/Login';
import SignUp from './view/SignUp/SignUp';

function App() {
  return (
    
    <div className='w-full m-0 p-0'>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element= {<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route exact path='users' element={<Users/>}/>
          <Route path='users/:id' element={<UpdateUser/>}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;