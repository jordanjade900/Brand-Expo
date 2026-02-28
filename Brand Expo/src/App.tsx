import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#020817] text-white font-sans selection:bg-cyan-500/30 flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
