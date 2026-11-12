import { Form, Field } from "react-final-form";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Grid,
  CircularProgress,
  InputAdornment,
} from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import EventBusyOutlinedIcon from "@mui/icons-material/EventBusyOutlined";
import { useTranslation } from "react-i18next";

const required = (value) => (value ? undefined : "form.required");
const toInputDate = (d) => d.toLocaleDateString("sv-SE");
const addDays = (dateStr, n) => {
  const d = new Date(dateStr + "T00:00:00");
  d.setDate(d.getDate() + n);
  return toInputDate(d);
};

const checkOutValidator = (value, allValues) => {
  if (!value) return "form.required";
  if (allValues.checkIn && value <= allValues.checkIn) {
    return "form.checkOutAfter";
  }
  return undefined;
};

const startIcon = (Icon) => ({
  startAdornment: (
    <InputAdornment position="start">
      <Icon fontSize="small" />
    </InputAdornment>
  ),
});

const mobileSx = {
  "& .MuiOutlinedInput-input": {
    py: { xs: 1.5, sm: 2 },
    fontSize: { xs: "0.95rem", sm: "1rem" },
  },
  "& input[type='date']": { minHeight: "1.4375em" },
  "& .MuiFormHelperText-root": { mx: 0.5 },
};

const iconSx = {
  ...mobileSx,
  "& .MuiInputAdornment-root": { color: "secondary.main" },
  "& .Mui-focused .MuiInputAdornment-root": { color: "secondary.dark" },
};

const labelOffsetSx = {
  ...iconSx,
  "& .MuiInputLabel-root:not(.MuiInputLabel-shrink)": {
    transform: {
      sx: "translate(44px, 12px) scale(1)",
      sm: "translate(44px, 12px) scale(1)",
    },
  },
};

const BookingForm = ({ destinations, loading, onSubmit }) => {
  const { t } = useTranslation();
  const today = toInputDate(new Date());

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine, form, values }) => (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: { xs: 1.5, sm: 2 } }}
        >
          <Grid container spacing={{ xs: 1.5, sm: 2 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Field name="destination" validate={required}>
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    select
                    fullWidth
                    label={t("form.destination")}
                    sx={labelOffsetSx}
                    slotProps={{ input: startIcon(PlaceOutlinedIcon) }}
                    error={meta.touched && !!meta.error}
                    helperText={meta.touched && meta.error ? t(meta.error) : ""}
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
                    label={t("form.guests")}
                    sx={labelOffsetSx}
                    slotProps={{
                      input: startIcon(PeopleOutlinedIcon),
                      htmlInput: { min: 1 },
                    }}
                    error={meta.touched && !!meta.error}
                    helperText={meta.touched && meta.error ? t(meta.error) : ""}
                  />
                )}
              </Field>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Field name="checkIn" validate={required}>
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    onChange={(e) => {
                      input.onChange(e);
                      if (
                        values.checkOut &&
                        values.checkOut <= e.target.value
                      ) {
                        form.change("checkOut", "");
                      }
                    }}
                    type="date"
                    fullWidth
                    label={t("form.checkIn")}
                    sx={iconSx}
                    slotProps={{
                      inputLabel: { shrink: true },
                      input: startIcon(EventAvailableOutlinedIcon),
                      htmlInput: { min: today },
                    }}
                    error={meta.touched && !!meta.error}
                    helperText={meta.touched && meta.error ? t(meta.error) : ""}
                  />
                )}
              </Field>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Field name="checkOut" validate={checkOutValidator}>
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    type="date"
                    fullWidth
                    label={t("form.checkOut")}
                    sx={iconSx}
                    slotProps={{
                      inputLabel: { shrink: true },
                      input: startIcon(EventBusyOutlinedIcon),
                      htmlInput: {
                        min: values.checkIn
                          ? addDays(values.checkIn, 1)
                          : addDays(today, 1),
                      },
                    }}
                    error={meta.touched && !!meta.error}
                    helperText={meta.touched && meta.error ? t(meta.error) : ""}
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
                {t("form.search")}
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    />
  );
};

export default BookingForm;
