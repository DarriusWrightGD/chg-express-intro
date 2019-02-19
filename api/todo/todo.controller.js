const todoService = require('./todo.service');

module.exports = {
  async getTodos(req, res) {
    res.send(await todoService.getTodos());
  },
  async getTodo(req, res) {
    const todo = await todoService.getTodo(req.params.id)
    res.send(todo)
  },
  async addTodo(req, res) {
    await todoService.addTodo(res.body);
    res.sendStatus(204)
  },
  async updateTodo(req, res) {
    await todoService.updateTodo(req.params.id, req.body);
    req.sendStatus(204);
  },
  async deleteTodo(req, res) {
    res.send(await todoService.deleteTodo(req.params.id));
  }
}