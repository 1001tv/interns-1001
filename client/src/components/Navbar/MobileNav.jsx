"use client"
import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { FaUser } from "react-icons/fa"

const MobileNav = ({
  items,
  isScrolled,
  router,
  toggleDropdown,
  isDropdownOpen,
  user,
  setUser,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen((prev) => !prev)
  }

  const handleLogout = () => {
    setUser()
  }

  return (
    <>
      <nav
        className={`grid grid-cols-3 w-full sticky z-50 bg-navy-900 px-4 py-2 top-0 left-0 right-0 place-items-center md:hidden ${
          isScrolled ? "bg-navy-900/80" : "bg-navy-900 "
        }`}
      >
        <div className="justify-self-start">
          <button onClick={toggleMenu}>
            <Image
              src="/burger-menu.svg"
              width={30}
              height={20}
              alt="burger-menu"
            />
          </button>
        </div>
        <div>
          <Link href="/">
            <Image src="/LogoGreen.svg" width={60} height={60} alt="Logo" />
          </Link>
        </div>
        <div className="justify-self-end relative">
          {user ? (
            <div
              className="text-primary p-2 rounded-full bg-navy-600 cursor-pointer"
              onClick={toggleUserDropdown}
            >
              <FaUser />
            </div>
          ) : (
            <Link href="/login">
              <div className="bg-primary px-4 py-2 rounded-xl text-navy-800 font-semibold">
                Log in
              </div>
            </Link>
          )}

          {/* User Dropdown */}
          {user && isUserDropdownOpen && (
            <ul className="absolute -right-2 top-10 bg-navy-900 text-white shadow-lg rounded-lg w-28 transition-all duration-300 ease-in-out">
              <li
                className="px-4 py-2 cursor-pointer hover:bg-navy-800 rounded-lg"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-navy-900 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between p-4">
          <button onClick={toggleMenu}>
            <Image
              src="/close-icon.svg"
              width={30}
              height={30}
              alt="close-menu"
            />
          </button>
          <Link href="/">
            <Image src="/LogoGreen.svg" width={60} height={60} alt="Logo" />
          </Link>
        </div>
        <ul className="flex flex-col items-start px-4 text-white font-inter text-lg gap-8 mt-10">
          {items.map((i) => (
            <li key={i.text}>
              <Link
                href={i.link}
                className={`${
                  router.pathname === i.link ? "text-primary" : ""
                }`}
                onClick={toggleMenu}
              >
                {i.text}
              </Link>
            </li>
          ))}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="text-white w-full px-3 py-1 rounded-lg border border-navy-400 flex items-center"
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
              className={`absolute top-full right-0 bg-navy-900 text-white shadow-lg border border-navy-400 rounded-lg w-28 transition-all duration-300 ease-in-out transform ${
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
        </ul>
      </div>
    </>
  )
}

export default MobileNav
