import React from "react";
import "./App.css";

import {
  Footer,
  Features,
  Possibility,
  Blog,
  WhatGPTJ,
  Header,
} from "./containers";
import { Cta, Brand, Navbar } from "./components";

import "./App.css";

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPTJ />
    <Features />
    <Possibility />
    <Cta />
    <Blog />
    <Footer />
  </div>
);

export default App;
