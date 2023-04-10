import React, { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import LoginForm from "./components/login/LoginForm";
import SignupForm from "./components/signup/SignupForm";

function App() {
  const [alreadyHaveAccount, setAlreadyHaveAccount] = useState(false);
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    setUserLoggedIn(user ? true : false);
  }, []);
  return (
    <div className="main-div">
      <div>
        {!isUserLoggedIn ? (
          <div className="forms">
            <center>
              <h2>KINETIC BLU</h2>
              <h4 className="heading">
                {alreadyHaveAccount ? "Login" : "SignUP"} & Start Your Free
                Trial
              </h4>
            </center>
            <>
              {!alreadyHaveAccount ? (
                <>
                  <SignupForm setAlreadyHaveAccount={setAlreadyHaveAccount} />
                  <center style={{ marginTop: 12 }}>
                    <p>
                      Already have an account?{" "}
                      <span
                        className="login-link"
                        onClick={() => setAlreadyHaveAccount(true)}
                      >
                        Login
                      </span>
                    </p>
                  </center>
                </>
              ) : (
                <>
                  <LoginForm setUserLoggedIn={setUserLoggedIn} />
                  <center style={{ marginTop: 12 }}>
                    <p>
                      Create New Account.{" "}
                      <span
                        className="login-link"
                        onClick={() => setAlreadyHaveAccount(false)}
                      >
                        Sign up
                      </span>
                    </p>
                  </center>
                </>
              )}
            </>
          </div>
        ) : (
          <Dashboard
            setAlreadyHaveAccount={setAlreadyHaveAccount}
            setUserLoggedIn={setUserLoggedIn}
          />
        )}
      </div>
    </div>
  );
}

export default App;
