import React from "react";
import { Field } from "react-final-form";
import Error from "../ErrorComponent";
const BasicDetails = ({ requiredValidate }) => {
  return (
    <div>
      <div>
        <label>First Name*</label>
        <Field
          name="firstName"
          component="input"
          type="text"
          placeholder="First Name"
          validate={requiredValidate}
          className="form-control mb-2"
        />
        <Error name="firstName" />
      </div>
      <div>
        <label>Last Name*</label>
        <Field
          name="lastName"
          component="input"
          type="text"
          placeholder="Last Name"
          validate={requiredValidate}
          className="form-control mb-2"
        />
        <Error name="lastName" />
      </div>
    </div>
  );
};

export default BasicDetails;
