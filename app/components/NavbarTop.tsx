import Box from "@mui/material/Box";
import { Link } from "remix";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const NavbarTop = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        // backgroundColor: "transparent",
        backgroundColor: "yellow",
        gap: 2,
        py: 3,
        px: 3,
        height: "60px",
      }}
    >
      <Link to="/" color="secondary">
        Home
      </Link>
      <Link to="/about" color="secondary">
        About
      </Link>
    </Box>
  );
};

export default NavbarTop;
