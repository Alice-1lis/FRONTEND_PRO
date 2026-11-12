import { useState, useEffect } from "react";
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
import { NavLink, Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { glassSx } from "../styles/glass";
import { socialButtonSx } from "../styles/social";
import { socialLinks } from "../constants/socialLinks";

const navLinkStyle = ({ isActive }) => ({
  color: "#fff",
  textDecoration: "none",
  fontWeight: isActive ? 700 : 500,
  borderBottom: isActive ? "2px solid #F5A623" : "2px solid transparent",
  paddingBottom: 1,
  transition: "border-color 0.2s ease, opacity 0.2s ease",
  opacity: isActive ? 1 : 0.85,
  whiteSpace: "nowrap",
});

const links = [
  { to: "/", key: "main", end: true },
  { to: "/about", key: "about" },
  { to: "/hotels", key: "hotels" },
  { to: "/favorites", key: "favorites" },
];

const Header = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"), {
    noSsr: true,
  });
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      setTimeout(() => setDrawerOpen(false), 100);
    }
  }, [isMobile]);
  const socialIconSx = {
    color: "rgba(255,255,255,0.85)",
    "&:hover": { color: "secondary.main" },
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ ...glassSx, borderBottom: "1px solid rgba(115, 115, 115, 0.15)" }}
    >
      <Toolbar
        sx={{
          gap: { xs: 1.5, sm: 3 },
          px: { xs: 2, sm: 3 },
          minHeight: { xs: 68, sm: 80, md: 92 },
        }}
      >
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            fontWeight: 700,
            fontSize: { xs: "1.2rem", sm: "1.4rem" },
            whiteSpace: "nowrap",
            flexShrink: 0,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Booking App
        </Typography>
        {isMobile ? (
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <LanguageSwitcher />
            <IconButton
              color="inherit"
              onClick={(e) => {
                e.currentTarget.blur();
                setDrawerOpen(true);
              }}
              aria-label={t("nav.openMenu")}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        ) : (
          <Box
            sx={{
              display: "flex",
              gap: { md: 1.5, lg: 3 },
              alignItems: "center",
            }}
          >
            {links
              .filter((l) => l.key !== "favorites")
              .map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  style={navLinkStyle}
                  end={link.end}
                >
                  <Button
                    color="inherit"
                    sx={{
                      fontSize: "0.95rem",
                      whiteSpace: "nowrap",
                      px: { md: 1, lg: 1.5 },
                    }}
                  >
                    {t(`nav.${link.key}`)}
                  </Button>
                </NavLink>
              ))}
            <NavLink to="/favorites" style={navLinkStyle}>
              <IconButton color="inherit" aria-label={t("nav.favorites")}>
                <FavoriteIcon />
              </IconButton>
            </NavLink>

            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: "rgba(255,255,255,0.2)", my: 1.5 }}
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
            <LanguageSwitcher />
          </Box>
        )}
      </Toolbar>
      <Drawer
        anchor="right"
        open={drawerOpen && isMobile}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 280,
              background: "linear-gradient(180deg, #010152 0%, #070238 100%)",
              color: "#fff",
            },
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1.5 }}>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            aria-label={t("nav.closeMenu")}
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
                  color: "secondary.main",
                  bgcolor: "rgba(245, 166, 35, 0.1)",
                  borderLeft: "3px solid",
                  borderLeftColor: "secondary.main",
                },
              }}
            >
              <ListItemText
                primary={t(`nav.${link.key}`)}
                primaryTypographyProps={{ fontWeight: 600 }}
              />
            </ListItemButton>
          ))}
        </List>
        <Divider sx={{ borderColor: "rgba(255,255,255,0.15)", mt: 1 }} />
        <Stack
          direction="row"
          spacing={1}
          sx={{ py: 2, px: 2, justifyContent: "center" }}
        >
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <IconButton
              key={label}
              component="a"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              sx={socialButtonSx}
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
