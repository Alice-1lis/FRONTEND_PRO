const URL = 'https://jsonplaceholder.typicode.com/todos';

async function handleResponse(res) {
  if (!res.ok) {
    throw new Error(`HTTP error: ${res.status}`);
  }
  const contentType = res.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return res.json();
  }
  return null;
}
export const fetchTodosApi = () =>
  fetch(`${URL}?_limit=10`).then(handleResponse);

export const addTodoApi = (todo) =>
  fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  }).then(handleResponse);
export const updateTodoApi = (todo) =>
  fetch(`${URL}/${todo.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  }).then(handleResponse);
export const deleteTodoApi = (id) =>
  fetch(`${URL}/${id}`, { method: 'DELETE' }).then(handleResponse);