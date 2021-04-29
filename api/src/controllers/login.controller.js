const bycrypt = require('bcrypt');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

const postLogin = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  const passwordCorrect =
    user === null ? false : await bycrypt.compare(password, user.passwordHash);

  if (!(user && passwordCorrect)) {
    res.status(401).json({
      error: 'Invalid user or password'
    });
  }

  const userforToken = {
    id: user._id,
    username: user.username
  };

  const token = jwt.sign(userforToken, process.env.SECRET);

  res.json({
    username: user.username,
    token
  });
};

module.exports = { postLogin };
