import React, { useContext, useState } from "react"
import { UserContext } from "../Context/UserContext"
import { useRouter } from "next/router"

const VerifyOtp = ({ loggedUser }) => {
  const router = useRouter()
  const { user, setUser } = useContext(UserContext)
  const [otp, setOtp] = useState(Array(6).fill(""))
  const [showError, setShowError] = useState(false)
  const verifiedOTP = 111111

  const handleChange = (e, index) => {
    const value = e.target.value
    setShowError(false)
    if (value === "" || /^[0-9]$/.test(value)) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      if (value !== "" && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus()
      }

      if (value === "" && index > 0) {
        document.getElementById(`otp-${index - 1}`).focus()
      }
    }
  }

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text")
    if (paste.length === otp.length && /^[0-9]+$/.test(paste)) {
      setOtp(paste.split(""))
    }
  }

  const login = () => {
    const otpnum = otp.join("")
    if (otpnum == verifiedOTP) {
      setUser(loggedUser)
      router.push("/")
    } else {
      setShowError(true)
    }
  }

  return (
    <div>
      <h2 className="font-inter text-white text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
        Login
      </h2>

      <p className="text-white font-inter font-normal text-base sm:text-lg mb-4 text-center">
        Please enter the code we sent you through SMS.
      </p>
      <div
        className="flex gap-x-2 justify-center mt-1 mb-2"
        onPaste={handlePaste}
      >
        {otp.map((_, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            maxLength="1"
            placeholder="0"
            className={`h-14 w-14  my-1 text-center text-white text-xl border-2 bg-transparent border-navy-300/40 focus:outline-none focus:border-green-500 transition duration-200 ease-linear ${showError ? "border-red-500" : ""}`}
            value={otp[index]}
            onChange={(e) => handleChange(e, index)}
          />
        ))}
      </div>
      {showError && (
        <p className="text-red-500 text-center font-inter">
          The code is invalid or has expired. Please try again or request a new
          code
        </p>
      )}
      <p class="text-[#737373] text-center">
        <span>Didn't get the code? </span>&nbsp;&nbsp;
        <a className="text-white font-bold cursor-pointer">Resend code</a>
      </p>
      <button
        onClick={login}
        className="my-4 bg-transparent disabled:hover:bg-transparent disabled:hover:translate-y-0 disabled:text-gray-500 hover:bg-primary text-white text-lg sm:text-xl w-full p-3 rounded-md font-inter font-semibold border border-Green transition-all transform hover:-translate-y-1 hover:shadow-2xl"
      >
        Login
      </button>
    </div>
  )
}

export default VerifyOtp
