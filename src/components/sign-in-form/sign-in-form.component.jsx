import { useState } from "react";

import { FormInput } from "../form-input/form-input.component";
import { Button } from "../button/button.component";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handlechange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-in-container">
      <h2>Sign In Form</h2>
      <p>Sign in with email and password</p>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <FormInput
          label="Email"
          value={email}
          onChange={handlechange}
          type="email"
          required
          name="email"
        />

        <FormInput
          label="Password"
          value={password}
          onChange={handlechange}
          type="password"
          required
          name="password"
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType={"google"} type="submit">
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};
