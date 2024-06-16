// import React from "react";
// import { useState, useEffect } from "react";
// import Home from "./home/Home";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Course from "./Components/Course";
// import { ThemeProvider } from "./contexts/theme";

// function App() {
//   const [themeMode, setThemeMode] = useState("light");

//   function darkTheme() {
//     setThemeMode("dark");
//   }

//   function lightTheme() {
//     setThemeMode("light");
//   }

//   useEffect(() => {
//     document.querySelector("html").classList.remove("dark", "light");
//     document.querySelector("html").classList.add(themeMode);
//   }, [themeMode]);
//   return (
//     <>
//       <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/course" element={<Course />} />
//           </Routes>
//         </BrowserRouter>
//       </ThemeProvider>
//     </>
//   );
// }

// export default App;

//with the above code, the selected theme will not persist across the page trnasitions
//Added localStorage logic to make the theme persistance across the page transitions

import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Course from "./Components/Course";
import { ThemeProvider } from "./contexts/theme";
import Signup from "./Components/Signup";

function App() {
  // Retrieve theme mode from localStorage, default to 'light' if not set
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("themeMode") || "light"
  );

  function darkTheme() {
    setThemeMode("dark");
    // Store selected theme mode in localStorage
    localStorage.setItem("themeMode", "dark");
  }

  function lightTheme() {
    setThemeMode("light");
    // Store selected theme mode in localStorage
    localStorage.setItem("themeMode", "light");
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
