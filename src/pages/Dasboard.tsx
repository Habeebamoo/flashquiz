import Header from "../components/dashboard/DashHeader"
import { Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <main className="p-2 bg-accentXlight dark:bg-bodyDark">
      <Header />
      <Outlet />
    </main>
  )
}

export default Dashboard