import React, { useState } from "react";
import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import aisPortal from "../../assets/images/ais-portal-logo.png";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", JSON.stringify(formData.username));
    localStorage.setItem("password", JSON.stringify(formData.password));
    navigate("/");
  };

  return (
    <div className={style.container}>
      <div className={style["form-container"]}>
        <div className={style.leftside}>
          <img src={aisPortal} alt="logo" className={style.logo} />
          <h4>DHMI AIS PORTAL</h4>
        </div>
        <form onSubmit={handleSubmit} className={style.form}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className={style.loginButton}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
