import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React from "react";

const ThemeLayout = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#007098",
      },
      secondary: {
        main: "#DECA6B",
      },
      third: {
        main: "#E0BAC9",
      },
      forth: {
        main: "#A7BD70",
      },
      fifth: {
        main: "#D7DFDF",
      },
      grey2: {
        main: "#D2F5F1",
      },
      textHeading: "#5D586C",
      textBody: "#5D586C",
      textWhite: "#FFFFFF",
      fieldGray: "#CCCCCC",
      disableBg: "#F8F8F8",
    },
    typography: {
      fontFamily: [
        "Avenir",
        "Barlow",
        "sans-serif",
        "Lobster Two",
        "cursive",
      ].join(","),
      h1: {
        fontFamily: "Lobster Two",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "72px",
        lineHeight: "86px",
      },
      h2: {
        fontFamily: "Lobster Two",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "54px",
        lineHeight: "65px",
      },
      h3: {
        fontFamily: "Lobster Two",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "38px",
        lineHeight: "46px",
      },
      h4: {
        fontFamily: "Lobster Two",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "28px",
        lineHeight: "34px",
      },
      h5: {
        fontFamily: "Barlow",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "18px",
        lineHeight: "25px",
      },
      h6: {
        fontFamily: "Barlow",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "17px",
      },
      pRegularLarge: {
        fontFamily: "Avenir",
        fontStyle: "normal",
        fontWeight: 350,
        fontSize: "16px",
        lineHeight: "27px",
      },
      pRegularSmall: {
        fontFamily: "Avenir",
        fontStyle: "normal",
        fontWeight: 350,
        fontSize: "14px",
        lineHeight: "24px",
      },
      pBoldLarge: {
        fontFamily: "Avenir",
        fontStyle: "normal",
        fontWeight: 750,
        fontSize: "16px",
        lineHeight: "27px",
      },
      pBoldSmall: {
        fontFamily: "Avenir",
        fontStyle: "normal",
        fontWeight: 750,
        fontSize: "14px",
        lineHeight: "24px",
      },
      pExtra: {
        fontFamily: "Avenir",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "18px",
        lineHeight: "24px",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          "& .MuiGrid-root .MuiGrid-item": {
            paddingTop: "0 !important",
          },

          body: {
            //Set core body defaults
            backgroundColor: "#ffffff",
            padding: 0,
            minHeight: "100vh",
            textRendering: "optimizeSpeed",

            // Box sizing rules
            "*,*::before,*::after": {
              boxSizing: "border-box",
            },

            // Set core root defaults
            "& html:focus-within": { scrollBehavior: "smooth" },

            // scrollbar
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              width: "10px",
            },
            "&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track": {
              background: "#e0e0e0",
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              background: "black",
            },
            "&::-webkit-scrollbar-track:hover, & *::-webkit-scrollbar-track:hover":
              {
                background: "#e0e0e0",
              },
            "&::-selection, & *::-selection": {
              backgroundColor: "gray",
            },

            // Remove all animations, transitions and smooth scroll for people that prefer not to see them
            ["@media (prefers-reduced-motion: reduce)"]: {
              "& html:focus-within": {
                scrollBehavior: "auto",
              },
              "& .css-1c5ld5s-MuiContainer-root": {
                maxWidth: "100%",
              },
              "*,*::before,*::after": {
                animationDuration: "0.01ms !important",
                animationIterationCount: "1 !important",
                transitionDuration: "0.01ms !important",
                scrollBehavior: "auto !important",
              },
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-notchedOutline": {
              border: 0,
            },
          },
        },
      },
      MuiButton: {
        variants: [
          {
            props: { variant: "customBtn" },
            style: {
              fontFamily: "Avenir",
              fontSize: "16px",
              fontWeight: 350,
              textTransform: "capitalize",
              padding: "10px 40px",
              borderRadius: "5px",
              color: "#ffffff",
            },
          },
          {
            props: { variant: "customBtn2" },
            style: {
              fontFamily: "Avenir",
              fontSize: "13px",
              fontWeight: "600",
              textTransform: "capitalize",
              padding: "5px 10px",
            },
          },
        ],
      },

      MuiFormLabel: {
        variants: [
          {
            props: { variant: "customFormLabel" },
            style: {
              fontFamily: "Avenir",
              fontSize: "14px",
              fontWeight: 750,
              textTransform: "capitalize",
              color: "#5E5873",
            },
          },
        ],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeLayout;
