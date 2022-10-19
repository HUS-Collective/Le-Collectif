import React from 'react'
import SignupLoginContainer from './SignupLoginContainer';


const SignupLoginPage = () => {
  return (
    <div id='signup-login-page'>
      < SignupLoginContainer signUpOrLogin='sign up'/>
      < SignupLoginContainer signUpOrLogin='login in'/>
    </div>
  )
}

export default SignupLoginPage;