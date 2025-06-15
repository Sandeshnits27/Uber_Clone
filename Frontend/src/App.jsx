import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import UserLogin from './pages/UserLogin.jsx'
import UserSignup from './pages/UserSignup.jsx'
import CaptainLogin from './pages/CaptainLogin.jsx'
import CaptainSignup from './pages/CaptainSignup.jsx'
import TermsConditions from './text_file/terms_conditions.jsx';
import PrivacyPolicy from './text_file/privacy_policy.jsx';
import Start from './pages/start.jsx'
import E from './Error.jsx'
import { useContext } from 'react'


const App = () => {

  return (
    <div >
      <Routes>
        <Route path='/' element={<Start/>} />
        <Route path='/userlogin' element={<UserLogin/>} />
        <Route path='/usersignup' element={<UserSignup/>} />
        <Route path='/captainlogin' element={<CaptainLogin/>} />
        <Route path='/captainsignup' element={<CaptainSignup/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/terms&conditions' element = {<TermsConditions />} />
        <Route path='/privacy&policy' element={<PrivacyPolicy />} />
        <Route path='*' element={<E/>} />
      </Routes>
    </div>
  )
}

export default App

