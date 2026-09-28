import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography, Paper, Alert } from "@mui/material";
import BookingForm from "../components/BookingForm";
import { fetchDestinationsRequest } from "../store/destinations/destinationsActions";
import {
  searchHotelsRequest,
  resetHotelsStatus,
} from "../store/hotels/hotelsActions";

const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
          background: "linear-gradient(90deg, #0F3D5C, #F5A623)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
        }}
      >
        Find your next stay
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Fill in the form below and we'll show you available hotels.
      </Typography>
      {status === "error" && (
        <Alert severity="error" sx={{ mt: 2, borderRadius: 2 }}>
          {error || "Something went wrong while searching for hotels."}
        </Alert>
      )}
      <BookingForm
        destinations={destinations}
        loading={destinationsLoading || hotelsLoading}
        onSubmit={handleSubmit}
      />
    </Paper>
  );
};

export default Main;
