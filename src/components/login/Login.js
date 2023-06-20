import { Component, React, useEffect, useState } from "react";
import axios from "axios";
import user from "../../models/User";
import LoginForm from "../login/LoginForm";
import "./login.css";

// Define the Login form component
class Login extends Component {
  render() {
    return (
      <div className="login-cnt">
        <div className="form-holder">
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default Login;
