import React, { useEffect, useState } from "react";
import "./App.styles.scss";
import Loader from "./components/Loader/Loader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import ProjectList from "./pages/ProjectList/ProjectList";
import Projects from "./pages/Projects/Projects";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="projects">
                <Route index element={<Projects />} />
                <Route path=":projectId">
                  <Route index element={<ProjectList />} />
                </Route>
              </Route>
              <Route path="about-us">
                <Route index element={<AboutUs />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
