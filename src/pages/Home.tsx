import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Home: React.FC = () => {
  const { token, logout } = useAuth();

  return (
    <div className='home-container'>
      <h1>Home</h1>

      {token ? (
        <div className='auth-section'>
          <p>You are logged in.</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div className='link-section'>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </div>
      )}
    </div>
  );
};

export default Home;
