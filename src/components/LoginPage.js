import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    // Authentication logic here
    history.push('/product-detail');
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <form className='w-full max-w-xs' onSubmit={handleLogin}>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='block w-full p-2 mb-4 border rounded shadow'
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='block w-full p-2 mb-4 border rounded shadow'
        />
        <button type='submit' className='w-full bg-blue-500 p-2 text-white rounded shadow'>Log In</button>
      </form>
    </div>
  );
}