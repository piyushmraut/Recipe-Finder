import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

// function Favorites() {
//     const [favorites, setFavorites] = useState([]);
  
//     // Load favorites from localStorage on component mount
//     useEffect(() => {
//       const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
//       setFavorites(storedFavorites);
//     }, []);
  
//     return (
//       <div>
//         <Navbar />
//         <div className="p-4">
//           <h1 className="text-2xl font-bold mb-4">Your Favorite Recipes</h1>
//           {favorites.length === 0 ? (
//             <p>No favorite recipes yet. Start adding some!</p>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//               {favorites.map((recipe) => (
//                 <div
//                   key={recipe.id}
//                   className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//                 >
//                   <Link to={`/recipe/${recipe.id}`}>
//                     <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
//                     <div className="p-4">
//                       <h2 className="text-lg font-semibold">{recipe.title}</h2>
//                     </div>
//                   </Link>
//                   {/* Heart Icon */}
//                   <div className="absolute top-2 right-2">
//                     <FaHeart className="text-red-500 text-2xl" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }

function Favorites() {
    const [favorites, setFavorites] = useState([]);
  
    // Load favorites from localStorage on component mount
    useEffect(() => {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavorites(storedFavorites);
    }, []);
  
    // Toggle Favorite and update localStorage
    const toggleFavorite = (recipeId) => {
      const updatedFavorites = favorites.filter((fav) => fav.id !== recipeId);
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };
  
    return (
      <div>
        <Navbar />
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Your Favorite Recipes</h1>
          {favorites.length === 0 ? (
            <p>No favorite recipes yet. Start adding some!</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {favorites.map((recipe) => (
                <div
                  key={recipe.id}
                  className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <Link to={`/recipe/${recipe.id}`}>
                    <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h2 className="text-lg font-semibold">{recipe.title}</h2>
                    </div>
                  </Link>
                  {/* Heart Icon */}
                  <div
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={() => toggleFavorite(recipe.id)}
                  >
                    <FaHeart className="text-red-500 text-2xl" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

export default Favorites