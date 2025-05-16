import Header from "../components/Header"
import { Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <main className="p-2 bg-accentXlight">
      <Header button={false} />
      <Outlet />
    </main>
  )
}

export default Dashboard