import { Form, Field } from "react-final-form";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Grid,
  CircularProgress,
} from "@mui/material";

const required = (value) => (value ? undefined : "Required field");

const BookingForm = ({ destinations, loading, onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine }) => (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Field name="destination" validate={required}>
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    select
                    fullWidth
                    label="Destination"
                    error={meta.touched && !!meta.error}
                    helperText={meta.touched && meta.error}
                  >
                    {destinations.map((dest) => (
                      <MenuItem key={dest.id} value={dest.name}>
                        {dest.name}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              </Field>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Field name="guests" validate={required}>
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    type="number"
                    fullWidth
                    label="Guests"
                    slotProps={{ htmlInput: { min: 1 } }}
                    error={meta.touched && !!meta.error}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Field name="checkIn" validate={required}>
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    type="date"
                    fullWidth
                    label="Check-in"
                    slotProps={{ inputLabel: { shrink: true } }}
                    error={meta.touched && !!meta.error}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Field name="checkOut" validate={required}>
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    type="date"
                    fullWidth
                    label="Check-out"
                    slotProps={{ inputLabel: { shrink: true } }}
                    error={meta.touched && !!meta.error}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                size="large"
                fullWidth={false}
                sx={{
                  width: { xs: "100%", sm: "auto" },
                  px: 4,
                  py: 1.3,
                  fontSize: "1rem",
                }}
                disabled={submitting || pristine || loading}
                startIcon={
                  loading ? (
                    <CircularProgress size={18} color="inherit" />
                  ) : null
                }
              >
                Search Hotels
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    />
  );
};

export default BookingForm;
