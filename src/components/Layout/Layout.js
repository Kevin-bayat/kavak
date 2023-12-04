import React from "react";
import Home from "../../pages/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const Layout = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route component={Home} path="/" exact/>
          </Routes>
      </BrowserRouter>

  );
};
export default Layout;
