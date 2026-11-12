import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Paper, Alert, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BookingForm from "../components/BookingForm";
import BookingDecor from "../components/BookingDecor";
import { fetchDestinationsRequest } from "../store/destinations/destinationsActions";
import {
  searchHotelsRequest,
  resetHotelsStatus,
} from "../store/hotels/hotelsActions";

const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { list: destinations, loading: destinationsLoading } = useSelector(
    (state) => state.destinations,
  );
  const {
    loading: hotelsLoading,
    status,
    error,
  } = useSelector((state) => state.hotels);

  useEffect(() => {
    dispatch(fetchDestinationsRequest());
  }, [dispatch]);

  useEffect(() => {
    if (status === "success") {
      navigate("/hotels");
      dispatch(resetHotelsStatus());
    }
  }, [status, navigate, dispatch]);

  const handleSubmit = (values) => {
    dispatch(searchHotelsRequest(values));
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Paper
        sx={{
          px: { xs: 3.5, sm: 4, md: 5 },
          py: { xs: 3, sm: 4, md: 5 },
          borderRadius: 4,
          boxShadow: "0 8px 32px rgba(15, 61, 92, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontSize: { xs: "1.75rem", sm: "2.125rem" },
            background: "linear-gradient(90deg, #0F3D5C, #F5A623)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          {t("main.title")}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {t("main.subtitle")}
        </Typography>

        {status === "error" && (
          <Alert severity="error" sx={{ mt: 2, borderRadius: 2 }}>
            {error || t("main.error")}
          </Alert>
        )}

        <BookingForm
          destinations={destinations}
          loading={destinationsLoading || hotelsLoading}
          onSubmit={handleSubmit}
        />
      </Paper>
      <BookingDecor />
    </Box>
  );
};

export default Main;
