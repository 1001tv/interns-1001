import React, { useState } from "react"
import { useRouter } from "next/router"
import Button from "../button/Button"

const SubscriptionForm = () => {
  const [selectedPlan, setSelectedPlan] = useState("")
  const router = useRouter()

  const handleContinue = (event) => {
    event.preventDefault()

    if (selectedPlan === "monthly") {
      router.push("/subscription/monthly")
    } else if (selectedPlan === "yearly") {
      router.push("/subscription/yearly")
    } else if (selectedPlan === "voucher") {
      router.push("/subscription/voucher")
    }
  }

  return (
    <form onSubmit={handleContinue} className="w-full">
      <fieldset className="subscription-options">
        {/* Monthly Plan */}
        <div
          className={`flex items-center justify-between h-20 py-5 px-4 mb-4 rounded-xl cursor-pointer border ${
            selectedPlan === "monthly"
              ? "border-2 border-Green bg-NavyN900"
              : "border-NavyN600 bg-NavyN800"
          }`}
          onClick={() => setSelectedPlan("monthly")}
        >
          <div>
            <p className="text-white text-sm font-semibold text-left mb-1">
              Monthly
            </p>
            <p className="text-white">
              $7.99<span className="text-NavyN80 font-thin">/Month</span>
              <span className="text-NavyN500 text-sm"> • (7.99/Mo)</span>
            </p>
          </div>
          <label>
            <input
              type="radio"
              id="monthly"
              name="subscription"
              value="monthly"
              className="form-radio text-Green"
              checked={selectedPlan === "monthly"}
              onChange={() => setSelectedPlan("monthly")}
            />
          </label>
        </div>

        {/* Yearly Plan */}
        <div
          className={`flex items-center justify-between h-20 py-5 px-4 mb-4 rounded-xl cursor-pointer border ${
            selectedPlan === "yearly"
              ? "border-2 border-Green bg-NavyN900"
              : "border-NavyN600 bg-NavyN800"
          }`}
          onClick={() => setSelectedPlan("yearly")}
        >
          <div>
            <p className="text-white text-sm font-semibold text-left items-center mb-1">
              Yearly
              <span className="bg-Green text-NavyN900 text-xs font-bold mx-2 py-1 px-2 rounded-lg">
                Best Value!
              </span>
              <span className="text-Green tracking-wide font-semibold">
                Save 20%
              </span>
            </p>
            <p className="text-white">
              $79.99<span className="text-NavyN80 font-thin">/Year</span>
              <span className="text-NavyN500 text-sm"> • (7.99/Mo)</span>
            </p>
          </div>
          <label>
            <input
              type="radio"
              id="yearly"
              name="subscription"
              value="yearly"
              className="form-radio text-Green"
              checked={selectedPlan === "yearly"}
              onChange={() => setSelectedPlan("yearly")}
            />
          </label>
        </div>

        {/* Use Voucher */}
        <div
          className={`flex items-center justify-between h-20 py-5 px-4 mb-4 rounded-xl cursor-pointer border ${
            selectedPlan === "voucher"
              ? "border-2 border-Green bg-NavyN900"
              : "border-NavyN600 bg-NavyN800"
          }`}
          onClick={() => setSelectedPlan("voucher")}
        >
          <p className="text-white text-lg font-semibold text-left">
            Use Voucher
          </p>
          <label>
            <input
              type="radio"
              id="voucher"
              name="subscription"
              value="voucher"
              className="form-radio text-Green"
              checked={selectedPlan === "voucher"}
              onChange={() => setSelectedPlan("voucher")}
            />
          </label>
        </div>
      </fieldset>

      {/* Continue Button */}
      <Button title="Continue" />
    </form>
  )
}

export default SubscriptionForm
