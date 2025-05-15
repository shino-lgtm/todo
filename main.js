let todos = JSON.parse(localStorage.getItem('todoItems') || '[]');
const todoList = document.getElementById('todoList');
const addForm = document.getElementById('addForm');
const newTodo = document.getElementById('newTodo');

function saveTodos() {
  localStorage.setItem('todoItems', JSON.stringify(todos));
}

function renderList() {
  todoList.innerHTML = '';
  todos.forEach((item, index) => {
    const li = document.createElement('li');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.done;
    checkbox.addEventListener('change', () => {
      item.done = checkbox.checked;
      saveTodos();
    });
    label.appendChild(checkbox);
    label.append(item.text);
    li.appendChild(label);
    todoList.appendChild(li);
  });
}

addForm.addEventListener('submit', e => {
  e.preventDefault();
  const text = newTodo.value.trim();
  if (text) {
    todos.push({ text: text, done: false });
    saveTodos();
    renderList();
    newTodo.value = '';
  }
});

document.getElementById('resetBtn').addEventListener('click', () => {
  todos = [];
  saveTodos();
  renderList();
});

renderList();
