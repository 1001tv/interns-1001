import Navbar from "@/components/Navbar/Navbar"
import "./globals.css"
import Footer from "@/components/Footer/Footer"
import { UserProvider } from "@/components/Context/UserContext"
import { useDetectVPNAndAdBlocker } from "@/hooks/useDetectVPNAndAdBlocker"

export default function MyApp({ Component, pageProps }) {
  useDetectVPNAndAdBlocker()
  return (
    <>
      <UserProvider>
        <Navbar />
        <div className="bg-image bg-cover bg-center">
          <Component {...pageProps} />
        </div>
        <Footer />
      </UserProvider>
    </>
  )
}
