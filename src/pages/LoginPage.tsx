import React from 'react';
import Login from '../components/Auth/Login';

const LoginPage: React.FC = () => {
  return (
    <div className='auth-page-container'>
      <h1>Login</h1>
      <Login />
    </div>
  );
};

export default LoginPage;
