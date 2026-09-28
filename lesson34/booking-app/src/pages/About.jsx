import { Paper, Typography, Box } from "@mui/material";

const About = () => (
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
        color: "primary.main",
        fontWeight: 700,
      }}
    >
      About us
    </Typography>
    <Box sx={{ borderLeft: "4px solid #F5A623", pl: 2, mb: 2 }}>
      <Typography variant="body1" color="text.secondary">
        Booking App helps you find and book the right place to stay, wherever
        you're headed. Search by destination, set your dates, and see real
        results in seconds. Once results are in, you'll land straight on a
        curated list of hotels that match what you're looking for. Save the
        places you like with a tap of the heart icon, and come back to them
        anytime from your Favorites.
      </Typography>
    </Box>
    <Typography variant="body1" color="text.secondary">
      Users can search for hotels by destination on the Main page.
    </Typography>
  </Paper>
);

export default About;
