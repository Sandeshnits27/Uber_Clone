import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Start = () => {
  const [userType, setUserType] = useState('user');
  const navigate = useNavigate();

  const handleContinue = () => {
    if (userType === 'user') {
      navigate('/userlogin');
    } else {
      navigate('/captainlogin');
    }
  };

  return (
    <div>
      <div
        className='bg-cover bg-bottom h-screen pt-8 flex justify-between flex-col w-full bg-red-400'
        style={{
          backgroundImage: 'url(/src/assets/traficlight-onboarding-image.png.jpg)'
        }}
      >
        <Link to='/' >
        <img
          className='w-16 ml-8'
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="UBER"
        />
        </Link>

        <div className='bg-white py-4 px-4 rounded-lg shadow-lg'>
          <div className='flex justify-between items-start '>
            <h2 className='text-3xl font-bold'>Get started with Uber</h2>
            <div className='flex flex-col space-y-2'>
              <label htmlFor="user" className="flex items-center space-x-2">
                <input
                  type="radio"
                  name='type'
                  value='user'
                  id='user'
                  checked={userType === 'user'}
                  onChange={() => setUserType('user')}
                />
                <span>User</span>
              </label>
              <label htmlFor="captain" className="flex items-center space-x-2">
                <input
                  type="radio"
                  name='type'
                  value='captain'
                  id='captain'
                  checked={userType === 'captain'}
                  onChange={() => setUserType('captain')}
                />
                <span>Captain</span>
              </label>
            </div>
          </div>
          <button
            onClick={handleContinue}
            className='flex items-center justify-center w-full bg-black text-white rounded hover:bg-gray-700 py-3 mt-4'
          >
            Continue as {userType === 'user' ? 'User' : 'Captain'}
          </button>
        </div>
      </div>
 
    </div>
  )
}

export default Start
