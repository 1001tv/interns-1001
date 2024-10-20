import React from "react"
import { FaCircleCheck } from "react-icons/fa6"
import SubscriptionForm from "./SubscriptionForm"

const SubscriptionLandingPage = () => {
  return (
    <>
      <div className="pt-28 flex flex-col items-start md:items-center w-full md:w-538px min-h-screen px-6 py-12 mx-auto">
        <div className="mb-4">
          <div className="flex flex-col items-start mb-8">
            <div className="flex flex-col items-center mb-2">
              <img
                src="/assets/crown_LOGO.svg"
                alt="crown logo for premium subscription"
                className="w-5"
              />
              <img
                src="/assets/1001_White_LOGO.svg"
                alt="1001.tv logo"
                className="w-20 h-10"
              />
            </div>
            <div>
              <h2 className="font-medium text-white text-2xl md:text-3xl">
                Explore Endless Entertainment with 1001 TV Premium!
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-start tracking-wide justify-center leading-10 text-sm md:text-lg text-white">
            <p className="flex items-center gap-2 md:leading-10">
              <FaCircleCheck className="text-Green" /> Zero Ads, Zero
              Interruptions.
            </p>
            <p className="flex items-center gap-2 md:leading-10">
              <FaCircleCheck className="text-Green" /> Get Early Access, Be the
              First to Watch.
            </p>
            <p className="flex items-center gap-2 md:leading-10">
              <FaCircleCheck className="text-Green" />
              Dive into 1001's Exclusive Premium Content.
            </p>
          </div>
        </div>
        <SubscriptionForm />
      </div>
    </>
  )
}

export default SubscriptionLandingPage
