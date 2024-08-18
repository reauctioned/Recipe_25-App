import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/navbar";
import HomePage from "./pages/home/home";
import Detail from "./pages/details/detail";
import Favorite from "./pages/favorite/fav";

function App() {
  return (
    <>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/recipe-item/:id" element={<Detail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
