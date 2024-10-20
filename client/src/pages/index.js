import HomePage from "@/components/HomePage/HomePage"
import { getMediaContent } from "@/API/mainApi"

export async function getStaticProps() {
  const mediaContent = await getMediaContent()

  return {
    props: {
      mediaContent,
    },
    revalidate: 3600,
  }
}

export default function Home({ mediaContent }) {
  return <HomePage mediaContent={mediaContent} />
}
