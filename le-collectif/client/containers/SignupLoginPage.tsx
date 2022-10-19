import React from 'react'
import SignupLoginContainer from './SignupLoginContainer';
import Nav from '../containers/Nav'

const SignupLoginPage = () => {
  return (
    <div id='signup-login-page-container'>
      < Nav />
    <div id='signup-login-page'>
      < SignupLoginContainer signUpOrLogin='sign up'/>
      < SignupLoginContainer signUpOrLogin='login in'/>
    </div>
    </div>
  )
}

export default SignupLoginPage;