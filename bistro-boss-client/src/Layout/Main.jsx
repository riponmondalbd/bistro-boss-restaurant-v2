import React from "react";
import { Outlet, useLocation } from "react-router";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  // console.log(location);
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div>
      {noHeaderFooter ? "" : <Navbar />}
      <Outlet />
      {noHeaderFooter ? "" : <Footer />}
    </div>
  );
};

export default Main;
