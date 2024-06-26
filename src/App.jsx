import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CourseDescription from "./pages/CourseDescription.jsx";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:courseSlug" element={<CourseDescription />} />
      </Routes>
    </BrowserRouter>
  );
}
