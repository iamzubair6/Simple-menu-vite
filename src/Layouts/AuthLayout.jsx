import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Header from "../Components/Shared/Header";
import ThemeLayout from "./ThemeLayout";

const AuthLayout = () => {
  return (
    <ThemeLayout>
      <Header />
      <Outlet />
      <Footer />
    </ThemeLayout>
  );
};

export default AuthLayout;
