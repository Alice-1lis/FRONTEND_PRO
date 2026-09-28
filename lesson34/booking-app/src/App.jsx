import { Box } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          maxWidth: 1100,
          width: "100%",
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 3, sm: 4, md: 5 },
        }}
      >
        <AppRoutes />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
