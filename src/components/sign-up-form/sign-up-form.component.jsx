import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumnetFromAuth,
} from "../../utils/firebase/firebase.utils";
import { FormInput } from "../form-input/form-input.component";
import { Button } from "../button/button.component";

import "./sign-up-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword, errors } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormFields({ ...formFields, errors: [] });
    if (password !== confirmPassword) {
      setFormFields({
        ...formFields,
        errors: [...errors, "passwords do not match"],
      });
      return;
    }

    try {
      const isCreated = await createAuthUserWithEmailAndPassword(
        email,
        password,
      );

      await createUserDocumnetFromAuth(isCreated, { displayName });
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        console.log("Cannot create user, email already in use");
      } else {
        console.log(
          "user creation with pass and email encountered an error",
          err,
        );
      }
    }
  };

  const handlechange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Sign Up Form</h2>
      <p>Sign up with email and password</p>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <FormInput
          label="Display Name"
          value={displayName}
          onChange={handlechange}
          type="text"
          required
          name="displayName"
        />

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

        <FormInput
          label="Confirm Password"
          value={confirmPassword}
          onChange={handlechange}
          type="password"
          required
          name="confirmPassword"
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
