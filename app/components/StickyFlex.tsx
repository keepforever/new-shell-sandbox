import React from "react";
import Box from "@mui/material/Box";

// function to generate random rgba color
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

type Props = {
  top: number;
  backgroundColor?: string;
  color?: string;
};

export const StickyFlex: React.FC<Props> = ({
  top,
  color,
  backgroundColor,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      position="sticky"
      top={top}
      sx={{
        backgroundColor,
        color,
        p: 3,
      }}
    >
      Sticky Div, top = {top}
    </Box>
  );
};

export default StickyFlex;
