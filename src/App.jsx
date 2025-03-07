import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Recipes from "./pages/Recipes";
import Favorites from "./pages/Favorites";

import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/recipes" element={<Recipes />} /> {/* New Route */}
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App
