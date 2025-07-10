import React from "react";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const location = useLocation();
  const { state } = location;
  const user = state ? state.user : null;

  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>Skill Platform</h1>
        </div>
        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className={styles.content}>
        <div className={styles.sidebar}>{user && <Sidebar user={user} />}</div>
        <div className={styles.mainContent}>
          <h2>Welcome to Skill Alignment and Networking Platform</h2>
          <p>
            Connect with professionals, explore opportunities, and grow your
            skills.
          </p>
          <div className={`${styles.buttonContainer} ${styles.centeredButtons}`}>
            <Link to="/SearchAndDiscoveryPage">
              <button>Search and Discovery</button>
            </Link>
            <Link to="/NetworkingPage">
              <button>Networking</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;