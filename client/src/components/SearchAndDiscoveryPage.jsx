
// SearchAndDiscoveryPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Search.css"
const SearchAndDiscoveryPage = () => {
  const [selectedRole, setSelectedRole] = useState("");

  const handleRoleSelection = (event) => {
    const selectedRole = event.target.value;
    setSelectedRole(selectedRole);
  };

  // Function to get default skill for a role (you can modify this according to your application logic).
  const getDefaultSkillForRole = (role) => {
    switch (role) {
      case "healthcare":
        return "First Aid";
      case "it":
        return "Programming";
      case "teacher":
        return "Lesson Planning";
      case "finance":
        return "Financial Analysis";
      case "engineering":
        return "Mechanical Engineering";
      default:
        return "";
    }
  };

  const handleSearch = () => {
    const defaultSkill = getDefaultSkillForRole(selectedRole);
    const encodedDefaultSkill = encodeURIComponent(defaultSkill);
    window.location.href = `/SkillPage/${selectedRole}/${encodedDefaultSkill}`;
  };

  return (
    <div className="container">
    <div className="left-side">
      <h1>Choose a Role</h1>
      <div className="dropdown">
        <label htmlFor="role">Select Role:</label>
        <select
          id="role"
          value={selectedRole}
          onChange={handleRoleSelection}
        >
          <option value="">Select Role</option>
          <option value="healthcare">Healthcare</option>
          <option value="it">Information Technology (IT)</option>
          <option value="teacher">Teacher</option>
          <option value="finance">Finance</option>
          <option value="engineering">Engineering</option>
        </select>
      </div>
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
    <div className="right-side">
      <img src="https://assets.lntedutech.com/Skillexchange/banner-image2.png" alt="img"/>
    </div>
  </div>
  );
};

export default SearchAndDiscoveryPage;
