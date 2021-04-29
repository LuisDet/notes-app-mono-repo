const bcrypt = require('bcrypt');
const User = require('../models/user.model');

const getUsers = (req, res) => {
  User.find({})
    .populate('notes', { title: 1, content: 1, important: 1 })
    .then((docs) => {
      res.json(docs);
    });
};

const getUser = (req, res) => {
  const { id } = req.params;
  User.findById(id).then((user) => {
    res.json(user);
  });
};

const postUser = async (req, res) => {
  const saltRound = 10;
  const passwordHash = await bcrypt.hash(req.body.password, saltRound);
  const newUser = User({
    username: req.body.username,
    passwordHash: passwordHash
  });
  const user = await newUser.save();
  res.json({ user });
};

const putUser = (req, res) => {
  const {
    params: { id },
    body: { title, content, important }
  } = req;
  const updatedUser = {
    title,
    content,
    important
  };
  User.findOneAndUpdate({ _id: id }, updatedUser).then((response) => {
    res.json(response);
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  User.findOneAndDelete({ _id: id }).then((response) => {
    res.json(response);
  });
};

module.exports = { getUsers, getUser, postUser, putUser, deleteUser };
