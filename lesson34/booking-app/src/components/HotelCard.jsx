import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Stack,
  Box,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { toggleFavorite } from "../store/favorites/favoritesActions";

const HotelCard = ({ hotel }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) =>
    state.favorites.list.some((h) => h.id === hotel.id),
  );

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleFavorite(hotel));
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <IconButton
        onClick={handleFavoriteClick}
        aria-label="Toggle favorite"
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          zIndex: 2,
          bgcolor: "rgba(255,255,255,0.9)",
          "&:hover": { bgcolor: "#fff" },
        }}
        size="small"
      >
        {isFavorite ? (
          <FavoriteIcon sx={{ color: "#F5A623" }} />
        ) : (
          <FavoriteBorderIcon sx={{ color: "#0F3D5C" }} />
        )}
      </IconButton>

      <CardActionArea
        component={RouterLink}
        to={`/hotels/${hotel.id}`}
        sx={{ flexGrow: 1, alignItems: "stretch" }}
      >
        <Box sx={{ overflow: "hidden" }}>
          <CardMedia
            component="img"
            height="180"
            image={`https://picsum.photos/seed/${hotel.id}/400/200`}
            alt={hotel.name}
            sx={{
              transition: "transform 0.35s ease",
              "&:hover": { transform: "scale(1.06)" },
            }}
          />
        </Box>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" noWrap>
            {hotel.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {hotel.address}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {hotel.city}, {hotel.state} ({hotel.country_code})
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            sx={{ mt: 1, flexWrap: "wrap", alignItems: "center" }}
          >
            {hotel.hotel_rating != null && (
              <Chip
                label={`★ ${hotel.hotel_rating}`}
                color="primary"
                size="small"
              />
            )}
            {hotel.phone_number && (
              <Chip
                label={hotel.phone_number}
                variant="outlined"
                size="small"
              />
            )}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HotelCard;
