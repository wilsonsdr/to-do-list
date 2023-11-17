var arr = [];

// metodo para adicionar tarefa
const addTask = (e) => {
  if (e.key === 'Enter' && isNaN(userInput.value) && userInput.value.length > 2 && !checkExistingTasks()) {
    createElements();
  }
};

const userInput = document.getElementById('user-input');
userInput.addEventListener('keyup', addTask);

// metodo para verificar tarefa existentes
const checkExistingTasks = () => {
  const task = document.querySelectorAll('.task-name');
  let taskExists = false;

  for (let value of task) {
    if (value.textContent === userInput.value) {
      taskExists = true;
      break;
    }
  }

  return taskExists;
};

// metodo para criar elementos
const createElements = () => {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.classList.add('flex', 'items-center', 'justify-between');
  ul.appendChild(li);

  var button = document.createElement('button');
  button.addEventListener('click', checkTask);
  button.classList.add('flex', 'items-center', 'gap-3', 'checkbox');

  li.appendChild(button);

  const input = document.createElement('input');
  input.classList.add('w-4', 'h-4', 'cursor-pointer', 'checkbox');
  input.type = 'checkbox';

  const label = document.createElement('label');
  label.classList.add('cursor-pointer', 'task-name');
  label.textContent = userInput.value;

  button.appendChild(input);
  button.appendChild(label);

  button = document.createElement('button');
  button.addEventListener('click', clearTask);
  li.appendChild(button);

  const i = document.createElement('i');
  i.classList.add('fa-solid', 'fa-xmark', 'w-4', 'h-4', 'text-btn-color');
  button.appendChild(i);

  arr.push(userInput.value);
  localStorage.setItem('tasks', JSON.stringify(arr));

  userInput.value = '';
};

// metodo para checar a tarefa
const checkTask = (e) => {
  const button = e.currentTarget;
  const checkbox = button.querySelector('.checkbox');
  const task = button.querySelector('.task-name');

  task.classList.toggle('line-through');
  task.classList.contains('line-through') ? (checkbox.checked = true) : (checkbox.checked = false);
};

// metodo para mostrar tarefas realizadas
const showDoneTasks = () => {
  const lis = document.querySelectorAll('li');

  lis.forEach((item) => {
    const task = item.querySelector('.task-name');
    if (!task.classList.contains('line-through')) {
      item.classList.add('hidden');
    } else {
      item.classList.remove('hidden');
    }
  });
};

// metodo para mostrar tarefas pendentes
const showPendingTasks = () => {
  const lis = document.querySelectorAll('li');

  lis.forEach((item) => {
    const task = item.querySelector('.task-name');
    if (task.classList.contains('line-through')) {
      item.classList.add('hidden');
    } else {
      item.classList.remove('hidden');
    }
  });
};

// metodo para mostrar todas tarefas
const showAllTasks = () => {
  const lis = document.querySelectorAll('li');

  lis.forEach((item) => {
    const task = item.querySelector('.task-name');
    if (task.classList.contains('line-through')) {
      item.classList.remove('hidden');
    } else {
      item.classList.remove('hidden');
    }
  });
};

// metodo para remover todas tarefas
const clearAllTasks = () => {
  const lis = document.querySelectorAll('li');

  lis.forEach((item) => {
    item.remove();
  });

  localStorage.removeItem('tasks');

  userInput.value = '';
};

// metodo para remover tarefa
const clearTask = (e) => {
  const button = e.currentTarget;
  const li = button.closest('li');
  li.remove();

  // remover a tarefa do array e atualizar o local storage
  const task = li.querySelector('.task-name').textContent;
  arr = arr.filter((value) => value !== task);
  localStorage.setItem('tasks', JSON.stringify(arr));
};

// verifica se há tarefas ao carregar a página
window.addEventListener('load', () => {
  const savedTasks = localStorage.getItem('tasks');

  if (savedTasks) {
    const savedTasksArray = JSON.parse(savedTasks);

    savedTasksArray.forEach((task) => {
      userInput.value = task;
      createElements();
    });
  }
});
