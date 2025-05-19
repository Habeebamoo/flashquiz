import { 
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dasboard";
import DashboardPage from "./components/dashboard/Page";
import NewQuiz from "./components/dashboard/NewQuiz";
import Quiz from "./components/dashboard/QuizSection";
import ResultSection from "./components/dashboard/ResultSection";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<DashboardPage />} />
          <Route path="result" element={<ResultSection />} />
        </Route>
        <Route path="/new" element={<NewQuiz />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
      </>
    )
  )

  return <RouterProvider router={router} />
}