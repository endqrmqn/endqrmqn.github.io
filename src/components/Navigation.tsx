import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import "../assets/styles/Navigation.scss";

interface NavigationProps {
  parentToChild: { mode: "light" | "dark" };
  modeChange: () => void;
}

function Navigation({ parentToChild, modeChange }: NavigationProps) {
  const { mode } = parentToChild;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" id="navigation" position="fixed" className="navbar">
        <Toolbar className="navigation-bar">
          {mode === "dark" ? (
            <LightModeIcon onClick={modeChange} sx={{ cursor: "pointer" }} />
          ) : (
            <DarkModeIcon onClick={modeChange} sx={{ cursor: "pointer" }} />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navigation;
