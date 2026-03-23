import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

import Home from "./Home";
import About from "./About";
import MMA from "./MMA";
import Boxing from "./Boxing";
import Fitness from "./Fitness";
import Membership from "./Membership";
import Locations from "./Locations";
import Contact from "./Contact";
import Login from "./Login";
import Signup from "./Signup";
import Nofound from "./Nofound";
import AA from "./AA";
import YourMem from "./YourMem";



function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mma" element={<MMA />} />
        <Route path="/boxing" element={<Boxing />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aa" element={<AA />} />
        <Route path="/yourmem" element={<YourMem />} />
        <Route path="*" element={<Nofound />} />
        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App; 