import {
  Box,
  Container,
  Typography,
  Link,
  Stack,
  Divider,
  Fab,
  Zoom,
  IconButton,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { glassSx } from "../styles/glass";
import { socialButtonSx } from "../styles/social";
import { socialLinks } from "../constants/socialLinks";

const footerLinkSx = {
  opacity: 0.85,
  "&:hover": { opacity: 1, color: "secondary.main" },
};
const Footer = () => {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        ...glassSx,
        position: "relative",
        mt: "auto",
        color: "rgba(255,255,255,0.85)",
        pt: { xs: 4, sm: 5 },
        pb: 3,
        borderTop: "3px solid",
        borderColor: "secondary.main",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 3, sm: 4 }}
          sx={{
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                color: "#fff",
                fontWeight: 700,
                mb: 1,
                display: "inline-block",
                textDecoration: "none",
              }}
            >
              Booking App
            </Typography>
            <Typography variant="body2" sx={{ maxWidth: 280, opacity: 0.75 }}>
              {t("footer.tagline")}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="subtitle2"
              sx={{ color: "secondary.main", fontWeight: 700, mb: 1 }}
            >
              {t("footer.navigate")}
            </Typography>
            <Stack spacing={0.75}>
              <Link
                component={RouterLink}
                to="/"
                underline="hover"
                color="inherit"
                sx={footerLinkSx}
              >
                {t("nav.main")}
              </Link>
              <Link
                component={RouterLink}
                to="/about"
                underline="hover"
                color="inherit"
                sx={footerLinkSx}
              >
                {t("nav.about")}
              </Link>
              <Link
                component={RouterLink}
                to="/hotels"
                underline="hover"
                color="inherit"
                sx={footerLinkSx}
              >
                {t("nav.hotels")}
              </Link>
            </Stack>
          </Box>

          <Box>
            <Typography
              variant="subtitle2"
              sx={{ color: "secondary.main", fontWeight: 700, mb: 1 }}
            >
              {t("footer.contacts")}
            </Typography>
            <Typography
              variant="body2"
              sx={{ opacity: 0.75, maxWidth: 260, mb: 1.5 }}
            >
              {t("footer.contactText")}
            </Typography>
            <Stack direction="row" spacing={1}>
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <IconButton
                  key={label}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  size="small"
                  sx={socialButtonSx}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Box>
        </Stack>

        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.15)" }} />

        <Typography
          variant="body2"
          align="center"
          sx={{ opacity: 0.6, fontSize: "0.8rem" }}
        >
          {t("footer.rights", { year: new Date().getFullYear() })}
        </Typography>
      </Container>

      <Zoom in>
        <Fab
          size="medium"
          onClick={scrollToTop}
          aria-label={t("a11y.scrollTop")}
          sx={{
            position: "absolute",
            top: -24,
            right: { xs: 16, sm: 32 },
            bgcolor: "secondary.main",
            color: "primary.main",
            boxShadow: "0 6px 18px rgba(245, 166, 35, 0.4)",
            transition: "all 0.25s ease",
            "&:hover": {
              bgcolor: "secondary.light",
              transform: "translateY(-3px)",
              boxShadow: "0 10px 24px rgba(245, 166, 35, 0.55)",
            },
          }}
        >
          <KeyboardArrowUpIcon fontSize="large" />
        </Fab>
      </Zoom>
    </Box>
  );
};

export default Footer;
