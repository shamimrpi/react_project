import React, { useState } from 'react';
import { isAuthenticated } from '../helpers/index';
import { Navigate } from 'react-router-dom';
function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      if (data.token) {
        localStorage.setItem('loginToken', data.token);
        
        localStorage.setItem('user', JSON.stringify(data.user));
        
        
  
        if (isAuthenticated()) {
            // return <Navigate to="/" />;
            window.location.replace("/");
          } else {
            return <Navigate to="/login" />;
          }
        // Handle successful login, like storing the token
      } else {
        // Handle login failure, like showing an error message
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      // Handle other errors, like showing a different error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        value={credentials.email}
        onChange={e => setCredentials(prev => ({ ...prev, email: e.target.value }))}
      />
      <input
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={e => setCredentials(prev => ({ ...prev, password: e.target.value }))}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login
