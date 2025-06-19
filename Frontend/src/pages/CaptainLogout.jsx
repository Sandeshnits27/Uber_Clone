import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainLogout = () => {
  const token = localStorage.getItem('captainToken');
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        await axios.post(
          `${import.meta.env.VITE_API_URL}/captain/logout`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
      } catch (error) {
        // Optionally log error
      } finally {
        localStorage.removeItem('captainToken');
        navigate('/captainlogin');
      }
    };
    logout();
  }, [navigate, token]);

  return (
    <div>
      <div>Captainlogout</div>
    </div>
  )
}

export default CaptainLogout
