"use client"
import { insertHyphens } from "@/reuseableFunctions/insertHyphens"
import Image from "next/image"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../Context/UserContext"
import LoginModal from "../Modal/LoginModal"
import ContentRedeemVoucher from "./ContentRedeemVoucher"
import SuccessVoucherRedeem from "./SuccessVoucherRedeem"

const RedeemVoucher = () => {
  const voucher = 7073250315107617
  const { user } = useContext(UserContext)
  const [voucherCode, setVoucherCode] = useState("")
  const [button, setButton] = useState(true)
  const [isVoucherRedeemed, setIsVoucherRedeemed] = useState(false)
  const [showError, setShowError] = useState(false)

  const content = {
    title:
      "Redeem your voucher and explore an endless world of entertainment with 1001 TV Premium",
    perks: [
      { text: "Zero Ads, Zero Interruptions." },
      { text: "Get Early Access, Be the First to Watch." },
      { text: "Dive into 1001's Exclusive Premium Content." },
    ],
    links: {
      privacyPolicy: "/privacy-policy",
      termsAndConditions: "/terms-and-conditions",
      support: "/contact",
    },
  }

  const getVoucherCode = (e) => {
    const text = insertHyphens(e.target.value)
    setShowError(false)
    setVoucherCode(text)
    setButton(text.length > 0 ? false : true)
  }

  useEffect(() => {
    if (!user) {
      document.body.style.overflow = "hidden"
      const nav = document.getElementsByTagName("nav")
      for (let i = 0; i < nav.length; i++) {
        nav[i].classList.add("blur-effect")
      }
      document.getElementById("footer").classList.add("blur-effect")
    } else {
      document.body.style.overflow = ""
      const nav = document.getElementsByTagName("nav")
      for (let i = 0; i < nav.length; i++) {
        nav[i].classList.remove("blur-effect") // Change from add to remove
      }
      document.getElementById("footer").classList.remove("blur-effect")
    }

    return () => {
      document.body.style.overflow = ""
      const nav = document.getElementsByTagName("nav")
      for (let i = 0; i < nav.length; i++) {
        nav[i].classList.remove("blur-effect")
      }
      document.getElementById("footer").classList.remove("blur-effect")
    }
  }, [user])

  const redeemVoucher = () => {
    if (voucherCode.replaceAll("-", "") === voucher.toString()) {
      setIsVoucherRedeemed(true)
    } else {
      setIsVoucherRedeemed(false)
      setShowError(true)
    }
  }

  return (
    <>
      {!user && <LoginModal />}
      <main
        className={`py-1 grid grid-cols-1 md:grid-cols-2 md:pt-16 bg-subscription-gradient bg-cover object-cover min-h-screen ${!user ? "blur-sm pointer-events-none" : ""}`}
      >
        <section className="md:order-last relative  mt-10 md:mt-5 z-0 pt-24">
          <Image
            draggable={false}
            src="/Voucher-Presentation.svg"
            alt="Voucher Presentation"
            width={100}
            height={100}
            className="w-10/12 md:w-11/12 ml-20 md:ml-0  md:absolute md:left-15 z-0 "
          />
        </section>
        {isVoucherRedeemed ? (
          <SuccessVoucherRedeem />
        ) : (
          <ContentRedeemVoucher
            setVoucherCode={setVoucherCode}
            showError={showError}
            button={button}
            content={content}
            voucherCode={voucherCode}
            getVoucherCode={getVoucherCode}
            redeemVoucher={redeemVoucher}
          />
        )}
      </main>
    </>
  )
}

export default RedeemVoucher
