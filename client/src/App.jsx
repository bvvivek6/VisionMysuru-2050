import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SiteLayout from "./components/SiteLayout.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import SubmitIdeasPage from "./Pages/SubmitIdeasPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "submit", element: <SubmitIdeasPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
