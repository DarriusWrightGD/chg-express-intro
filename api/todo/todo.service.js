const NotFoundError = require('./../errors/not-found.error');

const todos = []
let todoId = 0;

module.exports = {
  getTodos() {
    return Promise.resolve(todos)
  },
  getTodo(id) {
    const todo = todos.find(t => t.id === +id);

    if (!todo) {
      return Promise.reject(new NotFoundError(`The todo item with id ${id} not found`))
    }

    return Promise.resolve(todo);
  },
  addTodo(todo) {
    todos.push({
      id: todoId++,
      title: todo.title
    });

    return Promise.resolve();
  },
  updateTodo(id, updates) {
    const index = todos.findIndex(t => t.id === +id);

    if (index === -1) {
      return Promise.reject(new NotFoundError(`The todo item with id ${id} not found`))
    }

    todos[index].title = updates.title;

    return Promise.resolve()
  },
  deleteTodo(id) {
    const index = todos.findIndex(t => t.id === +id);

    if (index === -1) {
      return Promise.reject(new NotFoundError(`The todo item with id ${id} not found`))
    }

    return Promise.resolve(todos.splice(index, 1)[0]);
  }
}