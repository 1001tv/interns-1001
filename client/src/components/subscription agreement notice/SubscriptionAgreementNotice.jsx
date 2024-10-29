import Link from 'next/link'
import React from 'react'

const SubscriptionAgreementNotice = () => {
  return (
    <div className="mx-0 md:mx-3">
        <p className="mt-4 text-sm font-normal leading-6 tracking-wide text-NavyN50 text-start">
          By Subscribing, you accept the following 1001's{" "}
          <Link href="/" className="text-Green">
            Privacy Policy
          </Link>{" "}
          &{" "}
          <Link href="/" className="text-Green">
            Terms of Service.
          </Link>{" "}
          If you need any assistance, please{" "}
          <Link href="/" className="text-Green">
            contact our support team
          </Link>
          .
        </p>
    </div>
  )
}

export default SubscriptionAgreementNotice