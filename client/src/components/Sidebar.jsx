import React from "react";

function Sidebar({ user }) {
    return (
        <div className="sidebar">
            <h2>Welcome, {user.name}</h2>
            <p> {user.username}</p>
            <p> {user.email}</p>
            <p> {user.education}</p>
            <p> {user.skills}</p>
        </div>
    );
}

export default Sidebar;
