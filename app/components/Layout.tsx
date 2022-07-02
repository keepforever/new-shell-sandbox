import * as React from "react";
import Box from "@mui/material/Box";
import NavbarTop from "./NavbarTop";
import useMediaQuery from "@mui/material/useMediaQuery";
import SideNav from "./SideNav";

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
          // pt: 4,
        }}
      >
        <SideNav />

        <Box
          sx={{
            flex: 1,
            maxHeight: "calc(100vh - 60px)",
            backgroundColor: "mediumorchid",
            overflowY: "auto",
          }}
        >
          <Box
            sx={{
              maxWidth: 1280,
              outline: "5px solid yellow",
              mx: "auto",
              borderRadius: 2,
              mt: 4,
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
}
