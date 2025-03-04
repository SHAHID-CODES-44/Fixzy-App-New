import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Location from "./components/Location";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} /> {/* 👈 Changed to lowercase */}
        <Route path="/Location" element={<Location />} /> {/* 👈 Changed to lowercase */}
      </Routes>
    </>
  );
}

export default App;
