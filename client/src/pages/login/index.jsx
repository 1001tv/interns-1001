import { getUsers } from "@/API/mainApi"
import LoginLandingPage from "@/components/LoginPage/LoginLandingPage"

export async function getStaticProps() {
  const users = await getUsers()

  return {
    props: {
      users,
    },
    revalidate: 3600,
  }
}

const Index = ({ users }) => {
  return (
    <div className="flex justify-center bg-login backdrop-blur-lg p-2">
      <div className="bg-black/70 backdrop-blur-lg my-28 px-6 py-8 sm:px-10 md:px-16 rounded-2xl shadow-lg w-full max-w-md border border-gray-500">
        <LoginLandingPage users={users} />
      </div>
    </div>
  )
}

export default Index
