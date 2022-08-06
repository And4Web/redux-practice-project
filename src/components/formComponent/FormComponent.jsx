import React from "react";
import { Link } from "react-router-dom";
import "./formcomponent.css";

function FormComponent() {
  return (
    <div className="form-component">
      <div className="user-profile">
        <img
          src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
          alt="user"
        />
        <Link to="/">Change</Link>
      </div>
      <form className="form">
        <label>Username</label>
        <input />
        <label>Email</label>
        <input />
        <label>Password</label>
        <input />
      </form>
    </div>
  );
}

export default FormComponent;
