import Link from "next/link"
import React from "react"
import Carousel from "../Carousel/Carousel"

const titleMapping = {
  "Web Main slider": "Web Main Slider",
  "أعمال 1001 الأصلية - متوفرة الآن": "1001 Originals - Available Now",
  "الاكثر مشاهدة": "Most Watched",
  أنميشين: "Animation",
  "دراما أجنبية": "Foreign Drama",
  "دراما آسيوية": "Asian Drama",
  "دراما عراقية": "Iraqi Drama",
  "دراما كلاسيكية": "Classic Drama",
  "دراما عربية": "Arab Drama",
  "برامج منوعة": "Diverse Shows",
  برامج: "Shows",
  "برامج كوميدية": "Comedy Shows",
  "مسلسلات غنائية": "Musical Series",
  "مسلسلات الجريمة": "Crime Series",
  وثائقيات: "Documentaries",
  رومانسي: "Romantic",
  "أعمال 1001 الأصلية": "1001 Originals",
  "مسلسلات محدودة": "Watch For Free",
  "اخترنا لك": "Recommended for you",
}

const HomePage = ({ mediaContent }) => {
  // Extract unique section titles, excluding "Web Main slider"
  const sectionTitles = Array.from(
    new Set(
      mediaContent
        .map((item) => item.sectionTitle)
        .filter((title) => title !== "Web Main slider"),
    ),
  )

  return (
    <main>
      {/* Hero section */}
      <section className="home-section-bg h-72 md:h-5/6 px-5 flex flex-row items-center justify-between pt-10 md:pt-24 pb-10">
        <div className="flex flex-col justify-center w-60 md:w-96">
          <h1 className="text-primary text-sm font-inter font-bold mb-4 md:text-4xl">
            1001 Original shows
          </h1>
          <Link href="/1001">
            <button className="bg-primary px-1 md:px-4 py-3 rounded-xl text-sm font-inter font-semibold text-white md:text-2xl">
              Browse all
            </button>
          </Link>
        </div>
        <div className="w-56 md:w-8/12">
          <Carousel
            isHero={true}
            data={mediaContent.filter(
              (i) => i.sectionTitle === "Web Main slider",
            )}
          />
        </div>
      </section>

      {/* Other carousels */}
      <section className="bg-navy-900 pl-5">
        {sectionTitles.map((title) => (
          <div className="py-2" key={title}>
            <Carousel
              title={titleMapping[title] || title}
              data={mediaContent.filter((i) => i.sectionTitle === title)}
            />
          </div>
        ))}
      </section>
    </main>
  )
}

export default HomePage
