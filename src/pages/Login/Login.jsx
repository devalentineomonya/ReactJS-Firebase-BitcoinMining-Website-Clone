import React from 'react'
import MainContainer from '../../components/MainContainer/MainContainer'
import LoginFormContainer from '../../components/LoginPage/LoginFormContainer/LoginFormContainer'
import "./Login.css"
const Login = () => {
  return (
   <MainContainer showNav={false}>
    <div className="login-page-container">

    <LoginFormContainer/>
    </div>

   </MainContainer>
  )
}

export default Login
