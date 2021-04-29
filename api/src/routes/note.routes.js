const noteRoute = require('express').Router();
const noteController = require('../controllers/note.controller');
const userExtractor = require('../middleware/userExtractor');

noteRoute
  .get('/', noteController.getNotes) // Getting all notes
  .get('/:id', noteController.getNote) // Getting a especific note
  .post('/', userExtractor, noteController.postNote) // Create a new note
  .put('/:id', userExtractor, noteController.putNote) // Update an existing note
  .delete('/:id', userExtractor, noteController.deleteNote); // Delete an existing note

module.exports = noteRoute;
