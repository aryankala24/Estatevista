import React from "react";
import { auth, provider, providerGitHub } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google user signed in:", result.user);
      navigate("/");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      alert("Google sign-in failed: " + error.message);
    }
  };

  const handleGitHubSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, providerGitHub);
      console.log("GitHub user signed in:", result.user);
      navigate("/");
    } catch (error) {
      console.error("GitHub Sign-In Error:", error);
      alert("GitHub sign-in failed: " + error.message);
    }
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://i.pinimg.com/originals/b9/e6/f1/b9e6f1cffd568d4cd806e2e8ea14d0e2.gif")',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="backdrop-blur-xl bg-white/10 border border-white/30 shadow-2xl p-10 rounded-xl text-center max-w-md w-full">
          <img
            src="https://icones.pro/wp-content/uploads/2021/02/icone-de-la-maison-bleue.png"
            alt="EstateVista Logo"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold mb-6 text-white">
            Sign in to EstateVista
          </h1>

          {/* Google Sign-In */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full py-3 px-6 mb-4 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 font-semibold rounded-lg flex items-center justify-center gap-2 transition duration-300 shadow-md"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google Logo"
              className="w-6 h-6"
            />
            Sign in with Google
          </button>

          {/* GitHub Sign-In */}
          <button
            onClick={handleGitHubSignIn}
            className="w-full py-3 px-6 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 font-semibold rounded-lg flex items-center justify-center gap-2 transition duration-300 shadow-md"
          >
            <img
              src="https://www.svgrepo.com/show/512317/github-142.svg"
              alt="GitHub Logo"
              className="w-6 h-6"
            />
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
