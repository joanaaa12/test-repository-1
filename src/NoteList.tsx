import type { Note } from './types'

interface NoteListProps {
  notes: Note[]
  onDelete: (id: string) => void
}

export function NoteList({ notes, onDelete }: NoteListProps) {
  if (notes.length === 0) {
    return <p className="empty-state">No notes yet. Add one above.</p>
  }

  return (
    <ul className="note-list">
      {notes.map((note) => (
        <li key={note.id} className="note-card">
          <div className="note-card-header">
            <h3>{note.title}</h3>
            <button
              type="button"
              className="delete-btn"
              onClick={() => onDelete(note.id)}
              aria-label={`Delete ${note.title}`}
            >
              ×
            </button>
          </div>
          {note.content && <p>{note.content}</p>}
          <time>{new Date(note.createdAt).toLocaleString()}</time>
        </li>
      ))}
    </ul>
  )
}
