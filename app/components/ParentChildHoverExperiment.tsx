import React from "react";
import Box from "@mui/material/Box";

export function ParentChildHoverExperiment() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "200px",
        height: "200px",
        backgroundColor: "lightblue",
        ":hover": {
          "& .childBox": {
            visibility: "visible",
          },
        },
      }}
    >
      <Box
        className="childBox"
        sx={{
          backgroundColor: "lightgreen",
          p: 2,
          visibility: "hidden",
          position: "absolute",
          top: 10,
          right: 10,
          ":hover": {
            backgroundColor: "lightpink",
          },
        }}
      >
        Child
      </Box>
    </Box>
  );
}
