document.getElementById('add-button').addEventListener('click', function () {
  const todoName = document.getElementById('todo-name').value.trim();
  const todoDate = document.getElementById('todo-date').value;

  if (!todoName || !todoDate) {
    alert('Please enter both a todo name and a date.');
    return;
  }

  const todoList = document.getElementById('todo-list');

  const listItem = document.createElement('li');
  listItem.className = 'todo-item';

  const content = document.createElement('span');
  content.textContent = `${todoName} - ${todoDate}`;
  content.addEventListener('click', function () {
    listItem.classList.toggle('completed');
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-btn';
  deleteButton.addEventListener('click', function () {
    todoList.removeChild(listItem);
  });

  listItem.appendChild(content);
  listItem.appendChild(deleteButton);

  todoList.appendChild(listItem);

  document.getElementById('todo-name').value = '';
  document.getElementById('todo-date').value = '';
});
