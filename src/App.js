import "./App.css";
import Navbar from "./components/navbar/Navbar.js";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/homepage/Home";
import NotFound from "./components/pages/404pagenotfound/NotFound.js";
import League from "./components/pages/lol/League.js";
import Valorant from "./components/pages/valorant/Valorant.js";
import ScrollToTop from "./ScrollToTop";
import Login from "./components/login/Login";
import About from "./components/pages/about/About.js";
import axios from "axios";
import { useEffect, useState } from "react";
import Dashboard from "./components/pages/adminpanel/Dashboard";
import ProtectedRoute from "./components/navbar/ProtectedRoute";
import Footer from "./components/footer/Footer";
import Sidenav from "./components/navbar/Sidenav";
import Valo from "./components/pages/lol/Valo";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //Function to validate if user is logged in
  async function validateIfIserIsLoggedIn() {
    const result = await axios.get("/api/user/userstatus");
    console.log("User is logged in: ", result.data);
    if (result.data) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }
  useEffect(() => {
    validateIfIserIsLoggedIn();
  }, []);

  return (
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      <ScrollToTop>
        <div className="application">
          
            <Navbar />
            <Sidenav />
          

          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games/league-of-legends" element={<League />} />
              <Route path="/about" element={<About />} />
              <Route path="/games/valorant" element={<Valo />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
          

              <Route path="*" element={<NotFound />} />
            </Routes>
      
          </div>

          <Footer />
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
