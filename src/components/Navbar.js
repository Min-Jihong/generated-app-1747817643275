import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center p-4 shadow-md'>
      <h1 className='text-xl font-bold'>E-Commerce</h1>
      <div>
        <Link to='/login' className='mr-4'>Log In</Link>
        <Link to='/products' className='mr-4'>Products</Link>
      </div>
    </nav>
  );
}