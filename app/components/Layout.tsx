import * as React from "react";
import Container from "@mui/material/Container";
import NavbarTop from "./NavbarTop";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarTop />
      {children}
    </>
  );
}
