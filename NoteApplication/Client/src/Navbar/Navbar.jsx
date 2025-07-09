import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const currentuser = JSON.parse(localStorage.getItem("currentUser")) || { name: "Guest" };
  return (
    <nav className="bg-blue-600 shadow-lg " style={{width:"90%",margin:"auto"}}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center container">
        {/* Logo */}
        <div className="text-2xl font-semibold tracking-wide">
          {currentuser.name}
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-white text-base font-medium justify-between" style={{ width: '70%' }}>
          <li>
            <Link to="/" className="hover:text-gray-200 transition-colors">Home</Link>
          </li>
         
          <li>
            <Link to="/add-note" className="hover:text-gray-200 transition-colors">Add Note</Link>
          </li>
          <li>
            <Link to="/notes" className="hover:text-gray-200 transition-colors">Notes</Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-200 transition-colors">Login</Link>
          </li>
           <li>
            <Link to="/register" className="hover:text-gray-200 transition-colors">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
