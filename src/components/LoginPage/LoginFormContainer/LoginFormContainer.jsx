import React from 'react'
import "./LoginFormContainer.css"
import LoginField from '../LoginField/LoginField'
import { Link } from 'react-router-dom'
const LoginFormContainer = () => {
  return (
    <div className='login-form-container'>
      <LoginField/>
      <LoginField/>
      <button className="login-button">
        Login
      </button>
      <Link to="/register">
        <span>Sign Up</span>
      </Link>
    </div>
  )
}

export default LoginFormContainer
