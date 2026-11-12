import { Link as RouterLink } from "react-router-dom";
import { Paper, Typography, Button, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Paper sx={{ p: 6, textAlign: "center" }}>
      <Typography
        variant="h1"
        sx={{ fontSize: 96, fontWeight: 700, color: "primary.main" }}
      >
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        {t("notFound.title")}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {t("notFound.text")}
      </Typography>
      <Box>
        <Button
          component={RouterLink}
          to="/"
          variant="contained"
          startIcon={<HomeIcon />}
        >
          {t("notFound.button")}
        </Button>
      </Box>
    </Paper>
  );
};
export default NotFound;
