import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ProductContainer = () => {
  return (
    <Box sx={{ minHeight: "60vh", mr: 2, ml: 2, mt: -23, background: "red" }}>
      {/* Featured Product */}
      <Grid sx={{ mb: 4 }} container spacing={2}>
        <Grid md={6} item>
          <Box
            component="img"
            src="https://followme.com.ar/img/productos-inspirate-home/productos.png"
            alt="hola"
          />
        </Grid>
        <Grid md={6} item>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Grid>
      </Grid>
      {/* Product list */}
      ProductContainer
    </Box>
  );
};

export default ProductContainer;
