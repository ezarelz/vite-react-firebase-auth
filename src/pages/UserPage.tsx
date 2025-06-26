// src/pages/UserPage.tsx
import React, { useState } from 'react';
import UserForm from '../components/User/UserForm';
import UserList from '../components/User/UserList';

const UserPage: React.FC = () => {
  const [users, setUsers] = useState<{ name: string }[]>([]);

  const addUser = (user: { name: string }) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <div className='auth-page-container'>
      <h1>User Management</h1>
      <UserForm onSubmit={addUser} />
      <UserList users={users} />
    </div>
  );
};

export default UserPage;
