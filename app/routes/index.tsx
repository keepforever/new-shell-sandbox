import * as React from "react";
import Box from "@mui/material/Box";
import type { MetaFunction } from "remix";
import Typography from "@mui/material/Typography";
import Spacer50Vh from "~/components/Spacer50Vh";
import Spacer25Vh from "~/components/Spacer25Vh";
import StickyFlex from "~/components/StickyFlex";
import { useStickyHasStuck } from "~/hooks/useStickyHasStuck";
import { ParentChildHoverExperiment } from "~/components/ParentChildHoverExperiment";

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: "CSS Fun",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [toggle, setToggle] = React.useState<boolean>(false);

  const handleStickyHasStuck = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio < 1) {
        setToggle(true);
      } else {
        setToggle(false);
      }
    });
  };

  useStickyHasStuck({ ref, callback: handleStickyHasStuck });

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
        <ParentChildHoverExperiment />
        <Spacer25Vh />
        <Typography variant="h4" component="h1" gutterBottom color="Highlight">
          Text Alpha
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom color="Highlight">
          Text Beta
        </Typography>
        <Box
          ref={ref}
          display="flex"
          alignItems="center"
          position="sticky"
          top={-1}
          sx={{
            backgroundColor: toggle ? "transparent" : "orange",
            backgroundImage: toggle
              ? "linear-gradient(to right, red , yellow)"
              : null,
            color: "blue",
            p: 3,
            fontSize: "1.5rem",
          }}
        >
          <Box display="flex" alignItems="center">
            <Typography variant="h4" component="span">
              Sticky Div, top = -1 &nbsp;
            </Typography>
            {toggle ? (
              <Typography variant="h4" component="span">
                Now I'm Stuck!!!
              </Typography>
            ) : null}
          </Box>
        </Box>
        {/* <StickyFlex top={0} backgroundColor="blue" color="red" /> */}
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
