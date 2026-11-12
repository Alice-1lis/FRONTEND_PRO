import { useSelector } from "react-redux";
import { Typography, Grid, Alert, CircularProgress, Box } from "@mui/material";
import HotelCard from "../components/HotelCard";
import { useTranslation } from "react-i18next";

const Hotels = () => {
  const {
    list: hotels,
    loading,
    error,
    searchParams,
  } = useSelector((state) => state.hotels);
  const { t } = useTranslation();
  const hasSearched = Boolean(searchParams && searchParams.destination);

  return (
    <Box>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontSize: { xs: "1.75rem", sm: "2.125rem" },
          fontWeight: 700,
          color: "primary.main",
        }}
      >
        {t("hotels.title")}
      </Typography>

      {loading && (
        <CircularProgress
          color="secondary"
          sx={{ display: "block", mx: "auto", my: 4 }}
        />
      )}
      {error && (
        <Alert severity="error" sx={{ borderRadius: 2 }}>
          {error}
        </Alert>
      )}
      {!loading && !error && hotels.length === 0 && (
        <Alert severity="info" sx={{ borderRadius: 2 }}>
          {hasSearched ? t("hotels.noResults") : t("hotels.empty")}
        </Alert>
      )}

      <Grid container spacing={{ xs: 2, sm: 3 }} sx={{ mt: 1 }}>
        {hotels.map((hotel) => (
          <Grid key={hotel.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <HotelCard hotel={hotel} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Hotels;
