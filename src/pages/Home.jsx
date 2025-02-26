import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { FaHeart, FaRegHeart, FaSearch } from "react-icons/fa";
import { GiCook } from "react-icons/gi";
import { motion } from "framer-motion";


function Home() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [randomRecipes, setRandomRecipes] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  async function fetchData() {
    if (!search) return;
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${search}&apiKey=aeea10cfe46f478ea39730d7a1725cc1`
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

  async function fetchRandomRecipes() {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?number=4&apiKey=aeea10cfe46f478ea39730d7a1725cc1`
      );
      const data = await response.json();
      setRandomRecipes(data.recipes);
    } catch (error) {
      console.error("Failed to fetch random recipes:", error);
    }
  }

  useEffect(() => {
    fetchRandomRecipes();
  }, []);

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
      
      <div className="p-4 border-1 border-solid border-red-500 bg-gradient-to-r from-green-100 to-yellow-100 shadow-xl mt-2 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="relative bg-gradient-to-r from-purple-200 to-indigo-200 shadow-xl rounded-3xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 border-2 border-[#540c97] hover:border-[#7b1fa2]"
            >
              <Link to={`/recipe/${recipe.id}`}>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-4 flex items-center justify-start">
                  <div><GiCook className="text-3xl text-[#540c97]" /></div>
                  <div className='ml-4'><h2 className="text-lg font-semibold text-[#540c97] flex items-center gap-2">
                    {recipe.title}
                  </h2></div>
                </div>
              </Link>

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

      <div className="mt-4 p-4 bg-gradient-to-r from-blue-100 to-green-100 shadow-xl rounded-xl border-2 border-solid border-blue-500">
        <h2 className="text-2xl font-bold text-center text-violet-800 mb-4 animate-pulse">Recipes for the day</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {randomRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="relative bg-gradient-to-r from-purple-200 to-indigo-200 shadow-xl rounded-3xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 border-2 border-[#540c97] hover:border-[#7b1fa2]"
            >
              <Link to={`/recipe/${recipe.id}`}>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-4 flex items-center justify-start">
                  <div><GiCook className="text-3xl text-[#540c97]" /></div>
                  <div className='ml-4'><h2 className="text-lg font-semibold text-[#540c97] flex items-center gap-2">
                    {recipe.title}
                  </h2></div>
                </div>
              </Link>
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
      <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-green-100 to-yellow-100 shadow-xl rounded-xl p-8 mt-4 border-2 border-solid border-violet-500">
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