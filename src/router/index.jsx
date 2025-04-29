import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Courses, Projects, Auth, Course, Lesson } from "../pages";
import {RootLayout} from "../components/layouts/";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/dashboard" element={<div>Dashboard Page</div>} />
          <Route path="/blogs" element={<div>Blogs Page</div>} />
          <Route path="/resume" element={<div>Resume Builder Page</div>} />
          <Route path="/code" element={<div>Code Page</div>} />
          <Route path="/course/:id" element={<Course />} />
          <Route path="/course/:id/lesson" element={<Lesson />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;