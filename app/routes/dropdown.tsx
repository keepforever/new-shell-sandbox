import * as React from "react";
import Box from "@mui/material/Box";
import type { MetaFunction } from "remix";
import Typography from "@mui/material/Typography";
import Spacer50Vh from "~/components/Spacer50Vh";
import Spacer25Vh from "~/components/Spacer25Vh";
import StickyFlex from "~/components/StickyFlex";
import { useStickyHasStuck } from "~/hooks/useStickyHasStuck";
import { CustomDropdown } from "~/components/RadixDropdown";

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: "CSS Fun",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h2" color="initial">
        dropdown.tsx
      </Typography>
      <Box display="flex" alignItems="center">
        <CustomDropdown />
      </Box>
    </Box>
  );
}
