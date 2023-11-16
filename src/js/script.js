// metodo para checar a tarefa
const checkTask = (e) => {
  const button = e.currentTarget;
  const checkbox = button.querySelector('.checkbox');
  const task = button.querySelector('.task');
  task.classList.toggle('line-through');
  task.classList.contains('line-through') ? (checkbox.checked = true) : (checkbox.checked = false);
};
