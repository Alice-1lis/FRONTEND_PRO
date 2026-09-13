import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Typography,
  Stack,
  TextField,
  Button,
  Alert,
  Box,
  CircularProgress,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  IconButton,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearAllIcon from "@mui/icons-material/ClearAll";

import {
  fetchTodos,
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodo,
  clearTodos,
} from "./todoSlice";

function TodoPage() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.todo);
  const [inputValue, setInputValue] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAdd = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    dispatch(addTodo(trimmed));
    setInputValue("");
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") handleAdd();
  };
  const handleToggle = (id) => dispatch(toggleTodo(id));
  const handleDelete = (id) => dispatch(deleteTodo(id));
  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };
  const handleSave = (id) => {
    if (!editText.trim()) return;
    dispatch(editTodo({ id, text: editText }));
    setEditingId(null);
    setEditText("");
  };
  const handleClear = () => dispatch(clearTodos());

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        py: { xs: 4, sm: 6 },
      }}
    >
      <Container maxWidth="sm" sx={{ px: { xs: 2, sm: 3 } }}>
        <Typography
          variant="h4"
          sx={{ mb: 3, fontSize: { xs: "1.7rem", sm: "2.1rem" } }}
        >
          Мій список задач
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          sx={{ mb: 3 }}
        >
          <TextField
            fullWidth
            label="Нова задача"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button
            variant="contained"
            onClick={handleAdd}
            sx={{
              width: { xs: "100%", sm: "auto" },
              whiteSpace: "nowrap",
              px: 3,
              boxShadow: "0 4px 14px rgba(61, 111, 180, 0.35)",
            }}
          >
            Додати
          </Button>
        </Stack>

        {error && (
          <Alert severity="error" sx={{ mb: 2, borderRadius: 2 }}>
            Помилка: {error}
          </Alert>
        )}

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
            <CircularProgress sx={{ color: "primary.main" }} />
          </Box>
        ) : (
          <Paper
            elevation={0}
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              bgcolor: "background.paper",
            }}
          >
            <Box
              sx={{
                bgcolor: "primary.dark",
                color: "#fff",
                px: 2.5,
                py: 1.2,
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              {items.length === 0
                ? "Список порожній"
                : `Активних задач: ${items.filter((t) => !t.completed).length} з ${items.length}`}
            </Box>

            <List sx={{ p: 0 }}>
              {items.length === 0 && (
                <ListItem sx={{ py: 4 }}>
                  <ListItemText
                    primary="Задач поки немає"
                    sx={{ textAlign: "center", color: "text.secondary" }}
                  />
                </ListItem>
              )}

              {items.map((todo) => (
                <ListItem
                  key={todo.id}
                  divider
                  sx={{
                    pr: { xs: 10, sm: 12 },
                    py: 1.5,
                    alignItems: "flex-start",
                    transition: "background-color 0.15s ease",
                    "&:hover": { bgcolor: "#F2F6FC" },
                  }}
                  secondaryAction={
                    editingId === todo.id ? (
                      <IconButton
                        size="small"
                        edge="end"
                        aria-label="Зберегти"
                        onClick={() => handleSave(todo.id)}
                        sx={{ mt: 0.5, color: "primary.main" }}
                      >
                        <SaveIcon fontSize="small" />
                      </IconButton>
                    ) : (
                      <Stack direction="row" spacing={0} sx={{ mt: 0.5 }}>
                        <IconButton
                          size="small"
                          edge="end"
                          aria-label="Редагувати"
                          onClick={() => startEditing(todo)}
                          sx={{ color: "text.secondary" }}
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          edge="end"
                          aria-label="Видалити"
                          onClick={() => handleDelete(todo.id)}
                          sx={{
                            color: "text.secondary",
                            "&:hover": { color: "error.main" },
                          }}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Stack>
                    )
                  }
                >
                  <ListItemIcon sx={{ minWidth: 40, mt: 0.5 }}>
                    <Checkbox
                      edge="start"
                      checked={todo.completed}
                      onChange={() => handleToggle(todo.id)}
                      sx={{
                        color: "#B9CCE8",
                        "&.Mui-checked": { color: "primary.main" },
                      }}
                    />
                  </ListItemIcon>

                  {editingId === todo.id ? (
                    <TextField
                      fullWidth
                      size="small"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                  ) : (
                    <ListItemText
                      primary={todo.text}
                      sx={{
                        pr: 1,
                        my: 0,
                        wordBreak: "break-word",
                        overflowWrap: "break-word",
                        textDecoration: todo.completed
                          ? "line-through"
                          : "none",
                        color: todo.completed
                          ? "text.secondary"
                          : "text.primary",
                      }}
                    />
                  )}
                </ListItem>
              ))}
            </List>
          </Paper>
        )}

        {items.length > 0 && (
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button
              variant="outlined"
              color="error"
              startIcon={<ClearAllIcon />}
              onClick={handleClear}
              sx={{ width: { xs: "100%", sm: "auto" } }}
            >
              Очистити
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default TodoPage;
