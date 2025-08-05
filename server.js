// A simple Notes API using Express.js and in-memory storage

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory notes array
let notes = [];
let nextId = 1;

// Get all notes
app.get('/api/notes', (req, res) => {
  res.json(notes);
});

// Get a single note by ID
app.get('/api/notes/:id', (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).json({ message: 'Note not found' });
  res.json(note);
});

// Create a new note
app.post('/api/notes', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }
  const newNote = { id: nextId++, title, content };
  notes.push(newNote);
  res.status(201).json(newNote);
});

// Update a note
app.put('/api/notes/:id', (req, res) => {
  const { title, content } = req.body;
  const note = notes.find(n => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).json({ message: 'Note not found' });

  if (title) note.title = title;
  if (content) note.content = content;

  res.json(note);
});

// Delete a note
app.delete('/api/notes/:id', (req, res) => {
  const noteIndex = notes.findIndex(n => n.id === parseInt(req.params.id));
  if (noteIndex === -1) return res.status(404).json({ message: 'Note not found' });

  const deletedNote = notes.splice(noteIndex, 1);
  res.json(deletedNote[0]);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Notes API is running on http://localhost:${PORT}`);
});
