import Box from "@mui/material/Box";
import { NavLink } from "remix";

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
      <NavLink
        to="/"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        About
      </NavLink>

      <NavLink
        to="/brian-alpha"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        Brian Alpha
      </NavLink>

      <NavLink
        to="/dropdown"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        Dropdown
      </NavLink>
    </Box>
  );
};

export default NavbarTop;
