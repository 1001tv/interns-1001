export async function getMediaContent() {
  const res = await fetch(process.env.NEXT_APP_BACKEND_URL)
  const data = await res.json()
  return data.videos
}
