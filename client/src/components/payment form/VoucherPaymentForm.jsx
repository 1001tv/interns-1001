import React, { useState } from "react"
import { FaTimesCircle } from "react-icons/fa"
import { CiCreditCard2 } from "react-icons/ci"
import { useRouter } from "next/router"
import Button from "../button/Button"

const VoucherPaymentForm = () => {
  const router = useRouter()
  const [cardNumber, setCardNumber] = useState("")
  const [errors, setErrors] = useState({
    cardNumber: "",
  })

  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\D/g, "") // Remove all non-digit characters
    const formatted = cleaned.match(/.{1,4}/g)?.join(" ") || "" // Group digits in blocks of four
    return formatted
  }

  const validateCardNumber = (number) => {
    const cleaned = number.replace(/\D/g, "")
    if (cleaned.length < 16) {
      return "Card number is incomplete."
    }
    if (!/^\d{16}$/.test(cleaned)) {
      return "Your card number is invalid."
    }
    return ""
  }

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\s+/g, "")
    if (/^\d{0,16}$/.test(value)) {
      setCardNumber(formatCardNumber(value))
      setErrors({ ...errors, cardNumber: validateCardNumber(value) })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const allErrors = Object.values(errors).every((err) => err === "")

    if (allErrors) {
      console.log("Payment submitted")

      // Navigate to the success page
      router.push("/payment-successful/PaymentSuccessful")
    } else {
      console.log("Please fix the errors before proceeding.")
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full px-0 md:px-10">
        <div className="mb-4 relative">
          <label
            className="block text-white text-sm font-medium mb-2"
            htmlFor="cardNumber"
          >
            Redeem your voucher
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-2 text-white">
              <CiCreditCard2 />
            </span>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="xxxx-xxxx-xxxx-xxxx"
              value={cardNumber}
              onChange={handleCardNumberChange}
              className={`w-full pl-8 p-2 text-white bg-NavyN600 border ${
                errors.cardNumber
                  ? "border-red-500 focus:border-red-500"
                  : "border-NavyN300 focus:border-Green"
              } focus:outline-none focus:bg-NavyN750 rounded-lg`}
            />
            {cardNumber && (
              <button
                type="button"
                onClick={() => setCardNumber("")}
                className="absolute right-2 bg-transparent"
              >
                <FaTimesCircle className="text-white" />
              </button>
            )}
          </div>
          {errors.cardNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
          )}
        </div>
        <Button title="Redeem & Subscribe"/>
      </form>
    </>
  )
}

export default VoucherPaymentForm
