// UserSearch.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NetworkingPage.css";

function UserSearch() {
    const [education, setEducation] = useState("Healthcare");
    const [userInfo, setUserInfo] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    async function fetchUserInfo() {
        try {
            const response = await fetch(
                `http://localhost:3001/users/search/${education}`
            );
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            if (data && data.length > 0) {
                setUserInfo({
                    id: data[0]._id,
                    name: data[0].name,
                    education: data[0].education,
                });
                setError(null);
            } else {
                setUserInfo(null);
                setError("No user found for the selected education.");
            }
        } catch (error) {
            console.error("Error fetching user info:", error);
            setUserInfo(null);
            setError("Error fetching user info. Please try again.");
        }
    }

    const navigateToChatPage = () => {
        if (userInfo) {
            navigate("/Chat", { state: { selectedUser: userInfo } });
        }
    };

    return (
        <div className="container">
            <div className="dropdown-container">
                <div className="dropdown">
                    <label htmlFor="education">Select Education:</label>
                    <select
                        id="education"
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                    >
                        <option value="Healthcare">Healthcare</option>
                        <option value="IT">Information Technology (IT)</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Finance">Finance</option>
                        <option value="Engineering">Engineering</option>
                        <option value="SalesAndMarketing">Sales and Marketing</option>
                        <option value="Hospitality">Hospitality</option>
                        <option value="Construction">Construction</option>
                    </select>
                    <button onClick={fetchUserInfo}>Search</button>
                </div>

                {error && <p className="error">{error}</p>}
                {userInfo && (
                    <div className="user-profile">
                        <p>Name: {userInfo.name}</p>
                        <p>Education: {userInfo.education}</p>
                        <button onClick={navigateToChatPage}>Chat</button>
                    </div>
                )}
            </div>
            <div className="image-container">
                <img
                    src="https://media.architecturaldigest.com/photos/5e5937afeb28a3000897568a/master/pass/GettyImages-683743230.jpg"
                    alt="img"
                />
            </div>
        </div>
    );
}

export default UserSearch;
