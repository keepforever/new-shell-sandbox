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
    <Box display="flex">
      <Box display="flex" flex={2} flexDirection="column">
        <StickyFlex
          top={0}
          backgroundColor="powderblue"
          color="green"
          title="MegaFilter"
        />
      </Box>
      <Box display="flex" flex={10} flexDirection="column">
        <Spacer25Vh />
        <Typography variant="h4" component="h1" gutterBottom color="Highlight">
          Text Alpha
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom color="Highlight">
          Text Beta
        </Typography>
        <StickyFlex top={0} backgroundColor="blue" color="red" />
        <StickyFlex top={150} backgroundColor="cornsilk" color="black" />
        <Spacer50Vh />
        <Spacer25Vh />
        <Spacer25Vh />
        <Spacer50Vh />
        <Spacer50Vh />
      </Box>
    </Box>
  );
}
