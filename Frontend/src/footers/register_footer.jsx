import React from 'react'
import { Link } from 'react-router-dom'

const register_footer = () => {
  return (
    <div>
       <div>
          <p className='text-center mt-4'>By continuing, you agree to Uber's <Link to='/terms&conditions'><span className='text-blue-500'>Terms of Service</span></Link> and acknowledge that you have read the <Link to={'/privacy&policy'}>
          <span className='text-blue-500'>Privacy Policy</span></Link>.</p>
          </div>

          
    </div>
  )
}

export default register_footer
