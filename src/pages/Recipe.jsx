import React from 'react'
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

// function Recipe() {
//     let params = useParams();
//     const [recipe, setRecipe] = useState({});
  
//     async function getData() {
//       await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?includeNutrition=false&apiKey=38f5ba90620c4409999dcf57fc75c885`)
//         .then((response) => response.json())
//         .then((data) => setRecipe(data));
//     }
  
//     useEffect(() => {
//       getData();
//     }, []);
  
//     return (
//       <div>
//         <Navbar />
//         <Hero />
//         <div className="flex justify-center my-4">
//           <div className="w-full md:max-w-3xl p-4 shadow-lg rounded-lg bg-white">
//             <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded" />
//             <h1 className="text-2xl font-bold mt-4">{recipe.title}</h1>
//             <p className="mt-2">Servings: {recipe.servings}</p>
//             <h2 className="text-xl font-semibold mt-4">Instructions:</h2>
//             <p className="mt-2">{recipe.instructions}</p>
//           </div>
//         </div>
//       </div>
//     );
// }



// const Recipe = () => {
//     const { id } = useParams();
//     const [recipe, setRecipe] = useState(null);
  
//     useEffect(() => {
//       async function fetchRecipe() {
//         try {
//           const response = await fetch(
//             `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=38f5ba90620c4409999dcf57fc75c885`
//           );
//           if (!response.ok) throw new Error("Failed to fetch recipe");
//           const data = await response.json();
//           setRecipe(data);
//         } catch (error) {
//           console.error("API fetch error:", error);
//         }
//       }
//       fetchRecipe();
//     }, [id]);
  
//     if (!recipe) return <p>Loading...</p>;
  
//     return (
//       <div className="p-4 border-red-500 border-2 border-solid">
//         <div className='flex flex-col items-center'>
//         <Navbar />
        
//         <h1 className="text-3xl font-bold text-red-400 text-center">{recipe.title}</h1>
//         <img src={recipe.image} alt={recipe.title} className="rounded-lg my-4 ml-9" />
//         <h2 className="text-2xl mt-4 text-center">Instructions:</h2>
//         <div className="space-y-4 mt-2 flex items-center justify-center">
//           {recipe.instructions && (
//             <ol className="list-decimal space-y-2 pl-6 ml-96 mr-96">
//               {recipe.instructions
//                 .replace(/<\/?[^>]+(>|$)/g, "")
//                 .split(". ")
//                 .map((step, index) => (
//                   <li
//                     key={index}
//                     className="bg-white shadow-md p-4 rounded-xl"
//                   >
//                     {step}.
//                   </li>
//                 ))}
//             </ol>
//           )}
//         </div>
//         </div>
        
//       </div>
//     );
//   };

// const Recipe = () => {
//     const { id } = useParams();
//     const [recipe, setRecipe] = useState(null);
  
//     useEffect(() => {
//       async function fetchRecipe() {
//         try {
//           const response = await fetch(
//             `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=38f5ba90620c4409999dcf57fc75c885`
//           );
//           if (!response.ok) throw new Error("Failed to fetch recipe");
//           const data = await response.json();
//           setRecipe(data);
//         } catch (error) {
//           console.error("API fetch error:", error);
//         }
//       }
//       fetchRecipe();
//     }, [id]);
  
//     if (!recipe) return <p>Loading...</p>;
  
//     // Splitting instructions properly by handling periods and spaces
//     const steps = recipe.instructions
//       ? recipe.instructions
//           .replace(/<\/?[^>]+(>|$)/g, "") // Remove any HTML tags
//           .split(/(?<=[.?!])\s+/) // Split after ., !, or ? followed by space
//           .filter((step) => step.trim().length > 0) // Remove empty steps
//       : [];
  
//     return (
//       <div className="p-4 border-red-500 border-2 border-solid">
//         <div className="flex flex-col items-center">
//           <Navbar />
  
//           <h1 className="text-3xl font-bold text-red-400 text-center">{recipe.title}</h1>
//           <img src={recipe.image} alt={recipe.title} className="rounded-lg my-4 ml-9" />
//           <h2 className="text-2xl mt-4 text-center">Instructions:</h2>
//           <div className="space-y-4 mt-2 flex items-center justify-center">
//             {steps.length > 0 ? (
//               <ol className="list-decimal space-y-2 pl-6 ml-96 mr-96">
//                 {steps.map((step, index) => (
//                   <li
//                     key={index}
//                     className="bg-white shadow-md p-4 rounded-xl"
//                   >
//                     {step.trim()}
//                   </li>
//                 ))}
//               </ol>
//             ) : (
//               <p>No instructions available.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };
  
const Recipe = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
  
    useEffect(() => {
      async function fetchRecipe() {
        try {
          const response = await fetch(
            `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=38f5ba90620c4409999dcf57fc75c885`
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
  
    if (!recipe) return <p>Loading...</p>;
  
    // Splitting instructions properly by handling periods and spaces
    const steps = recipe.instructions
      ? recipe.instructions
          .replace(/<\/?[^>]+(>|$)/g, "") // Remove any HTML tags
          .split(/(?<=[.?!])\s+/) // Split after ., !, or ? followed by space
          .filter((step) => step.trim().length > 0) // Remove empty steps
      : [];
  
    // Extracting ingredients from the response
    const ingredients = recipe.extendedIngredients || [];
  
    return (
      <div className="p-4 border-red-500 border-2 border-solid">
        <div className="flex flex-col items-center">
          <Navbar />
  
          <h1 className="text-3xl font-bold text-red-400 text-center">{recipe.title}</h1>
          <img src={recipe.image} alt={recipe.title} className="rounded-lg my-4 ml-9 " />
  
          {/* Ingredients Section */}
          <h2 className="text-2xl mt-4 text-center text-green-600">Ingredients:</h2>
          <ul className="list-disc space-y-2 mt-2 pl-6 ml-96 mr-96">
            {ingredients.length > 0 ? (
              ingredients.map((ingredient, index) => (
                <li key={index} className="bg-white shadow-md p-4 rounded-xl">
                  {ingredient.original}
                </li>
              ))
            ) : (
              <p>No ingredients available.</p>
            )}
          </ul>
  
          {/* Instructions Section */}
          <h2 className="text-2xl mt-6 text-center text-blue-600">Instructions:</h2>
          <div className="space-y-4 mt-2 flex items-center justify-center">
            {steps.length > 0 ? (
              <ol className="list-decimal space-y-2 pl-6 ml-96 mr-96">
                {steps.map((step, index) => (
                  <li key={index} className="bg-white shadow-md p-4 rounded-xl">
                    {step.trim()}
                  </li>
                ))}
              </ol>
            ) : (
              <p>No instructions available.</p>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  

export default Recipe;