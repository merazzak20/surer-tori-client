import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home/Home";
import AboutPage from "../pages/About/AboutPage";
import StudentPage from "../pages/Student/StudentPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/student",
        element: <StudentPage></StudentPage>,
      },
    ],
  },
]);

export default router;
