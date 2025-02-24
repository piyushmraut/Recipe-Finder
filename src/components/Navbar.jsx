import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    <nav className="bg-blue-600 text-white p-4">
    <h1 className="text-xl font-bold">Recipe Finder</h1>
    </nav>
}

// function Navbar() {
//     return (
//       <nav className="bg-blue-600 text-white p-4 flex justify-between">
//         <h1 className="text-xl font-bold">Recipe Finder</h1>
//         <div className="space-x-4">
//           <Link to="/" className="hover:underline">Home</Link>
//           <Link to="/menu" className="hover:underline">Menu</Link>
//           <Link to="/favorites" className="hover:underline">Favorites</Link>
//         </div>
//       </nav>
//     );
//   }

export default Navbar