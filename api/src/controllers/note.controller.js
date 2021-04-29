const Note = require('../models/note.model');
const User = require('../models/user.model');

const getNotes = (req, res) => {
  Note.find({})
    .populate('user', { username: 1 })
    .then((docs) => {
      res.json(docs);
    });
};

const getNote = (req, res) => {
  const { id } = req.params;
  Note.findById(id).then((note) => {
    res.json(note);
  });
};

const postNote = async (req, res) => {
  const {
    body: { title, content, important = false },
    userId
  } = req;
  console.log(req.body);
  const user = await User.findById(userId);

  const newNote = Note({
    title,
    content,
    important,
    user: user._id
  });

  const note = await newNote.save();
  console.log(note);
  user.notes = user.notes.concat(note._id);

  await user.save();
  res.json(note);
};

const putNote = (req, res) => {
  const { id } = req.params;
  const updatedUser = {
    title: req.body.title,
    content: req.body.content
  };
  Note.findOneAndUpdate({ _id: id }, updatedUser).then((response) => {
    res.json(response);
  });
};

const deleteNote = (req, res) => {
  const { id } = req.params;
  Note.findOneAndDelete({ _id: id }).then((response) => {
    res.json(response);
  });
};

module.exports = { getNotes, getNote, postNote, putNote, deleteNote };
