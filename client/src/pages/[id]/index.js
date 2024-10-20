import { getMediaContent } from "@/API/mainApi"
import SingleMediaDetails from "@/components/SingleMediaDetails/SingleMediaDetails"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

export const getServerSideProps = async (context) => {
  try {
    const mediaContent = await getMediaContent()

    // Translate function using Google Translate API
    const translateText = async (text, targetLang = "en") => {
      const response = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=auto&tl=${targetLang}&q=${encodeURIComponent(text)}`,
      )
      const data = await response.json()
      return data[0][0][0]
    }

    const translatedMediaContent = await Promise.all(
      mediaContent.map(async (media) => {
        const translatedName = await translateText(media.name)
        const translatedGenres = await Promise.all(
          media.genres.map(async (genre) => await translateText(genre)),
        )
        const translatedDescription = await translateText(
          media.long_description,
        )

        return {
          ...media,
          name: translatedName,
          genres: translatedGenres,
          long_description: translatedDescription,
        }
      }),
    )

    return {
      props: {
        mediaContent: translatedMediaContent,
      },
    }
  } catch (error) {
    console.error("Error fetching media content:", error)
    return {
      props: {
        mediaContent: [],
      },
    }
  }
}

const Index = ({ mediaContent }) => {
  const router = useRouter()
  const { local } = router
  const { id } = router.query

  const uniqueMedia = mediaContent.filter((item) => item.id == id)
  const media = uniqueMedia[0]

  if (!media) {
    return (
      <main>
        <section className="relative">
          <div className="content absolute z-40">
            <h2>Media not found</h2>
          </div>
        </section>
      </main>
    )
  }

  return <SingleMediaDetails media={media} />
}

export default Index
