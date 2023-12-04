import React, { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import ProjectList from "./pages/ProjectList/ProjectList";
import Projects from "./pages/Projects/Projects";
import Service from "./pages/Service/Service";
import ContactUs from "./pages/ContactUs/ContactUs";
import NotFound404 from "./pages/404/404";
import ArchivePage from "./pages/Archive/Archive";
import ArticlesPage from "./pages/Articles/Articles";
import useTranslate from "./hooks/useTranslate";
import i18next from "i18next";

function App() {
  const [loading, setLoading] = useState(true);

  const { languages } = useTranslate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`app ${i18next.language}`}
      dir={languages === "fa" ? "rtl" : "ltr"}
    >
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="projects">
                <Route index element={<Projects />} />
                <Route path=":category/:projectName">
                  <Route index element={<ProjectList />} />
                </Route>
              </Route>
              <Route path="about-us">
                <Route index element={<AboutUs />} />
              </Route>
              <Route path="service">
                <Route index element={<Service />} />
              </Route>
              <Route path="contact-us">
                <Route index element={<ContactUs />} />
              </Route>
              <Route path="archive">
                <Route index element={<ArchivePage />} />
              </Route>
              <Route path="articles">
                <Route index element={<ArticlesPage />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
