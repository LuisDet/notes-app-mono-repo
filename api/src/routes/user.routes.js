const userRoute = require('express').Router();
const userController = require('../controllers/user.controller');

userRoute
  .get('/', userController.getUsers)
  .get('/:id', userController.getUser)
  .post('/', userController.postUser)
  .put('/:id', userController.putUser)
  .delete('/:id', userController.deleteUser);

module.exports = userRoute;
