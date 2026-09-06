import {
  Container,
  Box,
  Typography,
  Chip,
  Stack,
  Grid,
  Paper,
  Divider,
} from "@mui/material";

const skills = ["JavaScript", "React", "MUI", "HTML/CSS", "Git", "Node.js"];

const experience = [
  {
    role: "Frontend-розробник",
    company: "Компанія А",
    period: "2026 — тепер",
    description: "Розробка та підтримка веб-застосунків на React.",
  },
];

const education = [
  { degree: "Навчання", place: "Ком'пютерна школа 'Hillel'", period: "2026" },
];

function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "center", sm: "flex-start" },
          textAlign: { xs: "center", sm: "left" },
          gap: { xs: 3, sm: 4 },
          mb: 4,
        }}
      >
        <Box
          sx={{
            width: { xs: 140, sm: 200 },
            height: { xs: 140, sm: 260 },
            borderRadius: "24px",
            padding: "4px",
            background: "linear-gradient(135deg, #162d5d 0%, #E3D509 100%)",
            boxShadow: "0 12px 28px rgba(22, 45, 93, 0.35)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            flexShrink: 0,
            "&:hover": {
              transform: "translateY(-4px) scale(1.02)",
              boxShadow: "0 16px 36px rgba(22, 45, 93, 0.45)",
            },
          }}
        >
          <Box
            component="img"
            src="/avatar.jpg"
            alt="Avatar"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "20px",
              display: "block",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontSize: { xs: "1.5rem", sm: "2.125rem" } }}
          >
            Олеся Демидова
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
            Frontend-розробниця
          </Typography>
          <Typography variant="body1">
            Про мене: <br />
            Розробниця з досвідом створення сучасних веб-інтерфейсів на React та
            MUI. Люблю чистий зрозумілий код, зручний UX та вирішення різних
            задач.
          </Typography>
        </Box>
      </Box>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Технології якими володію:
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        useFlexGap
        sx={{ flexWrap: "wrap", mb: 4 }}
      >
        {skills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            sx={{
              borderRadius: 999,
              fontWeight: 600,
              px: 0.5,
              color: "#4C3FCF",
              backgroundColor: "rgba(92, 78, 229, 0.08)",
              border: "1.5px solid rgba(92, 78, 229, 0.4)",
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: "rgba(92, 78, 229, 0.18)",
                transform: "translateY(-2px)",
              },
            }}
          />
        ))}
      </Stack>
      <Divider sx={{ mb: 4 }} />
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
        <Box
          sx={{ width: 4, height: 24, borderRadius: 1, bgcolor: "#E3D509" }}
        />
        <Typography variant="h5">Досвід роботи</Typography>
      </Box>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {experience.map((item) => (
          <Grid size={{ xs: 12 }} key={item.role + item.company}>
            <Paper variant="outlined" sx={{ p: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {item.role} — {item.company}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {item.period}
              </Typography>
              <Typography variant="body2">{item.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ mb: 4 }} />
      <Typography variant="h5" sx={{ mb: 2 }}>
        Освіта
      </Typography>
      <Grid container spacing={2}>
        {education.map((item) => (
          <Grid size={{ xs: 12 }} key={item.degree}>
            <Paper variant="outlined" sx={{ p: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {item.degree}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.place} · {item.period}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomePage;
