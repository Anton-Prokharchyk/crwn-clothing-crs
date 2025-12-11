import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  createUserDocumnetFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../../utils/firebase/firebase.utils";
import { SignUpForm } from "../../sign-up-form/sign-up-form.component";
import { SignInForm } from "../../sign-in-form/sign-in-form.component";

export const SignIn = () => {
  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    const userDocRef = await createUserDocumnetFromAuth(user);
    console.log("userdocref redirect", userDocRef);
  };
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumnetFromAuth(user);
    console.log("userdocref", userDocRef);
  };

  useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumnetFromAuth(response.user);
      }
      console.log("response", response);
    })();
  }, []);

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign In</button>
      <button onClick={logGoogleRedirectUser}>Sign In redirect</button>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
