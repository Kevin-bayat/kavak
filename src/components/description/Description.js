import React from "react";
import "./Description.scss";

import Image1 from "../../img/projects/villa.jpg";
import Image2 from "../../img/slider-images/khane bala villa.png";
import { Grid } from "@mui/material";
import useTranslate from "../../hooks/useTranslate";

const Description = () => {
  const { translate } = useTranslate();
  return (
    <Grid container spacing={2} className="description">
      <Grid item xs={12}>
        <p className="description__text">{translate("description")}</p>
      </Grid>
      <Grid container className="description__photos">
        <Grid item md={6} sm={12} xs={12} className="description__photos__left">
          <img src={Image1} alt={""} />
        </Grid>
        <Grid
          item
          md={6}
          sm={12}
          xs={12}
          className="description__photos__right"
        >
          <img src={Image2} alt={""} />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Description;
