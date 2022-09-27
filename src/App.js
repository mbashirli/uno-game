import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import HowToPlay from "./pages/HowToPlay";
import FindFriends from "./pages/FindFriends";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/HowToPlay" element={<HowToPlay />} />
        <Route path="/FindFriends" element={<FindFriends />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
