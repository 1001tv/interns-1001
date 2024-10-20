import React, { useState } from "react"
import { FaTimesCircle } from "react-icons/fa"
import { CiCreditCard2 } from "react-icons/ci"
import { useRouter } from "next/router"
import Button from "../button/Button"

const YearlyAndMonthlyPaymentForm = () => {
  const router = useRouter()
  const [cardNumber, setCardNumber] = useState("")
  const [expiration, setExpiration] = useState("")
  const [cvc, setCvc] = useState("")
  const [errors, setErrors] = useState({
    cardNumber: "",
    expiration: "",
    cvc: "",
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

  const validateExpiration = (date) => {
    const [month, year] = date.split("/").map((val) => parseInt(val, 10))
    if (!month || !year || date.length < 5) {
      return "Expiration date is incomplete."
    }
    const currentYear = new Date().getFullYear() % 100
    const currentMonth = new Date().getMonth() + 1
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      return "Expiration year is in the past."
    }
    return ""
  }

  const validateCvc = (code) => {
    if (!/^\d{3}$/.test(code)) {
      return "Security code is incomplete."
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

  const handleExpirationChange = (e) => {
    const value = e.target.value
    setExpiration(value)
    setErrors({ ...errors, expiration: validateExpiration(value) })
  }

  const handleCvcChange = (e) => {
    const value = e.target.value
    if (/^\d{0,3}$/.test(value)) {
      setCvc(value)
      setErrors({ ...errors, cvc: validateCvc(value) })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Assuming all validations pass and payment is processed successfully
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
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 relative">
          <label
            className="block text-white text-sm font-medium mb-2"
            htmlFor="cardNumber"
          >
            Card number
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-2 text-white">
              <CiCreditCard2 />
            </span>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder=""
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
        <div className="flex gap-4 mb-4">
          <div className="w-1/2 relative">
            <label
              className="block text-white text-sm font-medium mb-2"
              htmlFor="expiration"
            >
              Expiration
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                id="expiration"
                name="expiration"
                placeholder="MM / YY"
                value={expiration}
                onChange={handleExpirationChange}
                className={`w-full p-2 pl-3 text-white bg-NavyN600 border ${
                  errors.expiration
                    ? "border-red-500 focus:border-red-500"
                    : "border-NavyN300 focus:border-Green"
                } focus:outline-none focus:bg-NavyN750 rounded-lg`}
              />
              {expiration && (
                <button
                  type="button"
                  onClick={() => setExpiration("")}
                  className="absolute right-2 bg-transparent"
                >
                  <FaTimesCircle className="text-white" />
                </button>
              )}
            </div>
            {errors.expiration && (
              <p className="text-red-500 text-sm mt-1">{errors.expiration}</p>
            )}
          </div>

          <div className="w-1/2 relative">
            <label
              className="block text-white text-sm font-medium mb-2"
              htmlFor="cvc"
            >
              CVC
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                id="cvc"
                name="cvc"
                placeholder="123"
                value={cvc}
                onChange={handleCvcChange}
                className={`w-full p-2 pl-3 text-white bg-NavyN600 border ${
                  errors.cvc
                    ? "border-red-500 focus:border-red-500"
                    : "border-NavyN300 focus:border-Green"
                } focus:outline-none focus:bg-NavyN750 rounded-lg`}
              />
              {cvc && (
                <button
                  type="button"
                  onClick={() => setCvc("")}
                  className="absolute right-2 bg-transparent"
                >
                  <FaTimesCircle className="text-white" />
                </button>
              )}
            </div>
            {errors.cvc && (
              <p className="text-red-500 text-sm mt-1">{errors.cvc}</p>
            )}
          </div>
        </div>

        <Button title="Confirm & Subscribe" />
      </form>
    </div>
  )
}

export default YearlyAndMonthlyPaymentForm
