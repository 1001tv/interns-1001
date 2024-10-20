import YearlyAndMonthlyPaymentForm from "@/components/payment form/YearlyAndMonthlyPaymentForm"
import SubscriptionAgreementNotice from "@/components/subscription agreement notice/SubscriptionAgreementNotice"
import Link from "next/link"
import React from "react"

const index = () => {
  return (
    <div className="pt-24 bg-image bg-cover bg-center">
      <div className="flex flex-col items-start md:items-center w-full md:w-538px min-h-screen px-6 py-12 mx-auto">
        <div className="mx-0 md:mx-9 text-white mb-9">
          <h3 className="font-medium text-lg leading-9 tracking-wide">
            You're a click away from 1001 TV Premium! 👑
          </h3>
          <p className="text-sm">
            You're saving 20% with your annual subscription. Just fill in your
            payment details below to get started.
          </p>

          <div className="flex items-center justify-between h-20 p-4 mt-4 bg-NavyN600 rounded-xl border border-NavyN300 shadow-xl">
            <div className="flex flex-col">
              <p className="text-white text-sm font-semibold">Monthly</p>
              <p className="text-white text-sm font-bold">
                $7.99<span className="text-NavyN80 font-normal">/Month</span>
                <span className="text-NavyN500 text-sm ml-2"> • (7.99/Mo)</span>
              </p>
            </div>
            <Link href="/" className="text-Green text-lg font-semibold">
              Change
            </Link>
          </div>
        </div>
        <YearlyAndMonthlyPaymentForm />
        <SubscriptionAgreementNotice />
      </div>
    </div>
  )
}

export default index
