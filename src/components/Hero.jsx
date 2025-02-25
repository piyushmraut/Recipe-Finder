import React from 'react'

// function Hero({ search, setSearch }) {
//   return (
//     <div
//       className="relative bg-cover bg-center h-96 flex items-center justify-center"
//       style={{
//         backgroundImage: `url('https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
//       }}
//     >
//       <div className="bg-red-50 bg-opacity-70 p-2 rounded-sm shadow-lg">
//         <input
//           type="text"
//           placeholder="Search for recipes based on ingredients..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="p-1 w-96 rounded-sm focus:outline-none"
//         />
//       </div>
//     </div>
//   );
// }

function Hero({ search, setSearch }) {
  return (
    <div
      className="relative bg-cover bg-center h-96 flex items-center justify-center mt-2 border-violet-600 border-solid border-2"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className=" bg-violet-400 bg-opacity-70 p-1 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3">
        <input
          type="text"
          placeholder="Search for recipes based on ingredients..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>
    </div>
  );
}

export default Hero