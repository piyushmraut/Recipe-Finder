import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#540c97] text-white p-4 flex flex-col md:flex-row justify-between items-center shadow-lg">
      <div className="flex justify-between w-full md:w-auto items-center">
        <h1 className="text-xl md:text-2xl font-extrabold tracking-wide animate-[sparkle_2s_infinite] mb-4 md:mb-0">
          😋 Recipe Finder ✨
        </h1>
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <AiOutlineUnorderedList />
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex-col md:flex md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center mt-4 md:mt-0`}
      >
        <Link
          to="/"
          className="relative hover:underline hover:underline-offset-4 transition-all duration-300 hover:scale-105"
        >
          Home
        </Link>
        <Link
          to="/recipes"
          className="relative hover:underline hover:underline-offset-4 transition-all duration-300 hover:scale-105"
        >
          Recipes
        </Link>
        <Link
          to="/favorites"
          className="relative hover:underline hover:underline-offset-4 transition-all duration-300 hover:scale-105"
        >
          Favorites
        </Link>
      </div>
    </nav>
  );
}


export default Navbar