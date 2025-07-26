function addTask() {
  const input = document.getElementById('inputTask');
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  li.onclick = function() {
    li.style.textDecoration = li.style.textDecoration === 'line-through' ? 'none' : 'line-through';
  };

  li.ondblclick = function() {
    li.remove();
  };

  document.getElementById('taskList').appendChild(li);
  input.value = '';
}
