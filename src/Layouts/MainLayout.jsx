import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Shared/Header";
import ThemeLayout from "./ThemeLayout";

const MainLayout = () => {
  const [showNav, setShowNav] = useState(false);
  const { pathname } = useLocation();

  const handleCategoryNavShow = () => {
    if (window.scrollY > 510) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  window.addEventListener("scroll", handleCategoryNavShow);

  return (
    <ThemeLayout>
      {/* header */}
      <Header />

      {/* 480 scroll down from the top, show category nav*/}
      {(pathname === "/" || pathname === "/home") && (
        <Box
          sx={{
            position: "sticky",
            top: 130,
            zIndex: 99,
            display: showNav ? "block" : "none",
          }}
        ></Box>
      )}

      {/* pages */}
      <Box
        sx={{
          flexGrow: 1,
          height: 1,
        }}
      >
        <Outlet />
      </Box>
    </ThemeLayout>
  );
};

export default MainLayout;
