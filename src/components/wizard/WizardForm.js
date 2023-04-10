import React, { useState } from "react";
import { Form } from "react-final-form";

const WizardForm = ({ children, onSubmit }) => {
  const [stepNumber, setStepNumber] = useState(0);
  const [formValues, setFormValues] = useState({});
  const formsArray = React.Children.toArray(children);

  const nextButtonHandler = (values) => {
    if (stepNumber !== formsArray.length - 1) {
      setStepNumber(stepNumber + 1);
    }
    setFormValues(values);
  };
  const previousButtonHandler = () => {
    setStepNumber(Math.max(stepNumber - 1, 0));
  };

  const activeForm = formsArray[stepNumber];

  const validate = (values) => {
    return activeForm.props.validate ? activeForm.props.validate(values) : {};
  };

  const handleSubmit = (values) => {
    const isLastPage = stepNumber === React.Children.count(children) - 1;
    if (isLastPage) {
      onSubmit(values);
    } else {
      nextButtonHandler(values);
    }
  };

  return (
    <div>
      <Form
        initialValues={formValues}
        onSubmit={handleSubmit}
        validate={validate}
      >
        {({ handleSubmit, submitting, values }) => (
          <form onSubmit={handleSubmit}>
            {activeForm}
            <div className="buttons">
              {stepNumber > 0 && (
                <div className="btn-block mt-2">
                  <button
                    className="btn btn-block btn-text btn-light"
                    onClick={() => previousButtonHandler()}
                    type="button"
                  >
                    Back
                  </button>
                </div>
              )}

              <button
                className="btn btn-block btn-dark btn-text ml-2"
                type="submit"
                disabled={submitting}
              >
                Next
              </button>
            </div>
          </form>
        )}
      </Form>
    </div>
  );
};

export default WizardForm;
