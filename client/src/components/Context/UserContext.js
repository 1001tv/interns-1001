"use client"
import { useState, useEffect, createContext } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  // Fetch user data from localStorage when the app loads
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user))
    } else {
      localStorage.removeItem("user")
    }
  }, [user])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
