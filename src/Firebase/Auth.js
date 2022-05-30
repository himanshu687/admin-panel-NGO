import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { exchangeTokenController } from "../Api/Exchange/controller";
import firebaseApp from "./Firebase";

export const configureRecaptcha = () => {
  const auth = getAuth(firebaseApp);
  window.recaptchaVerifier = new RecaptchaVerifier(
    "sign-in-button",
    {
      size: "invisible",
    },
    auth
  );
};

export const onSignInSubmit = (contact) => {
  localStorage.setItem("contact", contact);
  const phoneNumber = "+91" + contact;
  const appVerifier = window.recaptchaVerifier;
  const auth = getAuth(firebaseApp);
  signInWithPhoneNumber(auth, phoneNumber, appVerifier).then(
    (confirmationResult) => {
      window.confirmationResult = confirmationResult;
    }
  );
};

export const otpVerification = (userOtp, navigate) => {
  window.confirmationResult
    .confirm(userOtp)
    ?.then((result) => {
      const firebaseToken = result?.user?.accessToken;

      document.cookie = `firebaseToken=${firebaseToken};domain=localhost;secure`;
      document.cookie = `firebaseToken=${firebaseToken};domain=devapp.ngobuddy.com;secure`;
      document.cookie = `firebaseToken=${firebaseToken};domain=app.ngobuddy.com;secure`;
    })
    .then(() => {
      exchangeTokenController().then(() => {
        navigate("/ngo-list");
        // setFlag(true);
      });
    });
};
