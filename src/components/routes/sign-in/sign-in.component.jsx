import {
  signInWithGooglePopup,
  crateUserDocumnetFromAuth,
} from "../../../utils/firebase/firebase.utils";

export const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await crateUserDocumnetFromAuth(response.user);
    console.log("res", response);
  };
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign In</button>
    </div>
  );
};
