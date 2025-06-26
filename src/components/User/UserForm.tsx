import React, { useState } from 'react';

interface UserFormProps {
  onSubmit: (data: { name: string }) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit({ name });
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='auth-form'>
      <div className='form-group'>
        <label>Name:</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <button type='submit' className='auth-button'>
        Add User
      </button>
    </form>
  );
};

export default UserForm;
