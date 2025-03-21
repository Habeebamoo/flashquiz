import { 
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import QuizForm from "./pages/QuizForm";
import QuizPage from "./pages/QuizPage";
import EndPage from "./pages/EndPage";
import AllAnswersPage from "./pages/AllAnswersPage";
import Error from "./components/Error";
import NotFound from "./pages/NotFound";

export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz-form" element={<QuizForm />} />
        <Route path="/quiz-page" element={<QuizPage />} errorElement={<Error />} />
        <Route path="/end-page" element={<EndPage />} errorElement={<Error />} />
        <Route path="/all-answers-page" element={<AllAnswersPage />} />
        <Route path="*" element={<NotFound />} />
      </>
    )
  )

  return <RouterProvider router={router} />
}