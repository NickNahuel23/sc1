import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Box } from "@mui/system";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const Navbar = () => {
  const [anchorEl, setaAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);

  const handleClick = (e) => {
    setaAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setaAnchorEl(null);
  };
  return (
    <Box elevation={0} sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "10px 0px",
          }}
          component="div"
        >
          {/* Logo */}
          <Box>
            <IconButton>
              <LocalMallIcon sx={{ fontSize: "2.4rem", color: "white" }} />
            </IconButton>
          </Box>

          {/* Links */}
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                fontSize: "20px",
                marginRight: "25px",
                cursor: "pointer",
                color: "#ffff",
              }}
            >
              Home
            </Typography>

            <Typography
              sx={{
                fontSize: "20px",
                marginRight: "25px",
                cursor: "pointer",
                color: "#ffff",
              }}
            >
              Nosotros
            </Typography>

            <Typography
              sx={{
                fontSize: "20px",
                marginRight: "25px",
                cursor: "pointer",
                color: "#ffff",
              }}
              aria-controls="basic-menu"
              aria-aria-haspopup="true"
              aria-aria-expanded={openMenu ? "true" : undefined}
              onClick={handleClick}
            >
              Modelos
            </Typography>

            {/* Dropdown Items */}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Ofertas</MenuItem>
              <MenuItem onClick={handleClose}>Nueva temporada</MenuItem>
            </Menu>
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
    </Box>
  );
};

export default Navbar;
