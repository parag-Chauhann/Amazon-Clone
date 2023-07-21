import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { auth } from '../../firebase';

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // Signed in successfully
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // User created successfully
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className='main'>
      <div className='login'>
        <Link to='/'>
          <img
            alt='login-logo'
            src='https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg'
            className='login-logo'
          />
        </Link>

        <div className='login-container'>
          <h1>Sign In</h1>
          <form>
            <h5>E-mail</h5>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type='email'
              placeholder='Enter your E-mail Id here...'
            />
            <h5>Password</h5>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type='password'
              placeholder='Enter your password here...'
            />
            <button className='login-signin-btn' type='submit' onClick={handleSignIn}>
              Sign In
            </button>
          </form>

          <p>
            By continuing, you agree to <Link to='/terms&condition'>Amazon's Conditions</Link> of Use and{' '}
            <Link to='/terms&condition'>Privacy Notice</Link>.
          </p>
          <button className='login-register-btn' type='submit' onClick={handleRegister}>
            Create your Amazon Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
