document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('create-task-form').addEventListener('submit', (e) =>{
    e.preventDefault()

    buildToDo(e.target.elements["new-task-description"].value,
              e.target.elements["priority-dropdown"].value,
              e.target.elements["new-task-duration"].value)
  })
});

function buildToDo(todo, priority, duration) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${todo}. Time: ${duration}  `
  switch (priority) {
    case 'high':
      p.style.color = 'red';
      break;
    case 'medium':
      p.style.color = 'yellow';
      break;
    case 'low':
      p.style.color = 'green';
      break;
    default:
      break;
  }
  p.appendChild(btn)
  document.getElementById('tasks').appendChild(p)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}