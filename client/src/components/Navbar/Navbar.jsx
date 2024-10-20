"use client"
import React, { useState, useEffect, useContext } from "react"
import { useRouter } from "next/router"
import MobileNav from "./MobileNav"
import DesktopNav from "./DesktopNav"
import { UserContext } from "../Context/UserContext"

const Navbar = () => {
  const { user, setUser } = useContext(UserContext)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const router = useRouter()

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const items = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Series",
      link: "/series",
    },
    {
      text: "TV Shows",
      link: "/tv-shows",
    },
    {
      text: "Sports",
      link: "/sports",
    },
    {
      text: "My Watchlist",
      link: "/watching-list",
    },
  ]

  return (
    <>
      <MobileNav
        setUser={setUser}
        user={user}
        items={items}
        isDropdownOpen={isDropdownOpen}
        toggleDropdown={toggleDropdown}
        isScrolled={isScrolled}
        router={router}
      />
      <DesktopNav
        setUser={setUser}
        user={user}
        items={items}
        isDropdownOpen={isDropdownOpen}
        toggleDropdown={toggleDropdown}
        isScrolled={isScrolled}
        router={router}
      />
    </>
  )
}

export default Navbar
