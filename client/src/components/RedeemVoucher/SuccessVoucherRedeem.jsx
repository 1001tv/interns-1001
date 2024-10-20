import React from "react"
import Image from "next/image"
import Link from "next/link"

const SuccessVoucherRedeem = () => {
  return (
    <section className="mx-4 md:mr-10 mt-16 w-10/12 md:mt-0 md:w-8/12 text-white">
      <div id="subscription-title ">
        <div className="flex flex-col items-center w-fit mt-5">
          <Image
            draggable={false}
            src="/Premium.svg"
            alt="Premium image"
            className="w-3.5"
            width={100}
            height={100}
          />
          <Image
            draggable={false}
            src="/Logo.svg"
            alt="1001 Logo"
            className="w-14"
            width={100}
            height={100}
          />
        </div>

        <h1 className="font-inter text-3xl my-10">
          Congratulations! 🎊 <br /> Welcome to 1001 TV Premium 👑{" "}
        </h1>
      </div>
      <div className="my-6">
        <p className="font-inter text-xl">
          Your payment is successful. Enjoy unlimited access to our exclusive,
          ad-free Premium content. Discover a world of top-quality movies and
          series at your fingertips. Happy streaming!
        </p>
      </div>
      <div>
        <div className="w-full">
          <h2 className="font-semibold text-2xl font-ar-500 my-8">
            Start Watching
          </h2>

          <div>
            <Link href="/">
              <button
                type="button"
                className="w-full mt-14 h-[56px] disabled:bg-navy-600 disabled:text-navy-400 p-6 flex items-center justify-center rounded-2xl text-base font-semibold bg-primary hover:bg-primary/90 "
              >
                <div className="flex gap-1">Start Watching</div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccessVoucherRedeem
