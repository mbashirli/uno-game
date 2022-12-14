import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import HowToPlay from "./pages/HowToPlay";
import FindFriends from "./pages/FindFriends";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/HowToPlay" element={<HowToPlay />} />
            <Route path="/FindFriends" element={<FindFriends />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
