const db = require('../../queries');

module.exports = (app) => {
  app.get('/users', db.getUsers),
  app.get('/users/:id', db.getUserById),
  app.post('/users', db.createUser),
  app.put('/users/:id', db.updateUser),
  app.delete('/users/:id', db.deleteUser),
  app.get('/api/initTable', db.initTable),  
  app.get('/api/addBusstopInfo', db.addBusstopCodeInfo)
}
