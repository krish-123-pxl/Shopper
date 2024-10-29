import React from 'react'
import './css/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="fields">
          <input type="text" placeholder='Your Name:' />
          <input type="email" placeholder='Email Id:' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Allready Have an Account <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" id='agree' />
          <label htmlFor="agree">
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </label>
        </div>
      </div>


    </div>
  )
}

export default LoginSignup
