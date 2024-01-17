import { useState } from "react";
import Navbar from "./Navbar";
import "./App.css";
import Landing from "./Landing";
import Features from "./Features";
const App = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <Features />
    </>
  );
};

export default App;
