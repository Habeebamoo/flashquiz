import { 
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Navigate
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dasboard";
import DashboardPage from "./components/dashboard/Page";
import NewQuiz from "./components/dashboard/NewQuiz";
import Quiz from "./components/dashboard/QuizSection";
import ResultSection from "./components/dashboard/ResultSection";
import Reviews from "./components/dashboard/Reviews";

export default function App() {
  const token = JSON.parse(localStorage.getItem("flashquiz-web-token")!)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to={"/login"} />}>
          <Route path="" element={<DashboardPage />} />
          <Route path="result" element={<ResultSection />} />
          <Route path="answers" element={<Reviews />} />
        </Route>
        <Route path="/new" element={token ? <NewQuiz /> : <Navigate to={"/login"} />} />
        <Route path="/quiz" element={token ? <Quiz /> : <Navigate to={"/login"} />} />
        <Route path="*" element={<NotFound />} />
      </>
    )
  )

  return <RouterProvider router={router} />
}