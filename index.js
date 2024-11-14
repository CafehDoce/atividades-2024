
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [
  { id: 1, title: 'Tarefa 1', status: 'todo' },
  { id: 2, title: 'Tarefa 2', status: 'doing' },
  { id: 3, title: 'Tarefa 3', status: 'done' }
];


app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const { title, status } = req.body;
  const newTask = {
    id: tasks.length + 1,
    title,
    status: status || 'todo'
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, status } = req.body;
  const task = tasks.find(t => t.id === parseInt(id));

  if (task) {
    task.title = title || task.title;
    task.status = status || task.status;
    res.json(task);
  } else {
    res.status(404).json({ message: 'Tarefa não encontrada' });
  }
});

app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex(t => t.id === parseInt(id));

  if (taskIndex !== -1) {
    const deletedTask = tasks.splice(taskIndex, 1);
    res.json(deletedTask);
  } else {
    res.status(404).json({ message: 'Tarefa não encontrada' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
