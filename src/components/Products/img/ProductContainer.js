import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ProductContainer = () => {
  return (
    <Box sx={{ minHeight: "10vh", mr: 2, ml: 2, mt: -23 }}>
      {/* Featured Product */}
      <Grid sx={{ mb: 4 }} container spacing={2}>
        <Grid
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              lg: "row",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
          md={6}
          item
        >
          <Box
            sx={{ width: { xs: "100%", lg: "30%" } }}
            component="img"
            src="https://raw.githubusercontent.com/sofiacartacci/sc/f5c8c90171712e9b1af4946237d0a49a917fd4b3/src/components/Products/imgGrid1.png"
            alt="hola"
          />
          <Box sx={{ paddingLeft: "10px", mt: { lg: 20, xs: 2 } }}>
            <Typography sx={{ fontWeight: "bold" }} variant="h6">
              Model N001
            </Typography>
            <Typography>
              Buzo Molderia especial con 3 recortes: orchid, rose y blanco.
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", color: "#e70303" }}
              variant="h6"
            >
              $7500
            </Typography>
            <Button
              sx={{ color: "white", background: "black" }}
              variant="outlined"
              size="medium"
            >
              {" "}
              Agregar a carrito
            </Button>
          </Box>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              lg: "row",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
          md={6}
          item
        >
          <Box
            sx={{ width: { xs: "100%", lg: "30%" } }}
            component="img"
            src="https://raw.githubusercontent.com/sofiacartacci/sc/f5c8c90171712e9b1af4946237d0a49a917fd4b3/src/components/Products/img/imgGrid2.png"
            alt="hola"
          />
          <Box sx={{ paddingLeft: "10px", mt: { lg: 20, xs: 2 } }}>
            <Typography sx={{ fontWeight: "bold" }} variant="h6">
              Model N002
            </Typography>
            <Typography>Buzo regular color blanco y salmon.</Typography>
            <Typography
              sx={{ fontWeight: "bold", color: "#e70303" }}
              variant="h6"
            >
              $6500
            </Typography>
            <Button
              sx={{ color: "white", background: "black" }}
              variant="outlined"
              size="medium"
            >
              {" "}
              Agregar a carrito
            </Button>
          </Box>
        </Grid>
      </Grid>
      {/* Product list */}
    </Box>
  );
};

export default ProductContainer;
