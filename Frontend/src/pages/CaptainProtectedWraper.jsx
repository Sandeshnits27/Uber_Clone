import React , {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


const CaptainProtectedWraper = ({children}) => {
    const captainToken = localStorage.getItem('captainToken');
    const navigate = useNavigate();
    console.log("CaptainProtectedWraper token:", captainToken);


useEffect(() => {
    if (!captainToken) {
        console.log("No captain token found, redirecting to captain login");
        navigate('/captainlogin');
    }                               
}
, [token, navigate]);

  return (
    <div>
      {children}
    </div>
  )
}

export default CaptainProtectedWraper
