import { Link as RouterLink } from "react-router-dom";
import { Paper, Typography, Button, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const NotFound = () => (
  <Paper sx={{ p: 6, textAlign: "center" }}>
    <Typography
      variant="h1"
      sx={{ fontSize: 96, fontWeight: 700, color: "primary.main" }}
    >
      404
    </Typography>
    <Typography variant="h5" gutterBottom>
      Page not found
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
      The page you're looking for doesn't exist.
    </Typography>
    <Box>
      <Button
        component={RouterLink}
        to="/"
        variant="contained"
        startIcon={<HomeIcon />}
      >
        Back to Main
      </Button>
    </Box>
  </Paper>
);

export default NotFound;
