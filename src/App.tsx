import { NoteForm } from './NoteForm'
import { NoteList } from './NoteList'
import { useNotes } from './useNotes'
import './App.css'

function App() {
  const { notes, addNote, deleteNote } = useNotes()

  return (
    <div className="app">
      <h1>Notes</h1>
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  )
}

export default App
