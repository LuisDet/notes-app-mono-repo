import { useState, useEffect } from 'react';
import noteService from '../services/notes';
import NoteForm from './NoteFrom';
export const Notes = ({ token }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    noteService.getAll().then((response) => {
      setNotes(response);
    });
  }, []);

  const addNote = async (noteObject) => {
    const response = await noteService.create(noteObject, token);
    setNotes(notes.concat(response));
  };

  return (
    <>
      <NoteForm addNote={addNote} />
      {notes.map(({ title, content, important, id }) => {
        return (
          <div key={id}>
            <h1>{title}</h1>
            <p>{content}</p>
            <button>Importante - {important.toString()}</button>
          </div>
        );
      })}
    </>
  );
};
