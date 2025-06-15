import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footers/register_footer';

const CaptainLogin = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log(form);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4"
      style={{
        backgroundImage: 'url(/src/assets/loginBg.png)',
        backgroundSize: 'cover',
      }}
    >
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Captain Login
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full h-10 px-3 mb-4 bg-gray-200 rounded-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full h-10 px-3 mb-6 bg-gray-200 rounded-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full h-10 flex items-center justify-center bg-black text-white font-semibold rounded-lg hover:bg-gray-800 mb-6"
          >
            Login
          </button>
        </form>
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <button className="w-full flex items-center justify-center h-10 mb-4 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
          <i className="fa-brands fa-google mr-2"></i> Continue with Google
        </button>
        <button className="w-full flex items-center justify-center h-10 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
          <i className="fa-brands fa-apple mr-2"></i>Continue with Apple
        </button>
        <div className="mt-4 text-center">
          <Link
            to="/captainsignup"
            className="text-blue-600 hover:underline"
          >
            Don't have an account? Sign up
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CaptainLogin;
