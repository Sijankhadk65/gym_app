import React from "react";
import { useHistory } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";

const SignIn = () => {
  const firebase = useFirebase();
  const history = useHistory();

  const signInWithEmailandPassword = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword("sijan.khadka08@gmail.com", "Sunshine60")
      .then(() => {
        history.push("/dashboard");
      });
  };
  return (
    <div>
      <button onClick={signInWithEmailandPassword}></button>
    </div>
  );
};

export default SignIn;
