import React from "react";
import ContactBg from "../../Assets/images/banner.png";
import { Box, Container, Typography } from "@mui/material";
export default function Header() {
  return (
    <Box
      sx={{
        width: 1,
        height: {
          xs: "190px",
          sm: "190px",
          md: "400px",
          lg: "400px",
        },
        backgroundImage: `url(${ContactBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Box>
        <Typography
          variant="h1"
          sx={{
            // typography: { xs: "h3", sm: "h3", md: "h2", lg: "h1" },
            fontFamily: "Lobster Two",
            // fontStyle: "cursive",
            fontWeight: 600,
            fontSize: "72px",
            lineHeight: "86px",
          }}
          color={"white"}
        >
          DownTown
        </Typography>
      </Box> */}
    </Box>
  );
}
