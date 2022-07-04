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
  title?: string;
  sx?: any
};

export const StickyFlex: React.FC<Props> = ({
  top,
  color,
  backgroundColor,
  title,
  sx
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
        fontSize: "1.5rem",
        ...sx
      }}
    >
      <Box display="flex" flexDirection="column">
        {title}
        <br />
        Sticky Div, top = {top}
      </Box>
    </Box>
  );
};

export default StickyFlex;
