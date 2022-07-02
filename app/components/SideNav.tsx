import React from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

type Props = {};

export const SideNav: React.FC<Props> = (props) => {
  const matches = useMediaQuery("(min-width:1400px)");

  return (
    <Box
      sx={{
        minWidth: 200,
        minHeight: "calc(100vh - 60px)",
        backgroundColor: "red",
        color: "blue",
        fontSize: "1.5rem",
        p: 2,
        display: matches ? "block" : "none",
      }}
    >
      side nav
      <br />
      {matches ? "yes" : "no"}
    </Box>
  );
};

export default SideNav;
