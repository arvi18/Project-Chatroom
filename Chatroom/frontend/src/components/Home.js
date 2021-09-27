import React, { useContext } from 'react'
import { UserContext } from "./utils/UserContext";
import { useHistory } from "react-router-dom";
import { logout } from './services/auth';


export default function Home() {
    const { isAuth, setisAuth } = useContext(UserContext);
    let history=useHistory();
    
    return (
        <div>
            <button onClick={()=>{ 
                logout();
                setisAuth(false);
                history.push('/');
                }} > Log out</button>
        </div>
)
}
