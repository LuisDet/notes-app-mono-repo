const loginRouter = require('express').Router();
const { postLogin } = require('../controllers/login.controller');

loginRouter.post('/', postLogin); // send and verify a user authentication for getting into the page

module.exports = loginRouter;
