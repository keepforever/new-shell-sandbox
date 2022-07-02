import * as React from "react";
import Box from "@mui/material/Box";
import type { MetaFunction } from "remix";
import { Link } from "remix";
import Typography from "@mui/material/Typography";
import Spacer50Vh from "~/components/Spacer50Vh";
import Spacer25Vh from "~/components/Spacer25Vh";
import StickyFlex from "~/components/StickyFlex";

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: "CSS Fun",
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
      <StickyFlex top={0} backgroundColor="blue" color="red" />
      <StickyFlex top={80} backgroundColor="cornsilk" color="black" />
      <Spacer50Vh />
      <Spacer25Vh />
      <Spacer25Vh />
      <Spacer50Vh />
      <Spacer50Vh />
    </>
  );
}
