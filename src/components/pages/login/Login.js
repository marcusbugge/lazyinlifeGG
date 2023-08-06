import React, { useState } from "react";
import firebase from "../../../firebase"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (event) => {
    event.preventDefault();
    
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Login;
