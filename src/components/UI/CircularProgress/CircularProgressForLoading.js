import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
const CircularProgressForLoading = ({ loading }) => {
  return (
    <div>
      <CircularProgress
        color="inherit"
        size={36}
        variant={"indeterminate"}
        style={{ display: loading ? "flex" : "none" }}
      />
    </div>
  );
};
export default CircularProgressForLoading;
