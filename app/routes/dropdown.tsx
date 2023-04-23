import * as React from "react";
import Box from "@mui/material/Box";
import type { MetaFunction } from "remix";
import Typography from "@mui/material/Typography";
import Spacer50Vh from "~/components/Spacer50Vh";
import Spacer25Vh from "~/components/Spacer25Vh";
import StickyFlex from "~/components/StickyFlex";
import { useStickyHasStuck } from "~/hooks/useStickyHasStuck";
import { CustomDropdown } from "~/components/RadixDropdown";
import styles from "~/styles/dropdown.css";

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: "CSS Fun",
  };
};

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h2" color="initial" mb={3}>
        dropdown.tsx
      </Typography>
      <Box display="flex" alignItems="center" p={3}>
        <CustomDropdown
          options={[
            "appleappleappleappleappleappleappleappleappleappleappleappleappleapple",
            "banana",
            "cherry",
            "date",
          ]}
        />
      </Box>
    </Box>
  );
}
