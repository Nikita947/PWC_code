import React from "react";
import { Field } from "react-final-form";
import Error from "../ErrorComponent";

const SelectUserRole = ({ requiredValidate }) => {
  return (
    <div>
      <div>
        <label>Role*</label>
        <Field
          name="role"
          component="select"
          placeholder="Role"
          validate={requiredValidate}
          className="form-control mb-2"
        >
          <option>Select Role</option>
          <option value="intern">Intern</option>
          <option value="experienced">Experienced</option>
        </Field>
        <Error name="role" />
      </div>
      <div>
        <label>Select your firm*</label>
        <Field
          name="firm"
          component="select"
          placeholder="Firm"
          validate={requiredValidate}
          className="form-control mb-2"
        >
          <option>Select Your Firm</option>
          <option value="it">IT</option>
          <option value="non-it">Non IT</option>
        </Field>
        <Error name="firm" />
      </div>
    </div>
  );
};

export default SelectUserRole;
