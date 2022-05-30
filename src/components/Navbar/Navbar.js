import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Badge,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Box } from "@mui/system";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
const Navbar = () => {
  return (
    <AppBar elevation={0} sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
          component="div"
        >
          {/* Logo */}
          <Box>
            <IconButton>
              <MenuOutlinedIcon />
            </IconButton>
          </Box>

          {/* Links */}
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#ffff" }}
            >
              Home
            </Typography>

            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#ffff" }}
            >
              Nosotros
            </Typography>

            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#ffff" }}
            >
              Modelos
            </Typography>
          </Box>

          {/* Button links */}
          <Box
            sx={{
              display: "flex",
              justifiContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              sx={{ background: "#e70303" }}
              disableElevation
              variant="contained"
            >
              Account
            </Button>

            <Badge
              sx={{ color: "#ffff", backgroundColor: "black" }}
              badgeContent={4}
              color="error"
            >
              <ShoppingBasketIcon />
            </Badge>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
