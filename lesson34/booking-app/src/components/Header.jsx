import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import { NavLink } from "react-router-dom";

const navLinkStyle = ({ isActive }) => ({
  color: "#fff",
  textDecoration: "none",
  fontWeight: isActive ? 700 : 500,
  borderBottom: isActive ? "2px solid #F5A623" : "2px solid transparent",
  paddingBottom: 4,
  transition: "border-color 0.2s ease, opacity 0.2s ease",
  opacity: isActive ? 1 : 0.85,
});

const links = [
  { to: "/", label: "Main", end: true },
  { to: "/about", label: "About us" },
  { to: "/hotels", label: "Hotels" },
  { to: "/favorites", label: "Favorites" },
];

const socialLinks = [
  { href: "https://github.com/Alice-1lis", label: "GitHub", icon: GitHubIcon },
  { href: "https://t.me/", label: "Telegram", icon: TelegramIcon },
  { href: "https://instagram.com/", label: "Instagram", icon: InstagramIcon },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const socialIconSx = {
    color: "rgba(255,255,255,0.85)",
    "&:hover": { color: "#F5A623" },
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background:
          "linear-gradient(135deg, rgba(15,61,92,0.92) 0%, rgba(15,61,92,0.85) 100%)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <Toolbar sx={{ gap: { xs: 1.5, sm: 3 }, px: { xs: 2, sm: 3 } }}>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: 700,
            fontSize: { xs: "1.1rem", sm: "1.25rem" },
          }}
        >
          Booking App
        </Typography>

        {isMobile ? (
          <IconButton
            color="inherit"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            {links
              .filter((l) => l.label !== "Favorites")
              .map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  style={navLinkStyle}
                  end={link.end}
                >
                  <Button color="inherit">{link.label}</Button>
                </NavLink>
              ))}
            <NavLink to="/favorites" style={navLinkStyle}>
              <IconButton color="inherit" aria-label="Favorites">
                <FavoriteIcon />
              </IconButton>
            </NavLink>

            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: "rgba(255,255,255,0.2)", my: 1 }}
            />

            <Stack direction="row" spacing={0.5}>
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <IconButton
                  key={label}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  size="small"
                  sx={socialIconSx}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Box>
        )}
      </Toolbar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 260,
              background: "linear-gradient(180deg, #0F3D5C 0%, #092740 100%)",
              color: "#fff",
            },
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1.5 }}>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
            sx={{ color: "#fff" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.15)" }} />

        <List
          sx={{ pt: 1 }}
          role="presentation"
          onClick={() => setDrawerOpen(false)}
        >
          {links.map((link) => (
            <ListItemButton
              key={link.to}
              component={NavLink}
              to={link.to}
              end={link.end}
              sx={{
                color: "rgba(255,255,255,0.85)",
                py: 1.5,
                "&:hover": { bgcolor: "rgba(245, 166, 35, 0.15)" },
                "&.active": {
                  color: "#F5A623",
                  bgcolor: "rgba(245, 166, 35, 0.1)",
                  borderLeft: "3px solid #F5A623",
                },
              }}
            >
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{ fontWeight: 600 }}
              />
            </ListItemButton>
          ))}
        </List>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.15)", mt: 1 }} />

        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          sx={{ py: 2, px: 2 }}
        >
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <IconButton
              key={label}
              component="a"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              sx={{
                color: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(255,255,255,0.2)",
                "&:hover": {
                  color: "#F5A623",
                  borderColor: "#F5A623",
                  bgcolor: "rgba(245,166,35,0.1)",
                },
              }}
            >
              <Icon fontSize="small" />
            </IconButton>
          ))}
        </Stack>
      </Drawer>
    </AppBar>
  );
};

export default Header;
