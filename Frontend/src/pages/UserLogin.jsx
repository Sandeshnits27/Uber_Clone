import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../footers/register_footer';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        { email, password }
      );
      if (res.status === 200) {
        const data = res.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/home');
      } else {
        alert('Login failed');
      }
    } catch (error) {
      alert('Login failed');
    }
    setEmail('');
    setPassword('');
  };

  return ( 
    <div className='p-7'>
      <div>
        <Link to='/'>
          <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="UBER_CLONE" />
        </Link>
        <form onSubmit={submitHandler}>
          <h3 className='text-lg font-medium  mb-2'>What's your email</h3>
          <input
            required
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-gray-500 base'
            type="email"
            placeholder='email@example.com'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <h3 className='text-xl mb-2'>Enter Password</h3>
          <input
            type="password"
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-gray-500 base'
            required
            placeholder='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button className=' bg-black  mb-7 rounded px-4 py-2  w-full text-white font-semibold placeholder:text-gray-500 base hover:bg-gray-700'>Login</button>
        </form>
      </div>
      <div>
        <Link to='/usersignup' className='flex item-center justify-center bg-black  mb-7 rounded px-4 py-2  w-full text-white font-semibold placeholder:text-gray-500 base hover:bg-gray-700'> Create New Account</Link>
      </div>
      <hr />
      <h4 className="text-lg font-semibold">Login with the other Accounts</h4>
      <div className="flex justify-center items-center gap-x-2 mt-4">
        <i className="fa-brands fa-google text-2xl"></i>
        <i className="fa-brands fa-square-instagram text-2xl"></i>
        <i className="fa-solid fa-x text-2xl"></i>
      </div>
      <footer>
        <Footer/>
      </footer>    
    </div>
  )
}

export default UserLogin
