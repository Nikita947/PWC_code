import React, { useState } from "react";
import { Field, Form } from "react-final-form";
import Error from "../ErrorComponent";
const LoginForm = ({ setUserLoggedIn }) => {
  const [formValues, setFormValues] = useState({});

  const isValidUser = (email, password) => {
    console.log(email, password);
    let validUser = false;
    const users = localStorage.getItem("userList");
    if (users) {
      const userData = JSON.parse(users);
      const singleUser = userData.find(
        (user) => user.email === email && user.password === password
      );
      if (singleUser) {
        validUser = singleUser;
      }
    }

    return validUser;
  };
  const handleSubmit = (values) => {
    const userData = isValidUser(values.email, values.password);
    if (userData) {
      localStorage.setItem("loggedInUser", JSON.stringify(userData));
      setUserLoggedIn(true);
    }
  };
  const required = (value) => {
    return value ? undefined : "this field is required.";
  };
  const validate = (values) => {
    const errors = {};
    if (!isValidUser(values.email, values.password)) {
      errors.email = "User does not exists.";
    }
    return errors;
  };
  return (
    <div>
      <div>
        <Form
          initialValues={formValues}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email address*</label>
                <Field
                  name="email"
                  component="input"
                  type="email"
                  placeholder="Email address"
                  validate={required}
                  className="form-control mb-2"
                />
                <Error name="email" />
              </div>
              <div>
                <label>Password*</label>
                <Field
                  name="password"
                  component="input"
                  type="password"
                  placeholder="Password"
                  validate={required}
                  className="form-control mb-2"
                />
              </div>
              <button
                className="btn btn-block btn-dark btn-text ml-2"
                type="submit"
                disabled={submitting}
              >
                Login
              </button>
            </form>
          )}
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
