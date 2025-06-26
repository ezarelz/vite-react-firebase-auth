import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await register(email, password);
    } catch (err: any) {
      setError(err.message || 'Registration failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='auth-page-container'>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className='auth-form'>
        <div className='form-group'>
          <label>Email:</label>
          <input
            type='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label>Password:</label>
          <input
            type='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className='error-message'>{error}</p>}

        <button type='submit' className='auth-button' disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default Register;
