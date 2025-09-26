import React, { useState } from "react";
import "./Auth.css";

function Register({ switchPage }) {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    college: "",
    city: "",
    course: "",
    subject: "",
    interests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
    switchPage("login");
  };

  const fields = [
    { label: "Full Name", name: "fullName", required: true },
    { label: "Username", name: "username", required: true },
    { label: "Email ID", name: "email", type: "email", required: true },
    { label: "Password", name: "password", type: "password", required: true },
    { label: "College Name", name: "college", required: true },
    { label: "City", name: "city", required: true },
    { label: "Course", name: "course", required: true },
    { label: "Subject", name: "subject", required: true },
    { label: "Interests (optional)", name: "interests", required: false },
  ];

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div className="input-group" key={field.name}>
              <input
                type={field.type || "text"}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required}
                placeholder=" "
              />
              <label>{field.label}</label>
            </div>
          ))}
          <button type="submit" className="auth-btn">Register</button>
        </form>
        <p>
          Already have an account?{" "}
          <button className="link-btn" onClick={() => switchPage("login")}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;
