const express = require('express');
const app = express();
const todoRouter = express.Router();

let todoId = 0;
const todos = [];

todoRouter.get('/', (req, res) => {
  res.send(todos);
})

todoRouter.get('/:id', (req, res) => {
  const todo = todos.find(t => t.id === +req.params.id);
  res.send(todo)
})

todoRouter.post('/', (req, res) => {
  todos.push({
    id: todoId++,
    title: req.body.title
  });

  res.sendStatus(204);
})

todoRouter.put('/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === +req.params.id);
  todos[index].title = req.body.title;

  res.sendStatus(200);
})

todoRouter.delete('/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === +req.params.id);
  res.send(todos.splice(index, 1)[0])
})

app.use(express.json());
app.use('/todos', todoRouter);

app.listen(3000);