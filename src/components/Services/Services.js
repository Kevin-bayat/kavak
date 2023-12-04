import "./Services.style.scss";
import SubHeading from "../SubHeading/SubHeading";

import { serviceCart } from "../../constants/data";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { Grid } from "@mui/material";
import useTranslate from "../../hooks/useTranslate";
const Services = () => {
  const { translate } = useTranslate();
  return (
    <div className="app__services section__padding">
      <SubHeading
        title={translate("service.title")}
        description={translate("service.desc")}
        kind={translate("service.kind")}
        spoonColor="white"
      />
      <div className="app__services-steps flex__center">
        <Grid container>
          {serviceCart.map((item, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <div className="app__services-steps_cart ">
                <div className="step_icons">{item.icon}</div>
                <div className="step_title p__openSans">
                  {translate(item.title)}
                </div>
                <div className="step_description p__openSans">
                  {translate(item.description)}
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      <Link to="/service">
        <Button className="service__button">{translate("service.view")}</Button>
      </Link>
    </div>
  );
};
export default Services;
