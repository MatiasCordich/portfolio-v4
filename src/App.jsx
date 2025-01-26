import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./app.css";
import Links from "./components/Links/Links";
import Window from "./components/Window/Window";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Experience from "./pages/Experience/Experience";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <div className="box">
      <Navbar />
      <div className="desktop">
        <Links />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Window />}>
              <Route path="home" element={<Home />} />
              <Route path="experience" element={<Experience />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
