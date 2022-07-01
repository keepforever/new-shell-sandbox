import * as React from "react";
import type { MetaFunction } from "remix";
import { Link } from "remix";
import Typography from "@mui/material/Typography";
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
    <React.Fragment>
      <Typography variant="h4" component="h1" gutterBottom>
        HTML: PINK
      </Typography>

      <Typography variant="h4" component="h1" gutterBottom>
        BODY: GREY
      </Typography>
      <Link to="/about" color="secondary">
        Go to the about page
      </Link>
      <Spacer25Vh />
      <Spacer25Vh />
      <Spacer25Vh />
      <Spacer25Vh />
      <Spacer25Vh />
    </React.Fragment>
  );
}
