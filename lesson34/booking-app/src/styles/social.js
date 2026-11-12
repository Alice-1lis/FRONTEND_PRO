import { alpha } from "@mui/material/styles";

export const socialButtonSx = (theme) => ({
  color: "rgba(255,255,255,0.85)",
  border: "1px solid rgba(255,255,255,0.2)",
  "&:hover": {
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    bgcolor: alpha(theme.palette.secondary.main, 0.1),
  },
});
