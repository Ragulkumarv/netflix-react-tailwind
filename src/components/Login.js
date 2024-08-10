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

      {/* <div className="max-w-[450px] mb-12 mx-auto relative z-[2]">
        <div className="min-h-[707px] px-16 py-12 rounded-sm bg-[#000000b3] text-left text-white">
          <header className="default-ltr-cache-1ws1lu8 e17twygb2">
            <h1 className="mb-7">Sign In</h1>
          </header>
          <form
            className="flex flex-col gap-4"
            aria-label="Sign In"
            method="post"
          >
            <div className="flex flex-col">
              <div className="inline-flex flex-wrap relative">
                <label
                  htmlFor=":r0:"
                  className="text-xs text-[#ffffffb3] absolute z-[1] whitespace-nowrap text-ellipsis block overflow-hidden"
                >
                  Email or mobile number
                </label>
                <div className="w-full min-h-[6rem] relative inline-flex items-center text-left z-0 gap-[2px]">
                  <input
                    type="text"
                    autoComplete="email"
                    id=":r0:"
                    name="userLoginId"
                    className="input-custom "
                    defaultValue=""
                  />
                  <div aria-hidden="true" className="input-border-custom" />
                </div>
              </div>
            </div>
            <div className="inline-flex flex-wrap relative">
              <div
                data-uia="password-field+container"
                className=" e2so2tu1 default-ltr-cache-4o4q5b ea3diy35"
              >
                <label
                  htmlFor=":r3:"
                  className="text-xs text-[#ffffffb3] absolute z-[1] whitespace-nowrap text-ellipsis block overflow-hidden"
                >
                  Password
                </label>
                <div className="w-full min-h-[6rem] relative inline-flex items-center text-left z-0 gap-[2px]">
                  <input
                    type="password"
                    autoComplete="password"
                    id=":r3:"
                    name="password"
                    className="input-custom "
                  />
                  <div aria-hidden="true" className="input-border-custom" />
                </div>
              </div>
            </div>
            <button
              className="bg-red-600 min-h-10 w-full rounded-md"
              
            >
              Sign In
            </button>
            <p className="text-center">OR</p>
            <button
              className="bg-slate-700 min-h-10 w-full rounded-md"
              type="button"
            >
              Use a sign-in code
            </button>
            <a className="text-center" href="/LoginHelp">
              Forgot password?
            </a>
          </form>
          <footer className="default-ltr-cache-banb1s e17twygb0">
            <div className="default-ltr-cache-1r5gb7q e1olp0t0">
              <div className="flex flex-wrap">
                <div className="default-ltr-cache-fmygl2 ea3diy34">
                  <input
                    type="checkbox"
                    id=":Rairlpp:"
                    name="rememberMe"
                    data-uia="remember-me-field"
                    defaultChecked=""
                  />
                  <div
                    aria-hidden="true"
                    className="default-ltr-cache-emv211 ea3diy33"
                  ></div>
                </div>
                <label htmlFor=":Rairlpp:" className="pl-3">
                  Remember me
                </label>
              </div>
            </div>
            <p className="mt-4">
              New to Netflix?{" "}
              <a className="" target="_self" href="/">
                Sign up now
              </a>
              .
            </p>
            <div className="mt-[11px] relative text-sm">
              <p className="my-4 font-size-inherit">
                <span>
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.
                </span>
                &nbsp;
                <button className="recaptcha-terms-of-use--link-button text-[#0071eb] hover:underline">
                  Learn more.
                </button>
              </p>
              <div className="recaptcha-terms-of-use--disclosure hidden">
                <span id="" data-uia="recaptcha-disclosure-text">
                  The information collected by Google reCAPTCHA is subject to
                  the Google{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    id="recaptcha-privacy-link"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://policies.google.com/terms"
                    id="recaptcha-tos-link"
                  >
                    Terms of Service
                  </a>
                  , and is used for providing, maintaining, and improving the
                  reCAPTCHA service and for general security purposes (it is not
                  used for personalised advertising by Google).
                </span>
              </div>
            </div>
          </footer>
        </div>
      </div> */}
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

          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor="rememberMe"
              className="ml-2 block text-sm text-gray-300"
            >
              Remember me
            </label>
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
