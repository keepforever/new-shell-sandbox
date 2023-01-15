import React from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";

type Props = {};

export const SideNavAlpha: React.FC<Props> = (props) => {
  const matches = useMediaQuery("(min-width:1400px)");

  return (
    <Box
      sx={{
        minWidth: 248,
        minHeight: "calc(100vh - 60px)",
        p: 3,
        display: matches ? "block" : "none",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        sx={{ borderRadius: 2, p: 2, backgroundColor: "white" }}
      >
        <Typography variant="footnote" noWrap component="div" mb={1}>
          Sub Link 1
        </Typography>

        <Typography mb={1} variant="footnote" noWrap component="div">
          Sub Link 2
        </Typography>

        <Typography variant="footnote" noWrap component="div">
          Sub Link 3
        </Typography>
      </Box>
    </Box>
  );
};

export default SideNavAlpha;
