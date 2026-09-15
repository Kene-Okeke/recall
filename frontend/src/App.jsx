import "./App.css";

import LoginScr from "./pages/LoginScr.jsx";
import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginScr />} />
    </Routes>
  );
}

export default App;
