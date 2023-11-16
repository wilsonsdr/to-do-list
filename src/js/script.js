// metodo para checar a tarefa
const checkTask = (e) => {
  const button = e.currentTarget;
  const checkbox = button.querySelector('.checkbox');
  const task = button.querySelector('.name-task');
  task.classList.toggle('line-through');
  task.classList.contains('line-through') ? (checkbox.checked = true) : (checkbox.checked = false);
};

// metodo para adicionar tarefa
const addTask = (e) => {
  if (e.key === 'Enter') {
    createElements();
  }
};

const userInput = document.getElementById('user-input');
userInput.addEventListener('keyup', addTask);

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
  label.classList.add('cursor-pointer', 'name-task');
  label.textContent = userInput.value;

  button.appendChild(input);
  button.appendChild(label);

  button = document.createElement('button');
  li.appendChild(button);

  const i = document.createElement('i');
  i.classList.add('fa-solid', 'fa-xmark', 'w-4', 'h-4', 'text-btn-color');
  button.appendChild(i);

  userInput.value = '';
};
