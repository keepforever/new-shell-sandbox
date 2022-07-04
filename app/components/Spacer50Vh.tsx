import React from "react";
import Box from "@mui/material/Box";

type Props = {};

export const Spacer25Vh: React.FC<Props> = (props) => {
  return (
    <Box
      sx={{
        height: "50vh",
        p: 3,
        my: 2,
        outline: "3px solid purple",
        fontSize: "1.5em",
      }}
    >
      <h3>Spacer - 50Vh</h3>
    </Box>
  );
};

export default Spacer25Vh;
