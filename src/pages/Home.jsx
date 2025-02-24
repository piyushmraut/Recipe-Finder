import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function Home() {
    const [search, setSearch] = useState("");
    const [recipes, setRecipes] = useState([]);
  
    async function fetchData() {
      await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${search}&apiKey=38f5ba90620c4409999dcf57fc75c885`)
        .then((response) => response.json())
        .then((data) => {
          setRecipes(data.results);
        });
    }
  
    useEffect(() => {
      if (search) {
        fetchData();
      }
    }, [search]);
  
    return (
      <div>
        <Navbar/>
        <Hero />
        <div className="p-4">
          <input
            type="text"
            placeholder="Search for a recipe..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />
  
          {/* Recipe Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {recipes.map((recipe) => (
              <Link
                to={`/recipe/${recipe.id}`}
                key={recipe.id}
                className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{recipe.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
}
// function Home() {
//     const [search, setSearch] = useState('');
//     const [recipes, setRecipes] = useState([]);
//     const [favorites, setFavorites] = useState(() => {
//       const saved = localStorage.getItem('favorites');
//       return saved ? JSON.parse(saved) : [];
//     });
  
//     async function fetchData() {
//       const response = await fetch(
//         `https://api.spoonacular.com/recipes/complexSearch?query=${search}&apiKey=38f5ba90620c4409999dcf57fc75c885`
//       );
//       const data = await response.json();
//       setRecipes(data.results);
//     }
  
//     useEffect(() => {
//       if (search) fetchData();
//     }, [search]);
  
//     const toggleFavorite = (id) => {
//       const updatedFavorites = favorites.includes(id)
//         ? favorites.filter((favId) => favId !== id)
//         : [...favorites, id];
//       setFavorites(updatedFavorites);
//       localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
//     };
  
//     return (
//       <div>
//         <Navbar />
//         <Hero />
//         <div className="p-4">
//           <input
//             type="text"
//             placeholder="Search for a recipe..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full p-2 border rounded mb-4"
//           />
  
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {recipes.map((recipe) => (
//               <div
//                 key={recipe.id}
//                 className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//               >
//                 <Link to={`/recipe/${recipe.id}`}>
//                   <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
//                   <div className="p-4">
//                     <h2 className="text-lg font-semibold">{recipe.title}</h2>
//                   </div>
//                 </Link>
//                 <button
//                   onClick={() => toggleFavorite(recipe.id)}
//                   className="absolute top-2 right-2 text-red-500 text-2xl"
//                 >
//                   {favorites.includes(recipe.id) ? <FaHeart /> : <FaRegHeart />}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }
export default Home