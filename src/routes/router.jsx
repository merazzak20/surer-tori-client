import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home/Home";
import AboutPage from "../pages/About/AboutPage";
import StudentPage from "../pages/Student/StudentPage";
import CoursePage from "../pages/Course/CoursePage";
import TheoryPage from "../pages/Theory/TheoryPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Rgister";
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
        path: "/courses",
        element: <CoursePage></CoursePage>,
      },
      {
        path: "/theory",
        element: <TheoryPage></TheoryPage>,
      },
      {
        path: "/student",
        element: <StudentPage></StudentPage>,
      },
      
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
