import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Recipe Finder</h1>
          <div className="space-x-4">
            <Link to="/">Home</Link>
            <Link to="/recipes">Recipes</Link>
            <Link to="/favorites">Favorites</Link>
          </div>
        </nav>
      );
}


export default Navbar