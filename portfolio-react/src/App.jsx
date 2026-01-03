import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Legal from "./pages/Legal";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Legal" element={<Legal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
