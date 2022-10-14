import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainComponent, Home } from "pages";
import "styles/constants.css";
import "styles/responsive.css";
import "styles/variables.css";
export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
