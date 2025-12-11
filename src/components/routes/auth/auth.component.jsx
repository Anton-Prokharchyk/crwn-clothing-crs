import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  createUserDocumnetFromAuth,
} from "../../../utils/firebase/firebase.utils";
import { SignUpForm } from "../../sign-up-form/sign-up-form.component";
import { SignInForm } from "../../sign-in-form/sign-in-form.component";

import "./auth.styles.scss";

export const Auth = () => {
  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   const userDocRef = await createUserDocumnetFromAuth(user);
  //   console.log("userdocref redirect", userDocRef);
  // };

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
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
