import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSwapiData, clearSwapiData } from "../store/swapi/swapiSlice";
import {
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
  CircularProgress,
  Alert,
  Box,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearAllIcon from "@mui/icons-material/ClearAll";

const BASE_URL = "https://swapi.py4e.com/api/";

const SwapiPage = () => {
  const [endpoint, setEndpoint] = useState("people/1");
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.swapi);

  const handleGetInfo = () => {
    if (!endpoint.trim()) return;
    dispatch(fetchSwapiData(endpoint.trim()));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") handleGetInfo();
  };

  const handleClear = () => {
    dispatch(clearSwapiData());
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 1 }}>
        SWAPI — запит даних
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Введи ендпоінт (наприклад, <code>people/1</code>, <code>planets/1</code>
        , <code>starships/9</code>) і отримай дані зі Star Wars API.
      </Typography>

      <Stack spacing={2} sx={{ mb: 3 }}>
        <TextField
          label="Базова адреса"
          value={BASE_URL}
          InputProps={{ readOnly: true }}
          size="small"
        />
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
          <TextField
            fullWidth
            size="small"
            label="Ендпоінт"
            placeholder="people/1"
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}
            onKeyDown={handleKeyDown}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            onClick={handleGetInfo}
            sx={{ whiteSpace: "nowrap" }}
          >
            Get info
          </Button>
        </Stack>
      </Stack>

      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          Помилка: {error}
        </Alert>
      )}

      {data && (
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            mb: 2,
            maxHeight: 400,
            overflow: "auto",
            bgcolor: "background.default",
          }}
        >
          <Box
            component="pre"
            sx={{
              m: 0,
              fontFamily: "monospace",
              fontSize: 13,
              whiteSpace: "pre-wrap",
            }}
          >
            {JSON.stringify(data, null, 2)}
          </Box>
        </Paper>
      )}

      {data && (
        <Button
          variant="outlined"
          color="error"
          startIcon={<ClearAllIcon />}
          onClick={handleClear}
        >
          Clear
        </Button>
      )}
    </Container>
  );
};

export default SwapiPage;
