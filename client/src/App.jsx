import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import CoursePage from "./pages/CoursePage2";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import QuizPage from "./pages/CoursePage1";
import Completion from "./pages/CoursePage";
import AddCourse from "./pages/AddCourse";
import Frame from "./pages/Frame";
import Courses from "./pages/Courses";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/course-page":
        title = "";
        metaDescription = "";
        break;
      case "/search":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/quiz-page":
        title = "";
        metaDescription = "";
        break;
      case "/completion":
        title = "";
        metaDescription = "";
        break;
      case "/add-course":
        title = "";
        metaDescription = "";
        break;
      case "/404":
        title = "";
        metaDescription = "";
        break;
      case "/courses":
        title = "";
        metaDescription = "";
        break;
      case "/register":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      default:
        title = "";
        metaDescription = "";
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course-page" element={<CoursePage />} />
      <Route path="/search" element={<Search />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/quiz-page" element={<QuizPage />} />
      <Route path="/completion" element={<Completion />} />
      <Route path="/add-course" element={<AddCourse />} />
      <Route path="/404" element={<Frame />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;
