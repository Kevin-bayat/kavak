import React from "react";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import classes from "./index.module.scss";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import useTranslate from "../../../hooks/useTranslate";
import i18next from "i18next";

export default function MyAccordion() {
  const [expanded, setExpanded] = useState("panel1");

  const { translate } = useTranslate();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="section__padding ">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={
            <ArrowForwardIosSharpIcon
              sx={{ fontSize: "0.9rem" }}
              className={classes.icon}
            />
          }
          className={classes.summary}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography>{translate("service.ARCH")}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography>{translate("service.desc.arch")}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        className={classes.accordion}
      >
        <AccordionSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          expandIcon={
            <ArrowForwardIosSharpIcon
              sx={{ fontSize: "0.9rem" }}
              className={classes.icon}
            />
          }
          className={classes.summary}
        >
          <Typography>{translate("service.INTERIOR")}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography>{translate("service.INTERIOR.desc")}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className={classes.accordion}
      >
        <AccordionSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
          expandIcon={
            <ArrowForwardIosSharpIcon
              sx={{ fontSize: "0.9rem" }}
              className={classes.icon}
            />
          }
          className={classes.summary}
        >
          <Typography>{translate("service.CONSTRUCTION")}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography>{translate("service.CONSTRUCTION.desc")}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        className={classes.accordion}
      >
        <AccordionSummary
          aria-controls="panel4d-content"
          id="panel4d-header"
          expandIcon={
            <ArrowForwardIosSharpIcon
              sx={{ fontSize: "0.9rem" }}
              className={classes.icon}
            />
          }
          className={classes.summary}
        >
          <Typography>{translate("service.Renovation")}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography>{translate("service.Renovation.desc")}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
