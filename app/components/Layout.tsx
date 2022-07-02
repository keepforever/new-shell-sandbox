import * as React from "react";
import { Link } from "remix";
import Box from "@mui/material/Box";
import NavbarTop from "./NavbarTop";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Layout({ children }: { children: React.ReactNode }) {
  const matches = useMediaQuery("(min-width:1400px)");

  return (
    <>
      <NavbarTop />

      <Box
        sx={{
          display: "flex",
          maxHeight: "calc(100vh - 60px)",
          backgroundColor: "orange",
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            minWidth: 200,
            minHeight: "calc(100vh - 60px)",
            backgroundColor: "red",
            color: "blue",
            fontSize: "1.5rem",
            p: 2,
          }}
        >
          side nav
          <br />
          {matches ? "yes" : "no"}
        </Box>
        <Box
          sx={{
            flex: 1,
            maxHeight: "calc(100vh - 60px)",
            backgroundColor: "purple",
            overflowY: "auto",
          }}
        >
          <Container maxWidth="lg" sx={{ outline: "1px solid yellow", pt: 1 }}>
            {children}
          </Container>
        </Box>
      </Box>
    </>
  );
}
