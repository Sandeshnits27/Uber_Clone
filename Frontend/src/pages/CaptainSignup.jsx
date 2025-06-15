import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import Footer from '../footers/register_footer';
import { gsap } from 'gsap';
import axios from 'axios';

const CaptainSignup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    vehicleColor: '',
    vehiclePlate: '',
    vehicleCapacity: '',
    vehicleType: '',
  });



  const formRef = useRef(null);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }
    // Animate inputs with stagger
    if (inputRefs.current.length) {
      gsap.fromTo(
        inputRefs.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out', delay: 0.5 }
      );
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Check if all fields are filled
  const isFormComplete =
    form.firstname &&
    form.lastname &&
    form.email &&
    form.password &&
    form.vehicleColor &&
    form.vehiclePlate &&
    form.vehicleCapacity &&
    form.vehicleType;

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: form.firstname,
        lastname: form.lastname
      },
      email: form.email,
      password: form.password,
      vehicle: {
        color: form.vehicleColor,
        plate: form.vehiclePlate,
        capacity: form.vehicleCapacity,
        vehicletype: form.vehicleType
      }
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        captainData
      )

      if (response.status === 201) {
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }
    } catch (error) {
      alert('Signup failed')
    }

    setForm({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      vehicleColor: '',
      vehiclePlate: '',
      vehicleCapacity: '',
      vehicleType: '',
    })
  };

  // Helper to assign refs to inputs
  const setInputRef = (el, idx) => {
    inputRefs.current[idx] = el;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4"
      style={{
        backgroundImage: 'url(/src/assets/captainBg.png)',
        backgroundSize: 'cover',
      }}
    >
      <div ref={formRef} className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-center mb-6">Welcome aboard, Captain — your journey with elegance and excellence begins here.</h2>
        <form onSubmit={submitHandler}>
          <div className="flex gap-4 mb-4">
            <input
              ref={el => setInputRef(el, 0)}
              type="text"
              name="firstname"
              placeholder="First Name"
              value={form.firstname}
              onChange={handleChange}
              className="flex-1 h-10 pr-3 bg-gray-200 rounded-lg placeholder:text-gray-500 placeholder:p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              ref={el => setInputRef(el, 1)}
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
            ref={el => setInputRef(el, 2)}
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full h-10 px-3 mb-4 bg-gray-200 rounded-lg placeholder:text-gray-500 placeholder:p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            ref={el => setInputRef(el, 3)}
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full h-10 px-3 mb-4 bg-gray-200 rounded-lg placeholder:text-gray-500 placeholder:p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="mb-4">
            <input
              ref={el => setInputRef(el, 4)}
              type="text"
              name="vehicleColor"
              placeholder="Vehicle Color"
              value={form.vehicleColor}
              onChange={handleChange}
              className="w-full h-10 px-3 mb-2 bg-gray-200 rounded-lg placeholder:text-gray-500 placeholder:p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              ref={el => setInputRef(el, 5)}
              type="text"
              name="vehiclePlate"
              placeholder="Vehicle Number Plate"
              value={form.vehiclePlate}
              onChange={handleChange}
              className="w-full h-10 px-3 mb-2 bg-gray-200 rounded-lg placeholder:text-gray-500 placeholder:p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              ref={el => setInputRef(el, 6)}
              type="number"
              name="vehicleCapacity"
              placeholder="Vehicle Capacity"
              value={form.vehicleCapacity}
              min="0"
              max='7'
              onChange={e => {
                const value = e.target.value;
                if (value === '' || Number(value) >= 0) {
                  handleChange(e);
                }
              }}
              className="w-full h-10 px-3 mb-2 bg-gray-200 rounded-lg placeholder:text-gray-500 placeholder:p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <select
              ref={el => setInputRef(el, 7)}
              name="vehicleType"
              value={form.vehicleType}
              onChange={handleChange}
              className="w-full h-10 px-3 mb-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
              <option value="auto">Auto</option>
              <option value="van">Van</option>
              <option value="eriksha">Eriksha</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={!isFormComplete}
            className={`w-full h-10 flex items-center justify-center font-semibold rounded-lg mb-6
              ${isFormComplete ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-400 text-gray-200 cursor-not-allowed'}`}
          >
            Continue
          </button>
        </form>
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
              <button className="w-full flex items-center justify-center h-10 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
          Already have an account? <Link to="/captainlogin" className="text-blue-500 ml-2">Login</Link>
        </button>
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
        <Footer />
      </div>
    </div>
  );
};

export default CaptainSignup;
