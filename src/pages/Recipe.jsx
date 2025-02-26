import React from 'react';
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from '../components/Navbar';
import { useRef } from 'react';
import Hero from '../components/Hero';


const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const recipeRef = useRef();

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=aeea10cfe46f478ea39730d7a1725cc1`
        );
        if (!response.ok) throw new Error("Failed to fetch recipe");
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error("API fetch error:", error);
      }
    }
    fetchRecipe();
  }, [id]);

  if (!recipe) return <p className="text-center mt-20 text-xl">Loading...</p>;

  const steps = recipe.instructions
    ? recipe.instructions
        .replace(/<\/?[^>]+(>|$)/g, "")
        .split(/(?<=[.?!])\s+/)
        .filter((step) => step.trim().length > 0)
    : [];

  const ingredients = recipe.extendedIngredients || [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="p-2 min-h-screen bg-gradient-to-b from-pink-50 to-white"
    >
      <Navbar />
      <div ref={recipeRef} className="mt-4 max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl p-8 border-2 border-solid border-pink-300 shadow-red-100">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-5xl font-bold text-center text-red-400 mb-4"
        >
          {recipe.title}
        </motion.h1>

        {/* Servings and Time Section */}
        {/* <div className="flex justify-center space-x-8 mb-6">
          <div className="bg-yellow-100 p-2 rounded-xl w-64 h-10 shadow-md border border-yellow-300 text-center">
            <h3 className="text-xl font-semibold text-yellow-700">Servings</h3>
            <p className="text-lg font-bold">{recipe.servings}</p>
          </div>
          <div className="bg-purple-100 p-2 rounded-xl shadow-md border border-purple-300 text-center">
            <h3 className="text-xl font-semibold text-purple-700">Ready In</h3>
            <p className="text-lg font-bold">{recipe.readyInMinutes} mins</p>
          </div>
        </div> */}

        <motion.img
          src={recipe.image}
          alt={recipe.title}
          className="rounded-2xl mx-auto mb-8 shadow-lg border-2 border-solid border-red-500"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Ingredients Section */}
        <h2 className="text-3xl text-green-700 mb-4 font-semibold">Ingredients:</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ingredients.length > 0 ? (
            ingredients.map((ingredient, index) => (
              <motion.li
                key={index}
                className="bg-green-50 shadow-lg p-4 rounded-xl hover:shadow-2xl transition-transform hover:scale-105 border border-green-200"
                whileHover={{ scale: 1.05 }}
              >
                {ingredient.original}
              </motion.li>
            ))
          ) : (
            <p>No ingredients available.</p>
          )}
        </ul>

        {/* Instructions Section */}
        <h2 className="text-3xl text-blue-700 mt-8 mb-4 font-semibold">Instructions:</h2>
        <div className="space-y-4">
          {steps.length > 0 ? (
            <ol className="list-decimal space-y-3 pl-6">
              {steps.map((step, index) => (
                <motion.li
                  key={index}
                  className="bg-blue-50 shadow-lg p-4 rounded-xl hover:shadow-2xl transition-transform hover:scale-105 border border-blue-200"
                  whileHover={{ scale: 1.05 }}
                >
                  {step.trim()}
                </motion.li>
              ))}
            </ol>
          ) : (
            <p>No instructions available.</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Recipe;