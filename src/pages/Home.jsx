import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { FaHeart, FaRegHeart, FaSearch } from "react-icons/fa";
import { GiCook } from "react-icons/gi";
import { motion } from "framer-motion";

// function Home() {
//   const [search, setSearch] = useState("");
//   const [recipes, setRecipes] = useState([]);
//   const [favorites, setFavorites] = useState([]);

//   async function fetchData() {
//     if (!search) return;
//     const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${search}&apiKey=777918ec0c9f41fa9f163fb33808d265`);
//     const data = await response.json();
//     setRecipes(data.results);
//   }

//   useEffect(() => {
//     fetchData();
//   }, [search]);

//   // Toggle Favorite
//   const toggleFavorite = (id) => {
//     setFavorites((prev) =>
//       prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
//     );
//   };

//   return (
//     <div>
//       <Navbar />
//       <Hero search={search} setSearch={setSearch} />
//       <div className="p-4">
//         {/* Recipe Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {recipes.map((recipe) => (
//             <div
//               key={recipe.id}
//               className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//             >
//               <Link to={`/recipe/${recipe.id}`}>
//                 <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
//                 <div className="p-4">
//                   <h2 className="text-lg font-semibold">{recipe.title}</h2>
//                 </div>
//               </Link>
//               {/* Favorite Icon */}
//               <div
//                 className="absolute top-2 right-2 cursor-pointer"
//                 onClick={() => toggleFavorite(recipe.id)}
//               >
//                 {favorites.includes(recipe.id) ? (
//                   <FaHeart className="text-red-500 text-2xl" />
//                 ) : (
//                   <FaRegHeart className="text-gray-500 text-2xl" />
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function Home() {
//   const [search, setSearch] = useState("");
//   const [recipes, setRecipes] = useState([]);
//   const [favorites, setFavorites] = useState([]);

//   // Load favorites from localStorage when component mounts
//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     setFavorites(storedFavorites);
//   }, []);

//   // Fetch recipes based on ingredient search
//   async function fetchData() {
//     try {
//       const response = await fetch(
//         `https://api.spoonacular.com/recipes/complexSearch?query=${search}&apiKey=38f5ba90620c4409999dcf57fc75c885`
//       );
//       const data = await response.json();
//       setRecipes(data.results);
//     } catch (error) {
//       console.error("Failed to fetch recipes:", error);
//     }
//   }

//   useEffect(() => {
//     if (search) {
//       fetchData();
//     }
//   }, [search]);

//   // Toggle favorite recipe and store in localStorage
//   const toggleFavorite = (recipe) => {
//     setFavorites((prev) => {
//       const isFavorite = prev.some((fav) => fav.id === recipe.id);
//       const updatedFavorites = isFavorite
//         ? prev.filter((fav) => fav.id !== recipe.id)
//         : [...prev, recipe];

//       localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//       return updatedFavorites;
//     });
//   };

//   return (
//     <div>
//       <Navbar />
//       {/* Background Image with Search Bar */}
//       <div
//         className="relative bg-cover bg-center h-96"
//         style={{
//           backgroundImage:
//             "url('https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <input
//             type="text"
//             placeholder="Search recipes by ingredient..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-2/3 p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>
//       </div>

//       {/* Recipe Cards Section */}
//       <div className="p-4">
//         {recipes.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {recipes.map((recipe) => (
//               <div
//                 key={recipe.id}
//                 className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//               >
//                 <Link
//                   to={`/recipe/${recipe.id}`}
//                   className="block hover:opacity-90"
//                 >
//                   <img
//                     src={recipe.image}
//                     alt={recipe.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-4">
//                     <h2 className="text-lg font-semibold">{recipe.title}</h2>
//                   </div>
//                 </Link>

//                 {/* Favorite Icon */}
//                 <div
//                   className="absolute top-2 right-2 cursor-pointer"
//                   onClick={() => toggleFavorite(recipe)}
//                 >
//                   {favorites.some((fav) => fav.id === recipe.id) ? (
//                     <FaHeart className="text-red-500 text-2xl" />
//                   ) : (
//                     <FaRegHeart className="text-gray-500 text-2xl" />
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500 mt-4">No recipes found. Try searching for something!</p>
//         )}
//       </div>
//     </div>
//   );
// }

// function Home() {
//   const [search, setSearch] = useState("");
//   const [recipes, setRecipes] = useState([]);
//   const [favorites, setFavorites] = useState([]);

//   // Load favorites from localStorage
//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     setFavorites(storedFavorites);
//   }, []);

//   // Fetch recipes based on search input
//   async function fetchData() {
//     try {
//       const response = await fetch(
//         `https://api.spoonacular.com/recipes/complexSearch?query=${search}&apiKey=777918ec0c9f41fa9f163fb33808d265`
//       );
//       const data = await response.json();
//       setRecipes(data.results);
//     } catch (error) {
//       console.error("Failed to fetch recipes:", error);
//     }
//   }

//   useEffect(() => {
//     if (search) {
//       fetchData();
//     }
//   }, [search]);

//   // Toggle favorite recipes and save to localStorage
//   const toggleFavorite = (recipe) => {
//     setFavorites((prev) => {
//       const isFavorite = prev.some((fav) => fav.id === recipe.id);
//       const updatedFavorites = isFavorite
//         ? prev.filter((fav) => fav.id !== recipe.id)
//         : [...prev, recipe];

//       localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//       return updatedFavorites;
//     });
//   };

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "url('https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
//       }}
//     >
//       <div className="min-h-screen bg-black/10">
//         <Navbar />

//         {/* Hero Section with Search Bar */}
//         <div className="container h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
//               Discover <span className="text-violet-500">Mouthwatering Recipes</span>
//             </h1>
//             <p className="text-lg sm:text-xl text-gray-100 mb-10">
//               Find your next favorite dish in seconds!
//             </p>

//             {/* Stylish Search Bar */}
//             <div className="relative mx-auto w-full sm:w-96">
//               <input
//                 type="text"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="h-14 w-full pr-12 pl-5 rounded-lg shadow-lg focus:ring-2 focus:ring-violet-500 focus:outline-none"
//                 placeholder="Search anything..."
//               />
//               <div
//                 className="absolute top-4 right-4 cursor-pointer text-gray-100 hover:text-violet-600"
//                 onClick={fetchData}
//               >
//                 <FaSearch className="text-2xl" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Recipe Cards Section */}
//         <div className="p-6 bg-white rounded-t-3xl shadow-inner">
//           {recipes.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {recipes.map((recipe) => (
//                 <div
//                   key={recipe.id}
//                   className="relative bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
//                 >
//                   <Link to={`/recipe/${recipe.id}`} className="block hover:opacity-90">
//                     <img
//                       src={recipe.image}
//                       alt={recipe.title}
//                       className="w-full h-48 object-cover"
//                     />
//                     <div className="p-4">
//                       <h2 className="text-lg font-semibold text-gray-800">{recipe.title}</h2>
//                     </div>
//                   </Link>

//                   {/* Favorite Icon */}
//                   <div
//                     className="absolute top-2 right-2 cursor-pointer"
//                     onClick={() => toggleFavorite(recipe)}
//                   >
//                     {favorites.some((fav) => fav.id === recipe.id) ? (
//                       <FaHeart className="text-red-500 text-2xl" />
//                     ) : (
//                       <FaRegHeart className="text-gray-400 text-2xl" />
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-center text-gray-700 mt-4">
//               No recipes found. Try searching for something tasty!
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// function Home() {
//   const [search, setSearch] = useState("");
//   const [recipes, setRecipes] = useState([]);
//   const [favorites, setFavorites] = useState([]);

//   // Load favorites from localStorage
//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     setFavorites(storedFavorites);
//   }, []);

//   // Fetch recipes based on search input
//   async function fetchData() {
//     try {
//       const response = await fetch(
//         `https://api.spoonacular.com/recipes/complexSearch?query=${search}&apiKey=777918ec0c9f41fa9f163fb33808d265`
//       );
//       const data = await response.json();
//       setRecipes(data.results);
//     } catch (error) {
//       console.error("Failed to fetch recipes:", error);
//     }
//   }

//   useEffect(() => {
//     if (search) {
//       fetchData();
//     }
//   }, [search]);

//   // Toggle favorite recipes and save to localStorage
//   const toggleFavorite = (recipe) => {
//     setFavorites((prev) => {
//       const isFavorite = prev.some((fav) => fav.id === recipe.id);
//       const updatedFavorites = isFavorite
//         ? prev.filter((fav) => fav.id !== recipe.id)
//         : [...prev, recipe];

//       localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//       return updatedFavorites;
//     });
//   };

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "url('https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
//       }}
//     >
//       {/* Reduced Height for Visual Appeal */}
//       <div className="h-[50vh] bg-black/30 flex flex-col">
//         <Navbar />

//         {/* Hero Section with Search Bar */}
//         <div className="container flex justify-center items-center px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
//               Discover <span className="text-violet-500">Mouthwatering Recipes</span>
//             </h1>
//             <p className="text-lg sm:text-xl text-gray-100 mb-8">
//               Find your next favorite dish in seconds!
//             </p>

//             {/* Stylish Search Bar */}
//             <div className="relative mx-auto w-full sm:w-96">
//               <input
//                 type="text"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="h-14 w-full pr-12 pl-5 rounded-lg shadow-lg focus:ring-2 focus:ring-violet-500 focus:outline-none"
//                 placeholder="Search anything..."
//               />
//               <div
//                 className="absolute top-4 right-4 cursor-pointer text-gray-100 hover:text-violet-600"
//                 onClick={fetchData}
//               >
//                 <FaSearch className="text-2xl" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Recipe Cards Section */}
//       <div className="p-6 bg-white rounded-t-3xl shadow-inner mt-[-4rem]">
//         {recipes.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {recipes.map((recipe) => (
//               <div
//                 key={recipe.id}
//                 className="relative bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
//               >
//                 <Link to={`/recipe/${recipe.id}`} className="block hover:opacity-90">
//                   <img
//                     src={recipe.image}
//                     alt={recipe.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-4">
//                     <h2 className="text-lg font-semibold text-gray-800">{recipe.title}</h2>
//                   </div>
//                 </Link>

//                 {/* Favorite Icon with Toggle Functionality */}
//                 <div
//                   className="absolute top-2 right-2 cursor-pointer"
//                   onClick={() => toggleFavorite(recipe)}
//                 >
//                   {favorites.some((fav) => fav.id === recipe.id) ? (
//                     <FaHeart className="text-red-500 text-2xl" />
//                   ) : (
//                     <FaRegHeart className="text-gray-400 text-2xl" />
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-700 mt-4">
//             No recipes found. Try searching for something tasty!
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// function Home() {
//   const [search, setSearch] = useState("");
//   const [recipes, setRecipes] = useState([]);
//   const [favorites, setFavorites] = useState([]);

//   // Load favorites from localStorage on component mount
//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     setFavorites(storedFavorites);
//   }, []);

//   // Fetch data based on search input
//   async function fetchData() {
//     if (!search) return;
//     try {
//       const response = await fetch(
//         `https://api.spoonacular.com/recipes/complexSearch?query=${search}&apiKey=777918ec0c9f41fa9f163fb33808d265`
//       );
//       const data = await response.json();
//       setRecipes(data.results);
//     } catch (error) {
//       console.error("Failed to fetch recipes:", error);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, [search]);

//   // Toggle Favorite and update localStorage
//   const toggleFavorite = (id) => {
//     setFavorites((prev) => {
//       const updatedFavorites = prev.includes(id)
//         ? prev.filter((fav) => fav !== id) // Remove from favorites
//         : [...prev, id]; // Add to favorites

//       localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Persist favorites
//       return updatedFavorites;
//     });
//   };

//   return (
//     <div>
//       <Navbar />
//       <Hero search={search} setSearch={setSearch} />
//       <div className="p-4">
//         {/* Recipe Cards Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {recipes.map((recipe) => (
//             <div
//               key={recipe.id}
//               className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//             >
//               <Link to={`/recipe/${recipe.id}`}>
//                 <img
//                   src={recipe.image}
//                   alt={recipe.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h2 className="text-lg font-semibold">{recipe.title}</h2>
//                 </div>
//               </Link>

//               {/* Favorite Icon */}
//               <div
//                 className="absolute top-2 right-2 cursor-pointer"
//                 onClick={() => toggleFavorite(recipe.id)}
//               >
//                 {favorites.includes(recipe.id) ? (
//                   <FaHeart className="text-red-500 text-2xl" />
//                 ) : (
//                   <FaRegHeart className="text-gray-500 text-2xl" />
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function Home() {
//   const [search, setSearch] = useState("");
//   const [recipes, setRecipes] = useState([]);
//   const [favorites, setFavorites] = useState([]);

//   // Load favorites from localStorage on component mount
//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     setFavorites(storedFavorites);
//   }, []);

//   // Fetch data based on search input
//   async function fetchData() {
//     if (!search) return;
//     try {
//       const response = await fetch(
//         `https://api.spoonacular.com/recipes/complexSearch?query=${search}&apiKey=97bec6b1b7e84bc787a954aeaa080133`
//       );
//       const data = await response.json();
//       setRecipes(data.results);
//     } catch (error) {
//       console.error("Failed to fetch recipes:", error);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, [search]);

//   // Toggle Favorite and update localStorage
//   const toggleFavorite = (recipe) => {
//     setFavorites((prev) => {
//       const isFavorited = prev.some((fav) => fav.id === recipe.id);
//       const updatedFavorites = isFavorited
//         ? prev.filter((fav) => fav.id !== recipe.id) // Remove from favorites
//         : [...prev, recipe]; // Add to favorites

//       localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//       return updatedFavorites;
//     });
//   };

//   const isFavorite = (id) => favorites.some((fav) => fav.id === id);

//   return (
//     <div className='m-2'>
//       <Navbar />
//       <Hero search={search} setSearch={setSearch} />
//       <div className="p-4">
//         {/* Recipe Cards Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {recipes.map((recipe) => (
//             <div
//               key={recipe.id}
//               className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//             >
//               <Link to={`/recipe/${recipe.id}`}>
//                 <img
//                   src={recipe.image}
//                   alt={recipe.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h2 className="text-lg font-semibold">{recipe.title}</h2>
//                 </div>
//               </Link>

//               {/* Favorite Icon */}
//               <div
//                 className="absolute top-2 right-2 cursor-pointer"
//                 onClick={() => toggleFavorite(recipe)}
//               >
//                 {isFavorite(recipe.id) ? (
//                   <FaHeart className="text-red-500 text-2xl" />
//                 ) : (
//                   <FaRegHeart className="text-red-500 text-2xl" />
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className='bg-red-300'>

//         </div>
//       </div>
//     </div>
//   );
// }

function Home() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  // Fetch data based on search input
  async function fetchData() {
    if (!search) return;
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${search}&apiKey=97bec6b1b7e84bc787a954aeaa080133`
      );
      const data = await response.json();
      setRecipes(data.results);
    } catch (error) {
      console.error("Failed to fetch recipes:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [search]);

  // Toggle Favorite and update localStorage
  const toggleFavorite = (recipe) => {
    setFavorites((prev) => {
      const isFavorited = prev.some((fav) => fav.id === recipe.id);
      const updatedFavorites = isFavorited
        ? prev.filter((fav) => fav.id !== recipe.id)
        : [...prev, recipe];

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const isFavorite = (id) => favorites.some((fav) => fav.id === id);

  return (
    <div className='m-2'>
      <Navbar />
      <Hero search={search} setSearch={setSearch} />
      
      {/* You Need to set the border */}
      <div className="p-4 border-1 border-solid border-red-500 bg-gradient-to-r from-green-100 to-yellow-100 shadow-xl mt-2 ">
        {/* Recipe Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="relative bg-gradient-to-r from-purple-200 to-indigo-200 shadow-xl rounded-3xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 border-2 border-[#540c97] hover:border-[#7b1fa2"
            >
              <Link to={`/recipe/${recipe.id}`}>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-[#540c97] flex items-center gap-2">
                    <GiCook className="text-xl" /> {recipe.title}
                  </h2>
                </div>
              </Link>

              {/* Favorite Icon */}
              <div
                className="absolute top-2 right-2 cursor-pointer bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform"
                onClick={() => toggleFavorite(recipe)}
              >
                {isFavorite(recipe.id) ? (
                  <FaHeart className="text-red-500 text-2xl" />
                ) : (
                  <FaRegHeart className="text-gray-400 text-2xl" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-green-100 to-yellow-100 shadow-xl rounded-2xl p-8 my-12 border-2 border-solid border-violet-500">
  
  <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0 ">
    <img
      src="https://blog.hellofresh.com/wp-content/uploads/2018/01/HF180103_Extrashot_460_US_Colourful_Fruit_Platters_Photo3_Horizontal_low-e1515617958762.jpg"
      alt="Delicious Recipe"
      className="rounded-2xl shadow-lg object-cover w-full max-w-sm"
    />
  </div>

 
  <div className="w-full md:w-1/2 text-center md:text-left px-8 ">
    <h2 className="text-3xl font-extrabold text-green-800 mb-4">About Us</h2>
    <p className="text-gray-700 text-lg mb-4">
      Welcome to <span className="font-semibold text-green-600">Recipe Finder</span> – your ultimate destination for discovering delightful recipes from around the world. Whether you're a seasoned chef or just starting your culinary journey, our platform offers a treasure trove of inspiration.
    </p>
    <p className="text-gray-700 text-lg mb-6">
      From quick weeknight dinners to gourmet feasts, every recipe is crafted to bring joy to your table. Dive into the flavors, get creative, and let your inner chef shine!
    </p>
    <p className="text-gray-700 text-lg mb-6">
      Unleash your passion for cooking and transform ordinary ingredients into extraordinary meals—one recipe at a time!
    </p>
    
  </div>
      </div> */}

<div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-green-100 to-yellow-100 shadow-xl rounded-xl p-8 mt-2 border-2 border-solid border-violet-500">
  {/* Animated Recipe Image */}
  <motion.div
    className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0"
    whileHover={{ scale: 1.1 }} // Zoom-in on hover
    initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
    animate={{ opacity: 1, x: 0 }} // Slide in from the left
    transition={{ duration: 0.8 }}
  >
    <img
      src="https://blog.hellofresh.com/wp-content/uploads/2018/01/HF180103_Extrashot_460_US_Colourful_Fruit_Platters_Photo3_Horizontal_low-e1515617958762.jpg"
      alt="Delicious Recipe"
      className="rounded-2xl shadow-lg object-cover w-full max-w-sm"
    />
  </motion.div>

  {/* Animated About Us Description */}
  <motion.div
    className="w-full md:w-1/2 text-center md:text-left px-8"
    initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
    animate={{ opacity: 1, x: 0 }} // Slide in from the right
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <h2 className="text-3xl font-extrabold text-green-800 mb-4">About Us</h2>
    <p className="text-gray-700 text-lg mb-4">
      Welcome to <span className="font-semibold text-green-600">Recipe Finder</span> – your ultimate destination for discovering delightful recipes from around the world. Whether you're a seasoned chef or just starting your culinary journey, our platform offers a treasure trove of inspiration.
    </p>
    <p className="text-gray-700 text-lg mb-6">
      From quick weeknight dinners to gourmet feasts, every recipe is crafted to bring joy to your table. Dive into the flavors, get creative, and let your inner chef shine!
    </p>
    <p className="text-gray-700 text-lg mb-6">
      Unleash your passion for cooking and transform ordinary ingredients into extraordinary meals—one recipe at a time!
    </p>
  </motion.div>
</div>

    </div>
  );
}

export default Home