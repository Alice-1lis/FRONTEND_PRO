import { useSelector } from "react-redux";
import { Typography, Grid, Alert, Box } from "@mui/material";
import HotelCard from "../components/HotelCard";

const Favorites = () => {
  const { list: favorites } = useSelector((state) => state.favorites);
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
        Your Favorites
      </Typography>
      {favorites.length === 0 && (
        <Alert severity="info" sx={{ borderRadius: 2 }}>
          You haven't saved any hotels yet. Tap the heart icon on a hotel card
          to add it here.
        </Alert>
      )}
      <Grid container spacing={{ xs: 2, sm: 3 }} sx={{ mt: 1 }}>
        {favorites.map((hotel) => (
          <Grid key={hotel.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <HotelCard hotel={hotel} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Favorites;
