import { AppBar, IconButton, Toolbar, Typography, Box } from "@mui/material";
import {
  Menu as MenuIcon,
  Add as AddIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
  ArrowBack as BackIcon,
} from "@mui/icons-material";
import { useApp } from "../AppProvider";
import { useLocation, useNavigate } from "react-router";

export default function Header() {
  const { showForm, setShowForm, mode, setMode, setShowDrawer } = useApp();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          {pathname == "/" ? (
            <IconButton color="inherit" onClick={() => setShowDrawer(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <IconButton color="inherit" onClick={() => navigate("/")}>
              <BackIcon />
            </IconButton>
          )}

          <Typography>App</Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton
            size="small"
            sx={{ color: "inherit" }}
            onClick={() => setShowForm(!showForm)}
          >
            <AddIcon sx={{ fontSize: 20 }}></AddIcon>
          </IconButton>

          {mode == "dark" ? (
            <IconButton onClick={() => setMode("light")}>
              <LightModeIcon color="inherit"></LightModeIcon>
            </IconButton>
          ) : (
            <IconButton onClick={() => setMode("dark")}>
              <DarkModeIcon color="inherit"></DarkModeIcon>
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
