
import React, { useState } from 'react';
import Home from "./Home";
import Signin from "./Signin";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}





