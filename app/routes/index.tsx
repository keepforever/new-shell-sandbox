import * as React from "react";
import Box from "@mui/material/Box";
import type { MetaFunction } from "remix";
import { Link } from "remix";
import Typography from "@mui/material/Typography";
import Spacer50Vh from "~/components/Spacer50Vh";
import Spacer25Vh from "~/components/Spacer25Vh";

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        HTML: PINK
      </Typography>

      <Typography variant="h4" component="h1" gutterBottom>
        BODY: GREY
      </Typography>
      <Link to="/about" color="secondary">
        Go to the about page
      </Link>
      <Spacer50Vh />
      <Box
        display="flex"
        alignItems="center"
        position="sticky"
        top={80}
        sx={{
          backgroundColor: "blue",
          color: "yellow",
          p: 3,
        }}
      >
        Sticky Div, top = 80
      </Box>
      <Spacer25Vh />
      <Spacer25Vh />
      <Spacer50Vh />
      <Spacer50Vh />
    </>
  );
}
