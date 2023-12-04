import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import notFoundImage from "../../img/404.jpg";
import "./NotFound.scss";
import Button from "../Button/Button";
import useTranslate from "../../hooks/useTranslate";

export default function NotFound() {
  const { translate } = useTranslate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div className="notFoundPage">
        <div>
          <img src={notFoundImage} alt="" width={500} height={250} />
        </div>
        <div>
          <div className="container">
            <Typography variant="h6">{translate("notFound.page")}</Typography>
            <Link to="/">
              <Button className="backButton">{translate("backToHome")}</Button>
            </Link>
          </div>
        </div>
      </div>
    </Box>
  );
}
