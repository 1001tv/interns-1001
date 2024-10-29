import React, { useContext, useState } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaGooglePlusG, FaApple } from "react-icons/fa";
import VerifyOtp from "./VerifyOtp";
import { UserContext } from "../Context/UserContext";
import { useRouter } from "next/router";
import { loginUser } from "@/API/mainApi";

const LoginLandingPage = () => {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  if (user) {
    router.push("/");
  }

  const [username, setUsername] = useState(""); // Changed phoneNumber to username
  const [password, setPassword] = useState(""); // State for password
  const [showOtp, setShowOtp] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userData = await loginUser(username, password); // Use username and password for login
      setUser(userData);
      router.push("/");
    } catch (error) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <>
      {showOtp && <VerifyOtp />}
      <div className={`${showOtp ? "hidden" : ""}`}>
        <h2 className="font-inter text-white text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
          Login
        </h2>

        <p className="text-white font-inter font-normal text-base sm:text-lg mb-4 text-center">
          Enter your username and password to login
        </p>
        <form onSubmit={handleLogin}>
          <div className="flex items-center border border-white rounded-lg overflow-hidden mb-6">
            <input
              type="text"
              className="bg-transparent flex-1 p-2 text-white focus:outline-none"
              placeholder="Username" // Updated placeholder
              value={username} // Bind to username state
              onChange={(e) => setUsername(e.target.value)} // Update username state
            />
          </div>

          <div className="flex items-center border border-white rounded-lg overflow-hidden mb-6">
            <input
              type="password" // Password input
              className="bg-transparent flex-1 p-2 text-white focus:outline-none"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={username.length === 0 || password.length === 0} // Disable if username or password is empty
            className="bg-transparent disabled:hover:bg-transparent disabled:hover:translate-y-0 disabled:text-gray-500 hover:bg-primary text-white text-lg sm:text-xl w-full p-3 rounded-md font-inter font-semibold border border-Green transition-all transform hover:-translate-y-1 hover:shadow-2xl"
          >
            Continue
          </button>
        </form>
        <p className="text-white font-inter tracking-tighter font-normal mb-6 mt-12 sm:mt-16 text-center">
          Or login using
        </p>

        <div className="flex flex-wrap gap-1 justify-around mt-4">
          <button className="bg-gradient-to-br from-gray-700 to-gray-900 w-16 sm:w-20 h-14 sm:h-16 p-3 flex items-center justify-center rounded-md transition hover:border hover:border-white">
            <FaFacebookF className="text-white text-xl sm:text-2xl" />
          </button>
          <button className="bg-gradient-to-br from-gray-700 to-gray-900 w-16 sm:w-20 h-14 sm:h-16 p-3 flex items-center justify-center rounded-md transition hover:border hover:border-white">
            <FaGooglePlusG className="text-white text-2xl sm:text-3xl" />
          </button>
          <button className="bg-gradient-to-br from-gray-700 to-gray-900 w-16 sm:w-20 h-14 sm:h-16 p-3 flex items-center justify-center rounded-md transition hover:border hover:border-white">
            <FaApple className="text-white text-xl sm:text-2xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginLandingPage;
