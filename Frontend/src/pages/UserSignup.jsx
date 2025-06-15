import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Footer from '../footers/register_footer'; 

const UserSignup = () => {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     const { firstname, lastname, email, password } = form;
    const newUser = {
      fullname: {
        firstname,
        lastname,
      },
      email,
      password
    };
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
    
    if (res.ok) {
      navigate('/userlogin');
    } else {
      alert('Signup failed');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 "
      style={{
        backgroundImage: 'url(/src/assets/loginBg.png)',
        backgroundSize: 'cover',
      }}
    >
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-center mb-6">What's your phone number or email?</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={form.firstname}
              onChange={handleChange}
              className="flex-1 h-10 pr-3 bg-gray-200 rounded-lg placeholder:text-gray-500 placeholder:p-4  focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={form.lastname}
              onChange={handleChange}
              className="flex-1 h-10 pr-3 bg-gray-200 rounded-lg placeholder:text-gray-500 placeholder:p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email, Phone"
            value={form.email}
            onChange={handleChange}
            className="w-full h-10 px-3 mb-4 bg-gray-200 rounded-lg placeholder:text-gray-500 placeholder:p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full h-10 px-3 mb-6 bg-gray-200 rounded-lg placeholder:text-gray-500 placeholder:p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full h-10 flex items-center justify-center bg-black text-white font-semibold rounded-lg hover:bg-gray-800 mb-6"
          >
            Continue
          </button>
        </form>
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>


        <Link to="/userlogin" className="text-white font-semibold"><button className="w-full flex items-center justify-center h-10 mb-4 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
         Already have an account?     
         <i className='text-blue-400'>Login</i> 
        </button>
        </Link>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        {/* Social Buttons */}
        <button className="w-full flex items-center justify-center h-10 mb-4 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
          <i className="fa-brands fa-google mr-2"></i> Continue with Google
        </button>
        <button className="w-full flex items-center justify-center h-10 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
          <i className="fa-brands fa-apple mr-2"></i>Continue with Apple
        </button>
        <Footer />
      </div>
    </div>
  );
};

export default UserSignup;
