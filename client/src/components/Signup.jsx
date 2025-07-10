import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Signup.module.css";
function Signup() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        name: "",
        email: "",
        education: "",
        skills: "",
    });
    const [usernameError, setUsernameError] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/check-username", formData)
            .then((result) => {
                if (result.data === "exist") {
                    setUsernameError(
                        "Username already exists. Please choose a different one."
                    );
                } else {
                    // If username is unique, proceed with signup
                    axios
                        .post("http://localhost:3001/register", formData)
                        .then(() => {
                            navigate("/login");
                        })
                        .catch((err) => console.log(err));
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Signup</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div>
                    <label className={styles.label} htmlFor="username">
                        Username:
                    </label>
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
                    <label className={styles.label} htmlFor="password">
                        Password:
                    </label>
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
                <div>
                    <label className={styles.label} htmlFor="name">
                        Full Name:
                    </label>
                    <input
                        className={styles.input}
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label className={styles.label} htmlFor="email">
                        Email:
                    </label>
                    <input
                        className={styles.input}
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label className={styles.label} htmlFor="education">
                        Education:
                    </label>
                    <select
                        className={styles.input}
                        id="education"
                        name="education"
                        value={formData.education}
                        onChange={handleInputChange}
                        required>
                        <option value="">Select your Role</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="IT">IT</option>
                        <option value="Finance">Finance</option>
                        <option value="sales and marketing">
                            sales and marketing
                        </option>
                        <option value="Hospitality">Hospitality</option>
                        <option value="construction">construction</option>
                        <option value="Teacher">Teacher</option>
                        <option value="student">student</option>
                        <option value="other">other</option>
                    </select>
                </div>
                <div>
                    <label className={styles.label} htmlFor="skills">
                        Skills:
                    </label>
                    <input
                        className={styles.input}
                        type="text"
                        id="skills"
                        name="skills"
                        value={formData.skills}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                {usernameError && (
                    <p className={styles.message}>{usernameError}</p>
                )}
                <button className={styles.button} type="submit">
                    Signup
                </button>
            </form>
            <p>
                Already have an account?{" "}
                <Link className={styles.link} to="/login">
                    Login
                </Link>
            </p>
        </div>
    );
}

export default Signup;
