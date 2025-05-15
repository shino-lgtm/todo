// ToDoリスト項目（ここに自由に追加できます）
const todos = ['雑巾がけ', '英語の勉強', 'ストレッチ', '洗濯', '日記を書く'];

const todoList = document.getElementById('todoList');

// チェック状態の保存と読み込み
function loadState() {
  return JSON.parse(localStorage.getItem('todoState') || '{}');
}

function saveState(state) {
  localStorage.setItem('todoState', JSON.stringify(state));
}

function renderList() {
  const state = loadState();
  todoList.innerHTML = '';
  todos.forEach((task, index) => {
    const li = document.createElement('li');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = state[index] || false;
    checkbox.addEventListener('change', () => {
      state[index] = checkbox.checked;
      saveState(state);
    });
    label.appendChild(checkbox);
    label.append(task);
    li.appendChild(label);
    todoList.appendChild(li);
  });
}

document.getElementById('resetBtn').addEventListener('click', () => {
  localStorage.removeItem('todoState');
  renderList();
});

renderList();
