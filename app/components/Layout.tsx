import * as React from "react";
import { Link } from "remix";
import Box from "@mui/material/Box";
import NavbarTop from "./NavbarTop";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarTop />

      <Box
        sx={{
          maxHeight: "calc(100vh - 80px)",
          backgroundColor: "orange",
          overflowY: "auto",
        }}
      >
        {children}
      </Box>
    </>
  );
}
