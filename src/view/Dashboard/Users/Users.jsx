import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../../src/all.min.css';
import './users.css';


export default function Users(){

    const [users,setUsers] = useState([]);
    const [runUseEffect,setRun] = useState(0);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/user/show")
    .then(res => res.json())
    .then((data) => setUsers(data));
    },[runUseEffect]);

    const showUsers = users.map((user , index) => 
    <tr key={index}>
        <td>{index + 1}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
            <Link to={`${user.id}`}>
            <i 
            class="fa-regular fa-pen-to-square 
            text-green-500 
            p-2 text-[20px] 
            cursor-pointer">
            </i>
            </Link>
            <i
             onClick={() =>deleteUser(user.id)} 
            class="fa-solid fa-trash 
            text-red-600 
            p-2 
            text-[20px] 
            cursor-pointer">
            </i>
        </td>
    </tr>)


async function deleteUser(id){
    try{
    const res = await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`);
    if(res.status === 200){
    setRun((prev => prev + 1));
   }
   }catch{}
}

    return(

        <div className="p-[20px]">
            <table>

                <thead>
                    
                        <th>Id</th>
                        <th>User</th>
                        <th>Email</th>
                        <th>Action</th>
                    
                </thead>    
                <tbody>{showUsers}</tbody>
            </table>
        </div>

    );
}