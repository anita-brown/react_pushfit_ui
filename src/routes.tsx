import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import RoadMap from "./components/roadmap/RoadMap";
import About from "./pages/About";
import Home from "./pages/Home";
import LitePaper from "./pages/LitePaper";

const Routes = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/home" element={<Home />} caseSensitive />
        <Route path="/litepaper" element={<LitePaper />} caseSensitive />
        <Route path="/about" element={<About />} caseSensitive />
        {/* <Route path="/roadmap" element={<RoadMap />} caseSensitive /> */}
      </Switch>
      <Footer />
    </>
  );
};

export default Routes;
