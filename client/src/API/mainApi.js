export async function getMediaContent() {
  const allShows = []

  for (let page = 1; page <= 20; page++) {
    const res = await fetch(
      `${process.env.NEXT_APP_BACKEND_URL}/api/shows?page=${page}`,
    )
    const data = await res.json()

    allShows.push(...data.shows)
  }

  return allShows
}

export async function getUsers() {
  const res = await fetch(process.env.NEXT_APP_BACKEND_URL)
  const data = await res.json()
  return data.users
}
