import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid, Link } from "@mui/material";
import { foodData } from "../../temp/data";
import { Title } from "@mui/icons-material";

const BlogContent = () => {
  const [seeMore, setSeeMore] = useState({});
  const toggleBtn = (key) => {
    setSeeMore((prevState) =>
      Boolean(prevState[key])
        ? { ...prevState, [key]: false }
        : { ...prevState, [key]: true }
    );
  };
  console.log(seeMore);
  return (
    <Grid padding="30px" container rowGap="25px" columnSpacing="25px">
      {foodData.map(({ img, titel, item1, description }, idx) => {
        return (
          <Grid
            key={idx}
            item
            xs={6}
            sm={6}
            md={4}
            xl={4}
            sx={{ position: "relative" }}
          >
            <Card
              sx={{
                Width: 1,
                height: { xs: "300px", sm: 1 },
                "&:hover": {
                  cursor: "pointer",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                },
              }}
            >
              <CardMedia
                sx={{
                  height: {
                    xs: "150px",
                    sm: "150px",
                    md: "280px",
                    lg: "280px",
                  },
                }}
                image={img}
              />
              <CardContent
                sx={{
                  mx: "10px",
                  padding: { xs: 0 },
                }}
              >
                <Typography
                  color="textHeading"
                  variant="h5"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  {titel}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                      md: "row",
                      xl: "row",
                    },
                    gap: "10px",
                    my: "20px",
                  }}
                >
                  <Link
                    underline="none"
                    href="tel: +8801850131773"
                    variant="pBoldSmall"
                    sx={{
                      bgcolor: "rgba(0, 207, 232, 0.12)",

                      color: "#00CFE8",
                      borderRadius: "17px",
                      px: "9px",
                      fontSize: {
                        xs: "10px",
                        sm: "12px",
                        md: "15px",
                        lg: "16px",
                      },
                    }}
                  >
                    {item1}
                  </Link>
                  <Typography
                    variant="pBoldSmall"
                    sx={{
                      bgcolor: "rgba(115, 103, 240, 0.12)",
                      color: "#7367F0",
                      borderRadius: "17px",
                      px: "9px",
                      fontSize: { xs: "10px" },
                    }}
                  >
                    Buy 1 get 1
                  </Typography>
                </Box>
                <Typography
                  variant="pRegularSmall"
                  display={"none"}
                  sx={{
                    width: 1,
                    color: "textBody",
                  }}
                >
                  {Boolean(seeMore[idx])
                    ? description
                    : description.substring(0, 60)}
                  <Button
                    variant="text"
                    onClick={() => toggleBtn(idx)}
                    sx={{
                      textTransform: "capitalize",
                      padding: 0,
                      margin: 0,
                      color: "textHeading",
                      fontWeight: 700,
                    }}
                  >
                    read more
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default BlogContent;
