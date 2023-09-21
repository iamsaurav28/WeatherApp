// Login.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import login1 from './login.jpg';

const Login = () => {
  const [username, setUsername] = useState('saurav');
  const [password, setPassword] = useState('saurav123');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });
      console.log(response.data);
      const { token } = response.data;

      // Store the token in localStorage or a state management system
      localStorage.setItem('token', token);
      navigate('/summary');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <div className="login-group">
          <div className="form-group">
            <label className="label">Username</label>
            <input
              className="input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="label">Password</label>
            <input
              className="input"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='show-hide' onClick={handleTogglePassword}>
          {showPassword ?  <i class="fa-solid fa-eye"></i>:<i class="fa-solid fa-eye-slash"></i> }
        </div>
            <button className="login-button" type="submit">
              Login
            </button>
            <div className="forgot-password">Forgot Password?</div>
          </div>

          <div className="line">
            <div>
              <div className="or">OR</div>
              <i class="fa-regular fa-circle or-circle"></i>
            </div>
          </div>

          <div className="social-links">
            <i class="fa-brands fa-google social-link"></i>
            <i class="fa-brands fa-facebook social-link"></i>
            <i class="fa-brands fa-twitter social-link"></i>
          </div>
        </div>

        <div className="login-img-group">
          <img className="login-image" src={login1} />
        </div>
      </form>
    </div>
  );
};

export default Login;
