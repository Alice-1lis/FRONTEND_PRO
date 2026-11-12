import { Paper, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const techKeys = [
  "ui",
  "routing",
  "forms",
  "state",
  "async",
  "i18n",
  "http",
  "server",
  "quality",
];

const About = () => {
  const { t } = useTranslation();

  return (
    <Paper
      sx={{
        p: { xs: 3, sm: 4, md: 5 },
        borderRadius: 4,
        boxShadow: "0 8px 32px rgba(15, 61, 92, 0.1)",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontSize: { xs: "1.75rem", sm: "2.125rem" },
          color: "primary.main",
          fontWeight: 700,
        }}
      >
        {t("about.title")}
      </Typography>
      <Box
        sx={{
          borderLeft: "4px solid",
          borderColor: "secondary.main",
          pl: 2,
          mb: 2,
        }}
      >
        <Typography variant="body1" color="text.secondary">
          {t("about.p1")} {t("about.p2")} {t("about.p3")}
        </Typography>
      </Box>

      <Box
        sx={{
          mt: 3,
          pt: 3,
          borderTop: "1px solid rgba(15, 61, 92, 0.12)",
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "primary.main", fontWeight: 700, mb: 1 }}
        >
          {t("about.techTitle")}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5 }}>
          {t("about.techIntro")}
        </Typography>

        <Box component="ul" sx={{ m: 0, pl: 3, color: "text.secondary" }}>
          {techKeys.map((key) => (
            <Typography
              component="li"
              variant="body1"
              key={key}
              sx={{ mb: 0.75 }}
            >
              <Box
                component="span"
                sx={{ fontWeight: 600, color: "primary.main" }}
              >
                {t(`about.tech.${key}.label`)}:
              </Box>{" "}
              {t(`about.tech.${key}.text`)}
            </Typography>
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default About;
