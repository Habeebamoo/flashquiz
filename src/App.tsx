import { 
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dasboard";
import DashboardPage from "./components/dashboard/Page";
import NewQuiz from "./components/dashboard/NewQuiz";
import Quiz from "./components/dashboard/QuizSection";
import ResultSection from "./components/dashboard/ResultSection";
import Answers from "./components/dashboard/Answers";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<DashboardPage />} />
          <Route path="result" element={<ResultSection />} />
          <Route path="answers" element={<Answers />} />
        </Route>
        <Route path="/new" element={<NewQuiz />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
      </>
    )
  )

  return <RouterProvider router={router} />
}