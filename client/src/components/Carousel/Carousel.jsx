import { useRef, useState } from "react"
import MovieCard from "../MovieCard/MovieCard"
import { RiArrowRightWideLine, RiArrowLeftWideLine } from "react-icons/ri"

const Carousel = ({ title, data, isHero, isFree }) => {
  const carouselRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeftStart, setScrollLeftStart] = useState(0)
  const [scrollInterval, setScrollInterval] = useState(null)
  const [carouselButtons, setCarouselButtons] = useState("opacity-0")

  const scrollAmount = 250
  const intervalTime = 700

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
  }

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
  }

  const startScrollingLeft = () => {
    setScrollInterval(
      setInterval(() => {
        scrollLeft()
      }, intervalTime),
    )
  }

  const startScrollingRight = () => {
    setScrollInterval(
      setInterval(() => {
        scrollRight()
      }, intervalTime),
    )
  }

  const stopScrolling = () => {
    clearInterval(scrollInterval)
    setScrollInterval(null)
  }

  const setCarouselButtonVisible = () => {
    setCarouselButtons("opacity-100")
  }

  const setCarouselButtonHidden = () => {
    setCarouselButtons("opacity-0")
  }

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - carouselRef.current.offsetLeft)
    setScrollLeftStart(carouselRef.current.scrollLeft)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - carouselRef.current.offsetLeft
    const walk = x - startX
    carouselRef.current.scrollLeft = scrollLeftStart - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  return (
    <div
      onMouseEnter={setCarouselButtonVisible}
      onMouseLeave={setCarouselButtonHidden}
      className="flex flex-col relative pt-8"
    >
      {!isHero && (
        <div className="flex justify-between items-center mx-4">
          <h1 className="text-white mb-4 text-lg font-inter font-semibold w-fit md:text-2xl">
            {title}
          </h1>
        </div>
      )}

      <div className="relative flex items-center w-full overflow-hidden scrollbar-hide">
        <button
          onMouseEnter={startScrollingLeft}
          onMouseLeave={stopScrolling}
          onClick={scrollLeft}
          className={`absolute left-0 z-10 p-2 text-white transform bg-transparent cursor-pointer top-1/2 -translate-y-1/2 text-5xl transition-opacity duration-300 ease-in-out ${carouselButtons}`}
        >
          <RiArrowLeftWideLine />
        </button>
        <div
          className="flex overflow-x-scroll gap-x-1 scroll-smooth scrollbar-hide"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {data.map((movie, index) => (
            <MovieCard
              key={index}
              movie={movie}
              isFree={isFree}
              className="flex-shrink-0 w-36 m-2 transition-transform transform duration-300 ease-in-out"
            />
          ))}
        </div>
        <button
          onMouseEnter={startScrollingRight}
          onMouseLeave={stopScrolling}
          onClick={scrollRight}
          className={`absolute right-0 z-10 p-2 text-white bg-transparent cursor-pointer top-1/2 -translate-y-1/2 text-5xl transition-opacity duration-300 ease-in-out ${carouselButtons}`}
        >
          <RiArrowRightWideLine />
        </button>
      </div>
    </div>
  )
}

export default Carousel
