// Home.jsx

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.homebg}>
      <div className={styles.content}>
        <h1>Welcome to Skill Alignment and Networking Platform</h1>
        <p>Connect with professionals, explore opportunities, and grow your skills.</p>
        <div className={styles.buttons}>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

