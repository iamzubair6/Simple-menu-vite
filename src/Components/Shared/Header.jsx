import React from "react";
import ContactBg from "../../Assets/images/banner.jpg";
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
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography
          sx={{
            typography: { xs: "h3", sm: "h3", md: "h2", lg: "h1" },
          }}
          color={"white"}
        >
          The
        </Typography>
        <Typography
          sx={{ typography: { xs: "h3", sm: "h3", md: "h2", lg: "h1" } }}
          color={"white"}
        >
          Down
        </Typography>
        <Typography
          sx={{ typography: { xs: "h3", sm: "h3", md: "h2", lg: "h1" } }}
          color={"white"}
        >
          Town
        </Typography>
      </Box>
      <Box>
        <Typography
          textAlign="end"
          sx={{ typography: { xs: "h3", sm: "h3", md: "h2", lg: "h2" } }}
          color={"white"}
        >
          Taste The Beast
        </Typography>
        <Typography
          textAlign="end"
          sx={{ typography: { xs: "h4", sm: "h4", md: "h4", lg: "h3" } }}
          color={"white"}
        >
          Best
        </Typography>
        <Typography
          textAlign="end"
          sx={{ typography: { xs: "h4", sm: "h4", md: "h4", lg: "h3" } }}
          color={"white"}
        >
          Budget
        </Typography>
        <Typography
          textAlign="end"
          sx={{ typography: { xs: "h4", sm: "h4", md: "h4", lg: "h3" } }}
          color={"white"}
        >
          Burgers
        </Typography>
        <Typography
          textAlign="end"
          sx={{ typography: { xs: "h4", sm: "h4", md: "h4", lg: "h3" } }}
          color={"white"}
        >
          In Cloud History
        </Typography>
      </Box>
    </Box>
  );
}
