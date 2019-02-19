module.exports = {
  getHealth() {
    return Promise.resolve({
      status: 'ok'
    })
  }
}