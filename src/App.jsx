import { useState } from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Archives from "./pages/archives/Archives";
import Description from "./pages/description/Description";
import Nav from "./components/Nav";
import Trash from "./pages/trash/Trash";
import FormModel from "./components/FormModel";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/archives' element={<Archives />} />
        <Route path='/description' element={<Description />} />
        <Route path='/trash' element={<Trash />} />

      </Routes>
    </>
  );
}

export default App;
