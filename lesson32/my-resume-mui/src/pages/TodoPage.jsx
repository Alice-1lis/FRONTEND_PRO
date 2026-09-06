import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
  Paper,
  CircularProgress,
  Alert,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import {
  fetchTodos,
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodo,
  clearTodos,
} from "../store/todo/todoSlice";

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
    <Container
      maxWidth="sm"
      sx={{ py: { xs: 4, sm: 6 }, px: { xs: 2, sm: 3 } }}
    >
      <Typography
        variant="h4"
        sx={{ mb: 3, fontSize: { xs: "1.6rem", sm: "2.125rem" } }}
      >
        Мій список задач
      </Typography>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={1} sx={{ mb: 3 }}>
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
          sx={{ width: { xs: "100%", sm: "auto" }, whiteSpace: "nowrap" }}
        >
          Додати
        </Button>
      </Stack>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          Помилка: {error}
        </Alert>
      )}

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Paper variant="outlined">
          <List>
            {items.length === 0 && (
              <ListItem>
                <ListItemText primary="Задач поки немає" />
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
                }}
                secondaryAction={
                  editingId === todo.id ? (
                    <IconButton
                      size="small"
                      edge="end"
                      aria-label="Зберегти"
                      onClick={() => handleSave(todo.id)}
                      sx={{ mt: 0.5 }}
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
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        edge="end"
                        aria-label="Видалити"
                        onClick={() => handleDelete(todo.id)}
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
                      textDecoration: todo.completed ? "line-through" : "none",
                      color: todo.completed ? "text.secondary" : "text.primary",
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
  );
}

export default TodoPage;
