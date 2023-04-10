import { Field } from "react-final-form";

const Error = ({ name }) => {
  return (
    <>
      <Field
        name={name}
        subscription={{ touched: true, error: true }}
        render={({ meta: { touched, error } }) =>
          touched && error ? (
            <span style={{ color: "red", fontSize: 12 }}>{error}</span>
          ) : null
        }
      />
    </>
  );
};

export default Error;
