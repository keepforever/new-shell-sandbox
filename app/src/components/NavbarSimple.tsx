import { Link } from "remix";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <Button
          sx={{ my: 2, color: "white", display: "block" }}
          component={Link}
          to={"/"}
        >
          Home
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;