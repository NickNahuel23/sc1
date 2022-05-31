import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "url(Assets/header.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "10vh",
        }}
      ></Box>
    </Box>
  );
};

export default Header;
