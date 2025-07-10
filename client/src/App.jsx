// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import NetworkingPage from "./components/NetworkingPage";
import SearchAndDiscoveryPage from "./components/SearchAndDiscoveryPage";
import SkillPage from "./components/SkillPage";
import Chat from "./components/Chat";
function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/networkingpage" element={<NetworkingPage />} />
          <Route path="/searchanddiscoverypage" element={<SearchAndDiscoveryPage/>}/>
          <Route path="/SkillPage/:role/:skill" element={<SkillPage/>}/>
          <Route path="/chat" element={<Chat/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;

