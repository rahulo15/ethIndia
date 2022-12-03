import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Wallet from "./components/Wallet";
import Body from "./components/Body";
import Register_donor from "./components/Register_donor";
import Register_patient from "./components/Register_patient";
import View_donor from "./components/View_donor";
import View_patient from "./components/View_patient";
import Contact from "./components/Contact";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Body />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/wallet" element={<Wallet />} />
            <Route exact path="/register_donor" element={<Register_donor />} />
            <Route
              exact
              path="/register_patient"
              element={<Register_patient />}
            />
            <Route exact path="/view_donor" element={<View_donor />} />
            <Route exact path="/view_patient" element={<View_patient />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
