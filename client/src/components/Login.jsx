import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Login.module.css";
function Login() {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [loginStatus, setLoginStatus] = useState("");

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/login", formData)
            .then((response) => {
                const userData = response.data;
                if (userData._id) { // Assuming '_id' is present only when login is successful
                    navigate("/Dashboard", { state: { user: userData } });
                } else {
                    setLoginStatus("Incorrect username or password");
                }
            })
            .catch((error) => {
                console.error("Login Error:", error);
                setLoginStatus("Something went wrong. Please try again later.");
            });
    };

    return (
        <div className={styles.container}>
        <h2 className={styles.heading}>Login</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
                <label className={styles.label} htmlFor="username">Username:</label>
                <input
                    className={styles.input}
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div>
                <label className={styles.label} htmlFor="password">Password:</label>
                <input
                    className={styles.input}
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
            </div>
            {loginStatus && <p className={styles.message}>{loginStatus}</p>}
            <button className={styles.button} type="submit">Login</button>
        </form>
        <p>
            Don't have an account? <Link className={styles.link} to="/signup">Signup</Link>
        </p>
    </div>
    );
}

export default Login;

