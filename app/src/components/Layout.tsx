import * as React from "react";
import Container from "@mui/material/Container";
import NavbarSimple from "./NavbarSimple";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarSimple />
      <Container maxWidth="lg">{children}</Container>
    </>
  );
}
