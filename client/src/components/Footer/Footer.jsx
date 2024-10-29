"use client"
import Link from "next/link"
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <footer id="footer" className="bg-NavyN900 w-full px-6 md:px-12 py-12 text-NavyN70">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          <div className="flex flex-col items-start text-left space-y-6">
            <img
              src="/LogoGreen.svg"
              alt="1001.tv logo"
              className="w-20 h-auto"
            />
            <div>
              <p>+964 (780) 133-3323</p>
              <p>support@1001.tv</p>
            </div>
            <div className="flex space-x-8 mt-4 text-2xl text-Green">
              <a
                href="https://web.facebook.com/1001.stream/?_rdc=1&_rdr"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/1001.stream/?hl=en"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="cursor-pointer" />
              </a>
              <a
                href="https://www.tiktok.com/@1001tvstream"
                aria-label="Tiktok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="cursor-pointer" />
              </a>
              <a
                href="https://www.youtube.com/@1001-TV"
                aria-label="Youtube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="cursor-pointer" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-10 lg:gap-20 text-left">
          <div className="space-y-4 font-inter">
              <h3 className="text-NavyN50 font-medium">Getting Started</h3>
              <ul className="space-y-4 font-light">
                <li>
                  <Link href="en/how-it-works">How it works</Link>
                </li>
                <li>
                  <Link href="en/account">Account</Link>
                </li>
                <li>
                  <Link href="en/redeem-voucher">Redeem Voucher</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4 font-inter">
              <h3 className="text-NavyN50 font-medium">Company</h3>
              <ul className="space-y-4 font-light">
                <li>
                  <Link href="en/about-1001">About 1001</Link>
                </li>
                <li>
                  <Link href="en/career">Career</Link>
                </li>
                <li>
                  <Link href="en/press">Press</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4 font-inter">
              <h3 className="text-NavyN50 font-medium">Support</h3>
              <ul className="space-y-4 font-light">
                <li>
                  <Link href="en/faq">FAQ</Link>
                </li>
                <li>
                  <Link href="en/support-center">Support Center</Link>
                </li>
                <li>
                  <Link href="en/contact-us">Contact us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-8 border-NavyN600" />

        <div className="md:flex md:justify-between items-center text-center font-inter">
          <p>© 2022 - 1001 All rights reserved.</p>
          <ul className="flex justify-center space-x-10">
            <li>
              <Link href="en/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="en/terms-condition">Terms Condition</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer