import { 
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import QuizForm from "./pages/QuizForm";
import NotFound from "./pages/NotFound";

export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz-form" element={<QuizForm />} />
        <Route path="*" element={<NotFound />} />
      </>
    )
  )

  return <RouterProvider router={router} />
}