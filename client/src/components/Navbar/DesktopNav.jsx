import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaUser } from "react-icons/fa"

const DesktopNav = ({
  items,
  isScrolled,
  router,
  toggleDropdown,
  isDropdownOpen,
  user,
  setUser,
}) => {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)

  const toggleUserDropdown = () => {
    setUserDropdownOpen((prev) => !prev)
  }

  const handleLogout = () => {
    setUser()
  }

  return (
    <nav
      className={`hidden md:flex px-4 lg:px-12 py-5 w-full fixed z-50 top-0 transition-colors duration-300 flex-row justify-between items-center ${
        isScrolled ? "bg-navy-900/80" : "bg-navy-900"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-5 items-center mr-2">
          <Link href="/">
            <img src="/LogoGreen.svg" className="w-20 h-auto" />
          </Link>
          <ul className="text-white w-full font-inter sm:text-sm md:text-lg lg:text-2xl flex gap-2 md:gap-4 lg:gap-7 items-center flex-nowrap">
            {items.map((i) => (
              <li key={i.text}>
                <Link
                  href={i.link}
                  className={`${
                    router.pathname === i.link ? "text-primary" : ""
                  }`}
                >
                  {i.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className="flex gap-5 text-white items-center">
            <li className="cursor-pointer">
              <Image
                src="/search-icon.png"
                width={20}
                height={20}
                alt="search-icon"
              />
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="text-white flex items-center"
              >
                English
                <Image
                  src="/down_arrow.png"
                  width={10}
                  height={10}
                  className={`mx-2 transition-transform duration-300 ease-in-out transform ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  alt="down arrow"
                />
              </button>
              <ul
                className={`absolute top-full right-0 mt-4 bg-navy-900 text-white shadow-lg rounded-lg w-24 transition-all duration-300 ease-in-out transform ${
                  isDropdownOpen
                    ? "opacity-100 translate-y-4"
                    : "opacity-0 -translate-y-4 pointer-events-none"
                }`}
              >
                <li className="px-4 py-2 cursor-pointer hover:bg-navy-800 rounded-t-lg border-b border-navy-700">
                  <a href="/ar">العربية</a>
                </li>
                <li className="px-4 py-2 cursor-pointer hover:bg-navy-800 rounded-b-lg">
                  <a href="/en">English</a>
                </li>
              </ul>
            </li>
            <li className="relative">
              {user ? (
                <div
                  className="text-primary p-2 rounded-full bg-navy-600 text-2xl cursor-pointer"
                  onClick={toggleUserDropdown}
                >
                  <FaUser />
                </div>
              ) : (
                <Link href="/login">
                  <button className="bg-primary w-20 h-10 rounded-xl text-navy-800 font-semibold">
                    Log in
                  </button>
                </Link>
              )}

              {user && userDropdownOpen && (
                <ul className="absolute top-full right-0 mt-2 bg-navy-900 text-white shadow-lg rounded-lg w-24 transition-all duration-300 ease-in-out transform opacity-100">
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-navy-800 rounded-lg"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default DesktopNav
