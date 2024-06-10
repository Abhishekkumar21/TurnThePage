import React from "react";
import Home from "./home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Course from "./Components/Course";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
