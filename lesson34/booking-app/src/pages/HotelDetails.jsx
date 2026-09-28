import { useParams, Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Paper,
  Typography,
  Chip,
  Stack,
  Button,
  Box,
  Link,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const HotelDetails = () => {
  const { id } = useParams();
  const { list: hotels } = useSelector((state) => state.hotels);

  const hotel = hotels.find((h) => String(h.id) === id);

  if (!hotel) {
    return (
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Hotel not found
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          This can happen if you open the link directly without doing a search
          first, since results are only kept in memory. Please go back to Main
          and search again.
        </Typography>
        <Button component={RouterLink} to="/" startIcon={<ArrowBackIcon />}>
          Back to search
        </Button>
      </Paper>
    );
  }

  return (
    <Paper sx={{ p: 4 }}>
      <Button
        component={RouterLink}
        to="/hotels"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 2 }}
      >
        Back to results
      </Button>

      <Box
        component="img"
        src={`https://picsum.photos/seed/${hotel.id}/900/350`}
        alt={hotel.name}
        sx={{
          width: "100%",
          maxHeight: 350,
          objectFit: "cover",
          borderRadius: 2,
          mb: 3,
        }}
      />

      <Typography variant="h4" gutterBottom>
        {hotel.name}
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
        {hotel.address}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        {hotel.city}, {hotel.state} ({hotel.country_code})
      </Typography>

      <Stack
        direction="row"
        spacing={1}
        sx={{ mb: 3, flexWrap: "wrap", alignItems: "center" }}
      >
        {hotel.hotel_rating != null && (
          <Chip label={`★ ${hotel.hotel_rating}`} color="primary" />
        )}
        {hotel.phone_number && (
          <Chip label={hotel.phone_number} variant="outlined" />
        )}
      </Stack>

      {hotel.website && (
        <Typography variant="body1">
          <Link href={hotel.website} target="_blank" rel="noopener noreferrer">
            Visit website
          </Link>
        </Typography>
      )}
    </Paper>
  );
};

export default HotelDetails;
