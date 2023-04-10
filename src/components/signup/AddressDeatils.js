import React from "react";
import { Field } from "react-final-form";
import Error from "../ErrorComponent";
const AddressDetails = ({ requiredValidate }) => {
  return (
    <div>
      <div>
        <label>Street</label>
        <Field
          name="street"
          component="input"
          type="text"
          placeholder="Street"
          className="form-control mb-2"
        />
      </div>
      <div>
        <label>Street 2</label>
        <Field
          name="street2"
          component="input"
          type="text"
          placeholder="Street 2"
          className="form-control mb-2"
        />
      </div>
      <div className="d-flex">
        <div>
          <label>City</label>
          <Field
            name="city"
            component="input"
            type="text"
            placeholder="City"
            className="form-control mb-2"
          />
        </div>
        <div className="ml-2">
          <label>State / Province</label>
          <Field
            name="state"
            component="input"
            type="text"
            placeholder="State / Province"
            className="form-control mb-2"
          />
        </div>
      </div>
      <div>
        <label>Country*</label>
        <Field
          name="country"
          component="select"
          placeholder="Country"
          validate={requiredValidate}
          className="form-control mb-2"
        >
          <option>Country</option>
          <option value="india">India</option>
          <option value="other">Other</option>
        </Field>
        <Error name="country" />
      </div>
      <div>
        <label>Zip / Postal code*</label>
        <Field
          name="zipCode"
          component="input"
          type="number"
          placeholder="Zip / Postal code"
          validate={requiredValidate}
          className="form-control mb-2"
        />
        <Error name="zipCode" />
      </div>
    </div>
  );
};

export default AddressDetails;
