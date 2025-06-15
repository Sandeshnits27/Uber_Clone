import React, { useContext ,useEffect} from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'



const UserProtectedWrapper = ({children}) => {


    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    console.log("UserProtectedWrapper token:", token);

    
    // if(!token){
    //     navigate('/userlogin');
    //     return null;
    // }

    useEffect(() => {
        if (!token) {
            console.log("No token found, redirecting to user login");
            navigate('/userlogin');
        }
    }, [token]);

  return (
    <div>
      {children}
    </div>
  )
}

export default UserProtectedWrapper
