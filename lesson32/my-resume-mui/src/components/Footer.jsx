import { Box, Container, Typography, IconButton, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "light" ? "primary.main" : "primary.dark",
        color: "common.white",
        mt: "auto",
        py: 4,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Лого. Всі права захищено.
        </Typography>

        <Stack direction="row" spacing={1}>
          <IconButton
            component="a"
            href="mailto:your.email@example.com"
            aria-label="Email"
            color="inherit"
          >
            <EmailIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/Alice-1lis"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            color="inherit"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            color="inherit"
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
