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
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        mt: "auto",
        background: "linear-gradient(135deg, #0F3D5C 0%, #092740 100%)",
        color: "rgba(255,255,255,0.85)",
        pt: { xs: 4, sm: 5 },
        pb: { xs: 3, sm: 3 },
        borderTop: "3px solid #F5A623",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 3, sm: 4 }}
          sx={{
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "flex-start" },
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{ color: "#fff", fontWeight: 700, mb: 1 }}
            >
              Booking App
            </Typography>
            <Typography variant="body2" sx={{ maxWidth: 280, opacity: 0.75 }}>
              Find and book the stay that fits you best, wherever your next trip
              takes you.
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="subtitle2"
              sx={{ color: "#F5A623", fontWeight: 700, mb: 1 }}
            >
              Navigate
            </Typography>
            <Stack spacing={0.75}>
              <Link
                href="/"
                underline="hover"
                color="inherit"
                sx={{
                  opacity: 0.85,
                  "&:hover": { opacity: 1, color: "#F5A623" },
                }}
              >
                Main
              </Link>
              <Link
                href="/about"
                underline="hover"
                color="inherit"
                sx={{
                  opacity: 0.85,
                  "&:hover": { opacity: 1, color: "#F5A623" },
                }}
              >
                About us
              </Link>
              <Link
                href="/hotels"
                underline="hover"
                color="inherit"
                sx={{
                  opacity: 0.85,
                  "&:hover": { opacity: 1, color: "#F5A623" },
                }}
              >
                Hotels
              </Link>
            </Stack>
          </Box>

          <Box>
            <Typography
              variant="subtitle2"
              sx={{ color: "#F5A623", fontWeight: 700, mb: 1 }}
            >
              Contacts
            </Typography>
            <Typography
              variant="body2"
              sx={{ opacity: 0.75, maxWidth: 260, mb: 1.5 }}
            >
              Contact us for any questions or support.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                component="a"
                href="https://github.com/Alice-1lis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                size="small"
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
                <GitHubIcon fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                size="small"
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
                <TelegramIcon fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                size="small"
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
                <InstagramIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Box>
        </Stack>

        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.15)" }} />

        <Typography
          variant="body2"
          align="center"
          sx={{ opacity: 0.6, fontSize: "0.8rem" }}
        >
          © {new Date().getFullYear()} Booking App — training project.
        </Typography>
      </Container>

      <Zoom in>
        <Fab
          size="medium"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          sx={{
            position: "absolute",
            top: -24,
            right: { xs: 16, sm: 32 },
            bgcolor: "#F5A623",
            color: "#0F3D5C",
            boxShadow: "0 6px 18px rgba(245, 166, 35, 0.4)",
            transition: "all 0.25s ease",
            "&:hover": {
              bgcolor: "#FFC35C",
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
