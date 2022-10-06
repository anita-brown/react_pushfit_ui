import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Home from "./models/Home";
import LitePaper from "./models/LitePaper";

const Routes = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/home" element={<Home />} caseSensitive />
        <Route path="/litepaper" element={<LitePaper />} caseSensitive />
      </Switch>
      <Footer />
    </>
  );
};

export default Routes;
