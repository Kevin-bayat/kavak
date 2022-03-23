import React from "react";
import "./Loader.scss";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import images from "../../constants/images";

const Loader = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="loader">
      <Box className="loader__slider" sx={{ width: "100%" }}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
      <div className="loader__logo">
        <img src={images.logoBlack} alt="kavak logo" />
      </div>
    </div>
  );
};
export default Loader;
