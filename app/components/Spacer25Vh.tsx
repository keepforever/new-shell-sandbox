import React from "react";
import Box from "@mui/material/Box";

type Props = {};

export const Spacer25Vh: React.FC<Props> = (props) => {
  return (
    <Box sx={{ height: "25vh", p: 3 }}>
      <h3>Hello Spacer25Vh</h3>
    </Box>
  );
};

export default Spacer25Vh;