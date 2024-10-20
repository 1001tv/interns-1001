import Image from "next/image"
import Link from "next/link"
import React, { useContext } from "react"
import { UserContext } from "../Context/UserContext"

const SingleMediaDetails = ({ media }) => {
  const { user, setUser } = useContext(UserContext)

  return (
    <main>
      <section className="relative pt-0 md:pt-10">
        <div
          className="hidden md:block  h-[85vh] bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${media.bannerImage})` }}
        ></div>
        <div
          className="visible md:hidden  h-[70vh] bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${media.landscapeImage})` }}
        ></div>
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black to-transparent"></div>
        <div className="content absolute bottom-10 z-40 px-4 md:px-8">
          <div className="HeroSlider-info">
            <div className="inner_wrap">
              <div className="flex flex-col">
                <h2 className="flex items-center gap-x-4 text-white text-5xl py-2 font-ar-300 ">
                  {media.name}
                  {media.required_package > 0 &&
                    (user ? user.required_package == 0 : true) && (
                      <span className="flex items-center gap-x-4">
                        |
                        <Image
                          src="/Premium.svg"
                          width={30}
                          height={30}
                          alt="Premium"
                        />
                      </span>
                    )}
                </h2>
              </div>
              <div className="flex gap-2  text-2xl my-1">
                <span className="year text-[#a9a4a0]">{media.year}</span>
                <span className="text-primary">|</span>
                <span className="category flex gap-2">
                  {media.genres.map((genre) => (
                    <span className="text-[#a9a4a0]" key={genre}>
                      {genre}
                    </span>
                  ))}
                </span>
              </div>
              <div className="my-3 w-9/12">
                <p className="text-white">{media.long_description}</p>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div>
                  <Link
                    href={
                      media.required_package > 0 &&
                      (user ? user.required_package == 0 : true)
                        ? "/subscription"
                        : "/"
                    }
                  >
                    <button
                      type="button"
                      className="p-3 flex items-center justify-center rounded-2xl text-base font-semibold bg-primary hover:bg-primary/90"
                    >
                      <div className="flex gap-1">
                        {media.required_package > 0 &&
                        (user ? user.required_package == 0 : true)
                          ? "Subscribe Now"
                          : "Watch Now"}
                      </div>
                    </button>
                  </Link>
                </div>
                <div class="text-sm">
                  <button class="flex items-center btn p-4 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out border border-white">
                    <span class="icon relative mr-2">
                      <Image
                        alt="add to favorites"
                        src="/plus.png"
                        width={15}
                        height={15}
                        className="object-cover"
                      />
                    </span>
                    <span>Add to Watchlist</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SingleMediaDetails
