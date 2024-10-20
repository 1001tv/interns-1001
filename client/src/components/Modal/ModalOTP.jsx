"use client"
import Link from "next/link"
import React, { useState } from "react"
import { IoCloseSharp } from "react-icons/io5"
import SuccessLoginModal from "./SuccessLoginModal"

const ModalOTP = ({ tel }) => {
  const [showError, setShowError] = useState(false)
  const [showSucessModal, setShowSucessModal] = useState(false)
  const verifiedOTP = 111111
  const [otp, setOtp] = useState(Array(6).fill(""))

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
      setShowSucessModal(true)
    } else {
      setShowError(true)
    }
  }

  return (
    <>
      {showSucessModal && <SuccessLoginModal />}
      <dialog
        className="fixed backdrop-blur-3xl top-0 left-0 bottom-0 right-0 w-[90vw] backdrop:backdrop-blur-[4px] rounded-3xl backdrop:bg-navy-900/70 bg-navy-700 text-white backdrop:w-screen backdrop:h-screen sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl max-h-[80vh] outline-none focus:outline-none sm:w-[438px] m-auto p-6 z-40"
        open={!showSucessModal}
      >
        <div>
          <section className="relative">
            <div className="overflow-hidden transition-transform duration-200 ease-linear">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold">
                  Get Started with Premium Access
                </h2>
                <div>
                  <Link href="/">
                    <IoCloseSharp className="text-2xl" />
                  </Link>
                </div>
              </div>
              <p className="py-4">
                Enter your phone number to sign in or register. Redeem your
                voucher instantly and dive into premium content today!
                {tel.slice(-2)}
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
                    className={`h-14 w-14 rounded-2xl my-1 text-center text-white text-xl border-2 bg-navy-600 border-navy-300/40 focus:outline-none focus:border-green-500 transition duration-200 ease-linear ${showError ? "border-red-500" : ""}`}
                    value={otp[index]}
                    onChange={(e) => handleChange(e, index)}
                  />
                ))}
              </div>
              {showError && (
                <p className="text-red-500 text-center font-inter">
                  The code is invalid or has expired. Please try again or
                  request a new code
                </p>
              )}

              <div className="mb-2">
                <button
                  disabled
                  type="button"
                  className={`w-full disabled:bg-navy-600 disabled:border-navy-600 disabled:text-navy-400 h-[56px] p-6 flex items-center justify-center rounded-2xl text-base font-semibold bg-primary hover:bg-primary/90}`}
                >
                  <div className="flex gap-1">0:53 Resend code</div>
                </button>
              </div>
              <div>
                <button
                  disabled={otp.filter((i) => i === "").length > 0}
                  onClick={login}
                  type="button"
                  className={`w-full disabled:bg-navy-600 disabled:border-navy-600 disabled:text-navy-400 h-[56px] p-6 flex items-center justify-center rounded-2xl text-base font-semibold bg-primary hover:bg-primary/90}`}
                >
                  <div className="flex gap-1">Continue</div>
                </button>
              </div>
              <p className="font-inter text-lg text-navy-30 text-center leading-relaxed my-2 text-primary">
                Change your phone number?
              </p>
            </div>
          </section>
        </div>
      </dialog>
    </>
  )
}

export default ModalOTP
