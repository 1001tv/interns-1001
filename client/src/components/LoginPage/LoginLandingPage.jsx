import React, { useContext, useState } from "react"
import { FaFacebookF } from "react-icons/fa6"
import { FaGooglePlusG, FaApple } from "react-icons/fa"
import VerifyOtp from "./VerifyOtp"
import { UserContext } from "../Context/UserContext"
import { useRouter } from "next/router"

const LoginLandingPage = ({ users }) => {
  const { user, setUser } = useContext(UserContext)
  const router = useRouter()

  if (user) {
    router.push("/")
  }

  const [phoneNumber, setPhoneNumber] = useState("")
  const [showOtp, setShowOtp] = useState(false)
  const [loggedUser, setLoggedUser] = useState()

  const checkPhoneNumber = (e) => {
    e.preventDefault()
    let [user] = users.filter((i) => i.phoneNumber == phoneNumber)
    if (user) {
      setShowOtp(true)
      setLoggedUser(user)
    } else {
      setLoggedUser({
        id: Math.ceil(Math.random() * 100),
        phoneNumber: phoneNumber,
        required_package: 0,
      })
      setShowOtp(true)
    }
  }

  return (
    <>
      {showOtp && <VerifyOtp loggedUser={loggedUser} />}
      <div className={`${showOtp ? "hidden" : ""}`}>
        <h2 className="font-inter text-white text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
          Login
        </h2>

        <p className="text-white font-inter font-normal text-base sm:text-lg mb-4 text-center">
          Enter your phone number to receive the secret code
        </p>
        <form>
          <div className="flex items-center border border-white rounded-lg overflow-hidden mb-6">
            <span className="bg-white text-green-500 p-3 font-semibold text-lg">
              +964
            </span>
            <input
              type="text"
              className="bg-transparent flex-1 p-2 text-white focus:outline-none"
              placeholder=""
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <button
            onClick={checkPhoneNumber}
            disabled={phoneNumber.length < 10}
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
  )
}

export default LoginLandingPage
