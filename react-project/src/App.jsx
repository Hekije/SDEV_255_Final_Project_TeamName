import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, useNavigate, Link } from "react-router-dom";
import Home from "./pages/Home";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";
import Course from "./pages/Course";
import Edit from "./pages/Edit";

function Header({ name }) {
  return (
    <header>
      <Link to="/">{name}</Link>
      <nav>
        <ul>
          <li>
            <Link to="/student">Student</Link>
          </li>
          <li>
            <Link to="/teacher">Teacher</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function App() {
  return (
    <>
      <Header name="Course Manager" />
      <Routes>
        <Route path="/" element={<Home name="Course Manager" />} />
        <Route path="/student" element={<Student />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/courses/:id" element={<Course />} />
        <Route path="/courses/edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
