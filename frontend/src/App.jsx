import "./App.css";

import LoginScr from "./pages/LoginScr.jsx";
import Home from "./pages/Home";
import FirstTopicScr from "./pages/FirstTopicScr.jsx";
import FirstRevScreen from "./pages/FirstRevScreen.jsx";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/first-topic" element={<FirstTopicScr />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginScr />} />
      <Route path="/first-rev" element={<FirstRevScreen />} />
    </Routes>
  );
}

export default App;
