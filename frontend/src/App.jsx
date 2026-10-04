import "./App.css";

import LoginScr from "./pages/LoginScr.jsx";
import Home from "./pages/Home";
import FirstTopicScr from "./pages/FirstTopicScr.jsx";
import FirstRevScreen from "./pages/FirstRevScreen.jsx";
import CreateAccount from "./pages/CreateAccountPage.jsx";
import StudySchedule from "./pages/StudySchedule.jsx";
import SessionSize from "./pages/SessionSize.jsx";
import Welcome from "./pages/Welcome.jsx";
import Review from "./pages/Review.jsx";
import StatsScr from "./pages/StatsScr.jsx";
import Entry from "./pages/Entry.jsx";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Entry />} />
      <Route path="/first-topic" element={<FirstTopicScr />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<LoginScr />} />
      <Route path="/first-rev" element={<FirstRevScreen />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/study-schedule" element={<StudySchedule />} />
      <Route path="/session-size" element={<SessionSize />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/review" element={<Review />} />
      <Route path="/stats" element={<StatsScr />} />
    </Routes>
  );
}

export default App;
