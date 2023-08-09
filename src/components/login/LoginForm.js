import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import { setUser, clearUser } from "../../redux/user/UserActions"; // Adjust the path as needed

function LoginForm() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  let history = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(setUser(currentUser));
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsubscribe(); // Return the unsubscribe function to clean up the listener on unmount
  }, [dispatch]);

  const login = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      const user = userCredential.user;
      dispatch(setUser(user));
      console.log(user); // Check if user data is logged correctly
      history("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    dispatch(clearUser());
  };

  return (
    <div className="loginform">
      <form onSubmit={login}>
        <h1>👋 Hello! </h1>
        <div className="inputs">
          <input
            placeholder="Email..."
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            type="password" // Mask the password
            placeholder="Password..."
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          <button type="submit" className="loginbtn">
            Sign in
          </button>
        </div>
      </form>

      {user?.email ? (
        <div>
          <h4>User Logged In:</h4>
          <h1>Email: {user.email}</h1>
          <h1>UID: {user.uid}</h1>
          {/* Display any other user data you want */}
        </div>
      ) : (
        <p>Not logged in</p>
      )}

      {user?.email && (
        <button onClick={logout} className="loginbtn">
          Sign Out
        </button>
      )}
    </div>
  );
}

export default LoginForm;
