import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/router"

const VpnAdBlocker = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleHomeClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      router.push("/")
    }, 5000)
  }

  return (
    <main className="bg-main backdrop-blur-xl object-cover h-screen flex justify-center items-center relative">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <Image
        src="/BlurredBrokenTv.svg"
        height={100}
        width={100}
        className="w-11/12 absolute z-0 blur-[2px] md:w-5/12"
        alt="BlurredBrokenTv"
      />

      <div className="flex justify-center items-center z-20 flex-col mx-10 md:mb-10">
        <h1 className="text-primary font-bold text-2xl inter-600 md:text-3xl">
          Oops! Something’s wrong
        </h1>
        <p className="text-center mt-4 text-white font-semibold inter-600 md:w-5/12">
          Heads Up! For the best streaming experience, please disable any VPN or
          ad-blocker extensions. This helps ensure all content display
          correctly. Thanks for your understanding!
        </p>
        <div className="my-4 flex gap-x-2">
          <button
            onClick={handleHomeClick}
            className="bg-primary px-6 py-2 rounded-xl font-light text-navy-800 inter-600"
            disabled={loading}
          >
            {loading ? (
              <div className="animate-spin inline-block w-4 h-4 border-2 rounded-full border-t-navy-800 border-r-transparent border-b-navy-800 border-l-transparent"></div>
            ) : (
              "Home"
            )}
          </button>
        </div>
      </div>
    </main>
  )
}

export default VpnAdBlocker
