import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/homepage/Home";
import League from "./components/pages/lol/League";
import Valo from "./components/pages/lol/Valo";
import Login from "./components/login/Login";
import About from "./components/pages/about/About";
import Dashboard from "./components/pages/adminpanel/Dashboard";
import NotFound from "./components/pages/404pagenotfound/NotFound";
import Navbar from "./components/navbar/Navbar";
import Sidenav from "./components/navbar/Sidenav";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./ScrollToTop";
import "./App.css";
import Overwatch from "./components/pages/lol/Overwatch";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setIsLoggedIn(!!currentUser);
      setLoading(false); // Set loading to false once Firebase has checked auth state
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Return a loading indicator while waiting for Firebase
  }

  return (
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      <ScrollToTop>
        <div className="application scroll-container">
          <Navbar />
          <Sidenav />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games/league-of-legends" element={<League />} />
              <Route path="/about" element={<About />} />
              <Route path="/games/valorant" element={<Valo />} />
              <Route path="/games/overwatch" element={<Overwatch />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/dashboard"
                element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
              />
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
