import React, { useEffect, useState } from "react";

const Dashboard = ({ setAlreadyHaveAccount, setUserLoggedIn }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const data = localStorage.getItem("loggedInUser");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  const logoutUser = () => {
    const data = localStorage.getItem("loggedInUser");
    if (data) {
      localStorage.removeItem("loggedInUser");
    }
    setAlreadyHaveAccount(true);
    setUserLoggedIn(false);
  };

  return (
    <div style={{ padding: 50 }}>
      <h3>Welcome {user.firstName}</h3>
      <h4>Email: {user.email}</h4>
      <h4>Role: {user.role}</h4>
      <h4>Firm: {user.firm}</h4>
      <h3>Address Details</h3>
      <h4>country: {user.country}</h4>
      <h4>Zip Code: {user.zipCode}</h4>
      <h4>Street: {user.street}</h4>
      <div>
        <button
          onClick={logoutUser}
          className="btn btn-dark btn-block btn-text"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
