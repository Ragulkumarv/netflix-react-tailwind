import { useRef, useState } from "react";
import Header from "./Header";
import { formValidation } from "../utils/formValidation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebaseconfig";
import { baseBGImage } from "../utils/constants";

const Login = () => {
  const [isSignIn, setSignIn] = useState(false);
  const [validationErrorMessage, setValidationErrormessage] = useState("");
  const [apiErrorMessage, setApiErrormessage] = useState("");

  const email = useRef("");
  const password = useRef("");

  const handleSignIn = (e) => {
    e.preventDefault();
    setSignIn(!isSignIn);
  };

  const handleFormButton = () => {
    const message = formValidation(
      email.current?.value,
      password.current?.value
    );
    setValidationErrormessage(message);

    if (!isSignIn) {
      //signup code
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          setSignIn(!isSignIn);
        })
        .catch((error) => {
          const errorCode = error?.code;
          const errorMessage = error?.message;

          if (errorCode.includes("already")) {
            setApiErrormessage("Email Already Exist");
            setSignIn(!isSignIn);
          }
          // ..
        });
    } else {
      //signin code
      signInWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed in
          setApiErrormessage("");
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error?.code;
          const errorMessage = error?.message;

          if (errorCode.includes("invalid")) {
            setApiErrormessage("Invalid Credentials");
          }
        });
    }
  };

  return (
    <>
      <Header />
      <div className="relative hidden sm:block">
        <div className="absolute">
          <img src={baseBGImage} alt="logo" />
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-cover bg-center relative z-[2]">
        <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-bold text-white mb-6">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ref={email}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Password
              </label>
              <input
                ref={password}
                type="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <p className="text-red-600 mt-1 text-xs">
                {validationErrorMessage}
                {apiErrorMessage}
              </p>
            </div>

            <div>
              <button
                className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md"
                onClick={() => handleFormButton()}
              >
                {isSignIn ? "Sign In" : "Sign Up"}
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4 hidden">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-gray-300">OR</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <div className="mt-4 hidden">
            <button className="w-full py-2 px-4 bg-gray-700 hover:bg-gray-800 text-white font-bold rounded-md">
              Use a sign-in code
            </button>
          </div>

          <div className="mt-4 text-center">
            <a href="/" className="text-sm text-gray-300 hover:underline">
              Forgot password?
            </a>
          </div>

          <div className="mt-4 text-center">
            <span className="text-sm text-gray-300">
              {!isSignIn ? "Already registered?" : "New to Netflix?"}{" "}
              <a
                href="/"
                className="text-white font-bold hover:underline"
                onClick={(e) => handleSignIn(e)}
              >
                {!isSignIn ? "Sign in now." : "Sign up now."}
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
