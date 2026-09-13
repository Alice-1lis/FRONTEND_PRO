import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useDispatch, useSelector } from "react-redux";
import { vi, describe, test, expect, beforeEach } from "vitest";
import { addTodo, toggleTodo } from "./todoSlice";
import TodoPage from "./TodoPage";

vi.mock("react-redux", () => ({
  useDispatch: vi.fn(),
  useSelector: vi.fn(),
}));
vi.mock("./todoSlice", () => ({
  fetchTodos: vi.fn(() => ({ type: "todo/fetchTodos" })),
  addTodo: vi.fn((text) => ({ type: "todo/addTodo", payload: text })),
  toggleTodo: vi.fn((id) => ({ type: "todo/toggleTodo", payload: id })),
  deleteTodo: vi.fn((id) => ({ type: "todo/deleteTodo", payload: id })),
  editTodo: vi.fn((payload) => ({ type: "todo/editTodo", payload })),
  clearTodos: vi.fn(() => ({ type: "todo/clearTodos" })),
}));

describe("TodoPage", () => {
  let mockDispatch;
  const setSelectorState = (state) => {
    useSelector.mockImplementation((selectorFn) => selectorFn({ todo: state }));
  };
  beforeEach(() => {
    mockDispatch = vi.fn();
    vi.clearAllMocks();
    useDispatch.mockReturnValue(mockDispatch);
  });

  test("сторінка має заголовок 'Мій список задач'", () => {
    setSelectorState({ items: [], loading: false, error: null });
    render(<TodoPage />);
    expect(
      screen.getByRole("heading", { name: /мій список задач/i }),
    ).toBeInTheDocument();
  });

  test("у поле для тексту можна ввести як цифри, так і букви", () => {
    setSelectorState({ items: [], loading: false, error: null });
    render(<TodoPage />);
    const input = screen.getByLabelText(/нова задача/i);
    fireEvent.change(input, { target: { value: "Прочитати ще одну книжку!" } });
    expect(input).toHaveValue("Прочитати ще одну книжку!");
  });

  test("після натискання 'Додати' без тексту задача не додається", () => {
    setSelectorState({ items: [], loading: false, error: null });
    render(<TodoPage />);
    const addButton = screen.getByRole("button", { name: /додати/i });
    fireEvent.click(addButton);
    expect(addTodo).not.toHaveBeenCalled();
  });

  test("після вписання тексту та натискання 'Додати' з'являється новий елемент у списку з потрібним текстом", () => {
    setSelectorState({ items: [], loading: false, error: null });
    const { rerender } = render(<TodoPage />);
    const input = screen.getByLabelText(/нова задача/i);
    const addButton = screen.getByRole("button", { name: /додати/i });
    fireEvent.change(input, { target: { value: "Піти на прогулянку" } });
    fireEvent.click(addButton);
    expect(addTodo).toHaveBeenCalledWith("Піти на прогулянку");

    setSelectorState({
      items: [{ id: 1, text: "Піти на прогулянку", completed: false }],
      loading: false,
      error: null,
    });
    rerender(<TodoPage />);
    expect(screen.getByText("Піти на прогулянку")).toBeInTheDocument();
  });

  test("викликає dispatch при кліку на чекбокс задачі", () => {
    setSelectorState({
      items: [{ id: 7, text: "Позначити виконаним", completed: false }],
      loading: false,
      error: null,
    });
    render(<TodoPage />);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(toggleTodo).toHaveBeenCalledWith(7);
  });

  test("показує CircularProgress, коли loading === true", () => {
    setSelectorState({ items: [], loading: true, error: null });
    render(<TodoPage />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
