import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddMovie from "./feature/addMovie";
import WachedMovies from "./feature/wachedMovie";
import WatchListMovies from "./feature/watchListMovie";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<WatchListMovies/>}/>
        <Route path="/watched" element={<WachedMovies/>}/>
        <Route path="/add" element={<AddMovie/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
