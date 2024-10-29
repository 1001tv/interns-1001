export async function getMediaContent() {
  const allShows = []
  for (let page = 1; page <= 20; page++) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/shows?page=${page}`,
    )
    const data = await res.json()

    allShows.push(...data.shows)
  }

  return allShows
}

export async function getUsers() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users`); // Ensure this endpoint is correct
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  const data = await res.json();
  return data.users; // Ensure this matches your backend response structure
}

export async function loginUser(username, password) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
    credentials: 'include',
  });
  
  if (!response.ok) {
    throw new Error('Login failed');
  }
  
  return response.json();
}

export async function logoutUser() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/logout`, {
    method: 'POST',
    credentials: 'include',
  });
  
  if (!response.ok) {
    throw new Error('Logout failed');
  }
  
  return response.json();
