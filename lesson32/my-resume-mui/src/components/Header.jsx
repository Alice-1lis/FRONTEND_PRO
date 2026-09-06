import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";

const NAV_ITEMS = [
  { label: "Головна", path: "/" },
  { label: "TODO", path: "/todo" },
  { label: "SWAPI", path: "/swapi" },
];

const Header = ({ mode, onToggleMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? theme.palette.secondary.main : theme.palette.common.white,
    fontWeight: isActive ? 700 : 500,
  });

  return (
    <AppBar position="sticky" elevation={0} color="primary">
      <Toolbar sx={{ justifyContent: "space-around" }}>
        <Typography
          variant="h6"
          component={NavLink}
          to="/"
          sx={{ textDecoration: "none", color: "inherit", fontWeight: 600 }}
        >
          Logo
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <Box sx={{ width: 220 }}>
                  <Box
                    sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}
                  >
                    <IconButton
                      onClick={() => setDrawerOpen(false)}
                      aria-label="Закрити меню"
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <List>
                    {NAV_ITEMS.map((item) => (
                      <ListItem key={item.path} disablePadding>
                        <ListItemButton
                          component={NavLink}
                          to={item.path}
                          onClick={() => setDrawerOpen(false)}
                        >
                          <ListItemText primary={item.label} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 1 }}>
              {NAV_ITEMS.map((item) => (
                <Button
                  key={item.path}
                  component={NavLink}
                  to={item.path}
                  style={navLinkStyle}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          <IconButton
            color="inherit"
            onClick={onToggleMode}
            aria-label="Перемкнути тему"
          >
            {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
