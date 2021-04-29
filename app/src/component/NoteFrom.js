import { useState, useRef } from 'react';
import Togglable from './Togglable';

const NoteForm = ({ addNote }) => {
  const [note, setNote] = useState({});

  const togglableRef = useRef();

  const handleNewNote = (event) => {
    event.preventDefault();

    const noteObject = {
      title: note.title,
      content: note.content,
      important: Math.random() > 0.5
    };
    addNote(noteObject);
    setNote({ title: '', content: '' });
    togglableRef.current.toggleVisibility();
  };

  const handleTitle = ({ target }) => setNote({ ...note, title: target.value });
  const handleContent = ({ target }) =>
    setNote({ ...note, content: target.value });

  return (
    <Togglable buttonLabel='New note' ref={togglableRef}>
      <h3>Create a new note</h3>
      <form onSubmit={handleNewNote}>
        <input
          type='text'
          value={note.title}
          name='title'
          placeholder='Title'
          onChange={handleTitle}
        />
        <input
          type='text'
          value={note.content}
          name='content'
          placeholder='Content'
          onChange={handleContent}
        />
        <button>Send</button>
      </form>
    </Togglable>
  );
};

export default NoteForm;
