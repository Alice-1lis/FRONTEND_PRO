import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Box,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CheckIcon from "@mui/icons-material/Check";
import { toggleFavorite } from "../store/favorites/favoritesActions";
import { getHotelImage } from "../utils/getHotelImage";
import {
  getHotelInfo,
  getStayInfo,
  formatPrice,
  formatDecimal,
} from "../utils/getHotelInfo";
import HotelStars from "./HotelStars";
import ReviewScore from "./ReviewScore";

const perkSx = {
  display: "flex",
  alignItems: "center",
  gap: 0.5,
  color: "success.main",
  fontWeight: 600,
};

const HotelCard = ({ hotel }) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const isFavorite = useSelector((state) =>
    state.favorites.list.some((h) => h.id === hotel.id),
  );
  const searchParams = useSelector((state) => state.hotels.searchParams);
  const info = getHotelInfo(hotel);
  const { nights, guests } = getStayInfo(searchParams);
  const total = info.pricePerNight * nights;
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
        aria-label={
          isFavorite ? t("a11y.removeFavorite") : t("a11y.addFavorite")
        }
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
          <FavoriteIcon sx={{ color: "secondary.main" }} />
        ) : (
          <FavoriteBorderIcon sx={{ color: "primary.main" }} />
        )}
      </IconButton>
      <CardActionArea
        component={RouterLink}
        to={`/hotels/${hotel.id}`}
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "flex-start",
        }}
      >
        <Box sx={{ overflow: "hidden", aspectRatio: "1 / 1" }}>
          <CardMedia
            component="img"
            image={getHotelImage(hotel)}
            alt={hotel.name}
            loading="lazy"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              transition: "transform 0.35s ease",
              "&:hover": { transform: "scale(1.06)" },
            }}
          />
        </Box>

        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            gap: 0.75,
            width: "100%",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: "1.05rem",
              fontWeight: 700,
              lineHeight: 1.3,
              minHeight: "2.6em",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {hotel.name}
          </Typography>

          <HotelStars value={hotel.hotel_rating} />

          <Stack
            direction="row"
            spacing={0.5}
            sx={{ alignItems: "center", color: "text.secondary" }}
          >
            <LocationOnOutlinedIcon sx={{ fontSize: 16 }} />
            <Typography variant="body2" noWrap>
              {t(`cities.${hotel.city}`, { defaultValue: hotel.city })}
              {hotel.state ? `, ${hotel.state}` : ""} ·{" "}
              {t("card.fromCentre", {
                km: formatDecimal(info.distanceKm, i18n.language),
              })}
            </Typography>
          </Stack>
          <ReviewScore score={info.reviewScore} count={info.reviewCount} />
          <Box sx={{ mt: 0.5 }}>
            {info.freeCancellation && (
              <Typography variant="body2" sx={perkSx}>
                <CheckIcon sx={{ fontSize: 16 }} /> {t("card.freeCancellation")}
              </Typography>
            )}
            {info.breakfastIncluded && (
              <Typography variant="body2" sx={perkSx}>
                <CheckIcon sx={{ fontSize: 16 }} />{" "}
                {t("card.breakfastIncluded")}
              </Typography>
            )}
            {info.roomsLeft && (
              <Typography
                variant="body2"
                sx={{ color: "error.main", fontWeight: 600, mt: 0.5 }}
              >
                {t("card.roomsLeft", { n: info.roomsLeft })}
              </Typography>
            )}
          </Box>
          <Box sx={{ mt: "auto", pt: 1.5, textAlign: "right" }}>
            <Typography variant="caption" color="text.secondary">
              {t("stay.nights", { count: nights })},{" "}
              {t("stay.adults", { count: guests })}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
              {formatPrice(total, i18n.language)}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {t("card.taxes")}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HotelCard;
