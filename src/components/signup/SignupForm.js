import React from "react";
import WizardForm from "../wizard/WizardForm";
import AccountDetails from "./AccountDetails";
import AddressDetails from "./AddressDeatils";
import BasicDetails from "./BasicDeatils";
import SelectUserRole from "./SelectUserRole";

const SignupForm = ({ setAlreadyHaveAccount }) => {
  const required = (value) => {
    return value ? undefined : "This field is required";
  };
  const accountDetailsValidate = (values) => {
    const errors = {};
    const users = localStorage.getItem("userList");
    if (users) {
      const usersData = JSON.parse(users);
      const isEmailExists = usersData.find(
        (user) => user.email === values.email
      );
      if (isEmailExists) {
        errors.email = "This email is already exists.";
      }
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "password should be match.";
    }
    return errors;
  };

  const onSubmit = (values) => {
    let userList = localStorage.getItem("userList");
    if (!userList) {
      userList = [];
    }
    userList.push(values);
    localStorage.setItem("userList", JSON.stringify(userList));
    setAlreadyHaveAccount(true);
  };

  return (
    <div>
      <WizardForm onSubmit={onSubmit}>
        <BasicDetails requiredValidate={required} />
        <AccountDetails
          requiredValidate={required}
          validate={accountDetailsValidate}
        />
        <SelectUserRole requiredValidate={required} />
        <AddressDetails requiredValidate={required} />
      </WizardForm>
    </div>
  );
};

export default SignupForm;
