import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  // Fetch all recipes
  useEffect(() => {
    async function fetchAllRecipes() {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?number=20&apiKey=97bec6b1b7e84bc787a954aeaa080133`
        );
        const data = await response.json();
        setRecipes(data.results);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      }
    }
    fetchAllRecipes();
  }, []);

  // Toggle favorite functionality
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
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">All Recipes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Link to={`/recipe/${recipe.id}`}>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{recipe.title}</h2>
                </div>
              </Link>

              {/* Favorite Icon */}
              <div
                className="absolute top-2 right-2 cursor-pointer"
                onClick={() => toggleFavorite(recipe)}
              >
                {isFavorite(recipe.id) ? (
                  <FaHeart className="text-red-500 text-2xl" />
                ) : (
                  <FaRegHeart className="text-red-500 text-2xl" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;