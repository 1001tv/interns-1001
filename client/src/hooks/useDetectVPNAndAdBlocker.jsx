import { useEffect } from "react"
import { useRouter } from "next/router"

export const useDetectVPNAndAdBlocker = () => {
  const router = useRouter()

  useEffect(() => {
    async function checkVPN() {
      try {
        const ipResponse = await fetch("https://api.ipify.org?format=json")
        const ipData = await ipResponse.json()

        const vpnResponse = await fetch(`/api/vpnCheck?ip=${ipData.ip}`)
        const vpnData = await vpnResponse.json()

        if (vpnData[ipData.ip].proxy === "yes") {
          router.push("/vpn-blocker")
        }
      } catch (error) {
        console.error("Error checking VPN:", error)
      }
    }

    checkVPN()
  }, [router])
}
