import React from "react";
import Box from "@mui/material/Box";

type Props = {};

export const Spacer25Vh: React.FC<Props> = (props) => {
  return (
    <Box
      sx={{
        height: "50vh",
        p: 3,
        outline: "1px solid black",
        fontSize: "1.5em",
      }}
    >
      <h3>Spacer - 25Vh</h3>
    </Box>
  );
};

export default Spacer25Vh;
