import Image from "next/image"
import Link from "next/link"
import { UserContext } from "../Context/UserContext"
import { useContext } from "react"

const MovieCard = ({ movie }) => {
  const { user, setUser } = useContext(UserContext)

  return (
    <div className="relative w-fit">
      <Link href={`/${movie.id}`}>
        <Image
          src={movie.portraitImage}
          width={1000}
          height={1000}
          className="min-w-32 max-w-32 md:min-w-60 md:max-w-60 rounded-md max-h-80"
          alt="movie image"
          draggable={false}
        />
      </Link>
      {movie.required_package > 0 &&
        (user ? user.required_package == 0 : true) && (
          <div className="absolute top-0 left-0 bg-NavyN600 h-6 w-8 rounded-br-lg backdrop-blur-md bg-opacity-60">
            <Image
              src="/Premium.svg"
              width={14}
              height={14}
              className="absolute top-[4px] left-2"
              alt="premium"
              draggable={false}
            />
          </div>
        )}
      {movie.required_package == 0 && (
        <div className="absolute top-0 left-0 bg-NavyN600 h-8 w-12 rounded-br-lg backdrop-blur-md bg-opacity-60">
          <span className="absolute top-[4px] left-2 text-primary font-inter text-sm ">
            Free
          </span>
        </div>
      )}
    </div>
  )
}

export default MovieCard
