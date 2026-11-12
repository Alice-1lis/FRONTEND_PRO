import { useState } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  Paper,
  Typography,
  Chip,
  Stack,
  Button,
  Box,
  Link,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckIcon from "@mui/icons-material/Check";
import PhoneIcon from "@mui/icons-material/Phone";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import KitchenIcon from "@mui/icons-material/Kitchen";
import SmokeFreeIcon from "@mui/icons-material/SmokeFree";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import PetsIcon from "@mui/icons-material/Pets";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import { getHotelImage } from "../utils/getHotelImage";
import {
  getHotelInfo,
  getStayInfo,
  formatPrice,
  formatDecimal,
} from "../utils/getHotelInfo";
import HotelStars from "../components/HotelStars";
import ReviewScore from "../components/ReviewScore";

const AMENITY_ICONS = {
  wifi: WifiIcon,
  parking: LocalParkingIcon,
  breakfast: FreeBreakfastIcon,
  ac: AcUnitIcon,
  kitchen: KitchenIcon,
  nonsmoking: SmokeFreeIcon,
  family: FamilyRestroomIcon,
  pets: PetsIcon,
  shuttle: AirportShuttleIcon,
};

const perkSx = {
  display: "flex",
  alignItems: "center",
  gap: 0.75,
  color: "success.main",
  fontWeight: 600,
};

// Дата у форматі поточної мови: "18 листопада 2026 р." / "18 November 2026"
const formatDate = (value, lng) => {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return date.toLocaleDateString(lng?.startsWith("uk") ? "uk-UA" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const SummaryRow = ({ label, value, bold = false }) => (
  <Stack direction="row" sx={{ justifyContent: "space-between", gap: 2 }}>
    <Typography variant="body2" color="text.secondary">
      {label}
    </Typography>
    <Typography
      variant="body2"
      sx={{ fontWeight: bold ? 800 : 600, textAlign: "right" }}
    >
      {value}
    </Typography>
  </Stack>
);

const HotelDetails = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const { list: hotels, searchParams } = useSelector((state) => state.hotels);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const hotel = hotels.find((h) => String(h.id) === id);

  if (!hotel) {
    return (
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          {t("details.notFoundTitle")}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {t("details.notFoundText")}
        </Typography>
        <Button component={RouterLink} to="/" startIcon={<ArrowBackIcon />}>
          {t("common.backToSearch")}
        </Button>
      </Paper>
    );
  }

  const lng = i18n.language;
  const info = getHotelInfo(hotel);
  const { nights, guests } = getStayInfo(searchParams);
  const total = info.pricePerNight * nights;
  const cityLabel = t(`cities.${hotel.city}`, { defaultValue: hotel.city });
  const handleConfirm = () => {
    setBookingOpen(false);
    setBookingRef(`BK-${hotel.id}-${String(Date.now()).slice(-5)}`);
    setSnackOpen(true);
  };

  return (
    <Paper sx={{ p: { xs: 2.5, sm: 4 } }}>
      <Button
        component={RouterLink}
        to="/hotels"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 2 }}
      >
        {t("common.backToResults")}
      </Button>
      <Box
        component="img"
        src={getHotelImage(hotel)}
        alt={hotel.name}
        sx={{
          width: "100%",
          height: { xs: 220, sm: 320, md: 400 },
          objectFit: "cover",
          borderRadius: 2,
          mb: 3,
        }}
      />

      <Grid container spacing={{ xs: 3, md: 4 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Stack
            direction="row"
            spacing={1.5}
            sx={{ alignItems: "center", flexWrap: "wrap", mb: 0.5 }}
          >
            <Typography variant="h4">{hotel.name}</Typography>
            <HotelStars value={hotel.hotel_rating} size="medium" />
          </Stack>

          <Stack
            direction="row"
            spacing={0.75}
            sx={{ alignItems: "center", color: "text.secondary", mb: 3 }}
          >
            <LocationOnIcon sx={{ fontSize: 20, color: "primary.main" }} />
            <Typography variant="body1">
              {hotel.address}, {cityLabel}
              {hotel.state ? `, ${hotel.state}` : ""} ({hotel.country_code}) ·{" "}
              {t("card.fromCentre", {
                km: formatDecimal(info.distanceKm, lng),
              })}
            </Typography>
          </Stack>
          <Typography variant="h6" gutterBottom>
            {t("details.facilities")}
          </Typography>
          <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1, mb: 3 }}>
            {info.amenities.map((key) => {
              const Icon = AMENITY_ICONS[key];
              return (
                <Chip
                  key={key}
                  icon={<Icon />}
                  label={t(`amenities.${key}`)}
                  variant="outlined"
                />
              );
            })}
          </Stack>
          <Typography variant="h6" gutterBottom>
            {t("details.about")}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 3, lineHeight: 1.7 }}
          >
            {t(info.introKey, {
              name: hotel.name,
              city: cityLabel,
              km: formatDecimal(info.distanceKm, lng),
            })}{" "}
            {t(info.outroKey)}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {t("details.checkInOut")}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            {t("details.checkInOutText")}
          </Typography>
          {(hotel.phone_number || hotel.website) && (
            <>
              <Typography variant="h6" gutterBottom>
                {t("details.contacts")}
              </Typography>
              <Stack spacing={1}>
                {hotel.phone_number && (
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ alignItems: "center", color: "text.secondary" }}
                  >
                    <PhoneIcon sx={{ fontSize: 20 }} />
                    <Typography variant="body1">
                      {hotel.phone_number}
                    </Typography>
                  </Stack>
                )}
                {hotel.website && (
                  <Typography variant="body1">
                    <Link
                      href={hotel.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("details.website")}
                    </Link>
                  </Typography>
                )}
              </Stack>
            </>
          )}
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper
            variant="outlined"
            sx={{
              p: 2.5,
              borderRadius: 3,
              position: { md: "sticky" },
              top: { md: 110 },
            }}
          >
            <ReviewScore
              score={info.reviewScore}
              count={info.reviewCount}
              large
            />
            <Box
              sx={{
                mt: 2.5,
                pt: 2.5,
                borderTop: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                {t("stay.nights", { count: nights })},{" "}
                {t("stay.adults", { count: guests })}
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 800 }}>
                {formatPrice(total, lng)}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {t("card.taxes")} ·{" "}
                {t("details.perNight", {
                  price: formatPrice(info.pricePerNight, lng),
                })}
              </Typography>
            </Box>
            <Stack spacing={0.75} sx={{ mt: 2 }}>
              {info.freeCancellation && (
                <Typography variant="body2" sx={perkSx}>
                  <CheckIcon sx={{ fontSize: 18 }} />{" "}
                  {t("card.freeCancellation")}
                </Typography>
              )}
              <Typography variant="body2" sx={perkSx}>
                <CheckIcon sx={{ fontSize: 18 }} /> {t("details.noPrepayment")}
              </Typography>
              {info.breakfastIncluded && (
                <Typography variant="body2" sx={perkSx}>
                  <CheckIcon sx={{ fontSize: 18 }} />{" "}
                  {t("card.breakfastIncluded")}
                </Typography>
              )}
              {info.roomsLeft && (
                <Typography
                  variant="body2"
                  sx={{ color: "error.main", fontWeight: 600 }}
                >
                  {t("card.roomsLeft", { n: info.roomsLeft })}
                </Typography>
              )}
            </Stack>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              fullWidth
              onClick={(e) => {
                e.currentTarget.blur();
                setBookingOpen(true);
              }}
              sx={{ mt: 2.5, py: 1.3, fontSize: "1rem", borderRadius: 2.5 }}
            >
              {t("details.book")}
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <Dialog
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle sx={{ fontWeight: 700 }}>
          {t("details.bookTitle")}
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {hotel.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {hotel.address}, {cityLabel}
          </Typography>

          <Stack spacing={1.25}>
            <SummaryRow
              label={t("form.checkIn")}
              value={formatDate(searchParams?.checkIn, lng)}
            />
            <SummaryRow
              label={t("form.checkOut")}
              value={formatDate(searchParams?.checkOut, lng)}
            />
            <SummaryRow
              label={t("form.guests")}
              value={`${t("stay.nights", { count: nights })}, ${t(
                "stay.adults",
                { count: guests },
              )}`}
            />
            <SummaryRow
              label={t("details.total")}
              value={formatPrice(total, lng)}
              bold
            />
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setBookingOpen(false)}>
            {t("details.cancel")}
          </Button>
          <Button variant="contained" color="secondary" onClick={handleConfirm}>
            {t("details.confirm")}
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={(e, reason) => reason !== "clickaway" && setSnackOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setSnackOpen(false)}
          sx={{ borderRadius: 2 }}
        >
          {t("details.booked", { ref: bookingRef })}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default HotelDetails;
