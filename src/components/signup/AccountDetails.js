import React from "react";
import { Field } from "react-final-form";
import Error from "../ErrorComponent";

const AccountDetails = ({ requiredValidate }) => {
  return (
    <div>
      <div className="form-group">
        <label>Email address*</label>
        <Field
          name="email"
          component="input"
          type="email"
          placeholder="Email address"
          validate={requiredValidate}
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
          validate={requiredValidate}
          className="form-control mb-2"
        />
        <Error name="password" />
      </div>
      <div>
        <label>Confirm Password*</label>
        <Field
          name="confirmPassword"
          component="input"
          type="password"
          placeholder="Confirm Password"
          validate={requiredValidate}
          className="form-control mb-2"
        />
        <Error name="confirmPassword" />
      </div>
    </div>
  );
};

export default AccountDetails;
