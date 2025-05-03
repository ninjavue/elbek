import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Courses, Projects, Auth, Course, Lesson, Login, Dashboard, Payment, Account } from "../pages";
import {RootLayout} from "../components/layouts/";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/account" element={<Account />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/course/:id" element={<Course />} />
          <Route path="/course/:id/lesson" element={<Lesson />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;