import React from 'react';
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=97bec6b1b7e84bc787a954aeaa080133`
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
      className="p-6 min-h-screen bg-gray-100"
    >
      <Navbar />
      <div className="mt-4 max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 border-2 border-solid border-red-300 shadow-red-400">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold text-center text-red-500 mb-6"
        >
          {recipe.title}
        </motion.h1>
        <motion.img
          src={recipe.image}
          alt={recipe.title}
          className="rounded-xl mx-auto mb-6 shadow-md border-2 border-solid border-red-500"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Ingredients Section */}
        <h2 className="text-2xl text-green-600 mb-4">Ingredients:</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ingredients.length > 0 ? (
            ingredients.map((ingredient, index) => (
              <motion.li
                key={index}
                className="bg-white shadow p-4 rounded-xl hover:shadow-lg transition-transform hover:scale-105"
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
        <h2 className="text-2xl text-blue-600 mt-8 mb-4">Instructions:</h2>
        <div className="space-y-4">
          {steps.length > 0 ? (
            <ol className="list-decimal space-y-2 pl-6">
              {steps.map((step, index) => (
                <motion.li
                  key={index}
                  className="bg-white shadow p-4 rounded-xl hover:shadow-lg transition-transform hover:scale-105"
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