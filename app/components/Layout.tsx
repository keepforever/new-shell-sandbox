import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import NavbarTop from "./NavbarTop";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <NavbarTop /> */}
      <Box
        display="flex"
        alignItems="center"
        sx={{
          backgroundColor: "yellow",
          position: "sticky",
          top: 0,
          py: 3,
          px: 3,
        }}
      >
        Sticky Div, top = 0
      </Box>

      {children}
    </>
  );
}
