import { useState } from "react";

import { FormInput } from "../form-input/form-input.component";
import { Button } from "../button/button.component";

import "./sign-in-form.styles.scss";
import {
  createUserDocumnetFromAuth,
  signInAuthWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthWithEmailAndPassword(email, password);
      resetFormFields();
      console.log(response);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          console.log("incorrect password for email");
          break;
        case "auth/user-not-found":
          console.log("no user associated with this email");
          break;
        default:
          console.log("user sign in failed", error.message);
      }
    }
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumnetFromAuth(user);
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
          <Button
            buttonType={"google"}
            type="button"
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};
