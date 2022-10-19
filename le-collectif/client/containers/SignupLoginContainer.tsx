import React from 'react'
import EmailPassword from '../components/EmailPassword';
import Form from '../components/Form'

type Props = {
  signUpOrLogin: string,
}

const SignupLoginContainer = (props: Props) => {
  return (
    <div className='signup-login-container'>
      <h3>{props.signUpOrLogin}</h3>
      {props.signUpOrLogin === 'sign up' ?  <Form formType='username' /> : null}
      < Form formType='email' />
      < Form formType='password' />
    </div>
  )
}

export default SignupLoginContainer;