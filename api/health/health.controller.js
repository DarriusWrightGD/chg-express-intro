const healthService = require('./health.service');

module.exports = {
  async getHealth(req, res) {
    if(req.query.fail) {
      return res.status(500).send({
        message: "Forced Failure"
      }) 
    }

    res.send(await healthService.getHealth())
  }
}