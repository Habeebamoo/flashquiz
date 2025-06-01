import Header from "../components/dashboard/DashHeader"
import { Outlet } from "react-router-dom"
import { useUser } from "../context/UserContext"
import Loading from "../components/Loading"

const Dashboard = () => {
  const { loading } = useUser()

  if (loading) return <Loading />

  return (
    <main className="p-2 bg-accentXlight dark:bg-[#111]">
      <Header />
      <Outlet />
    </main>
  )
}

export default Dashboard