import { useEffect, useState } from 'react'
import type { Note } from './types'

const STORAGE_KEY = 'notes-app.notes'

function loadNotes(): Note[] {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return []
  try {
    return JSON.parse(raw) as Note[]
  } catch {
    return []
  }
}

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>(loadNotes)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
  }, [notes])

  function addNote(title: string, content: string) {
    const note: Note = {
      id: crypto.randomUUID(),
      title,
      content,
      createdAt: Date.now(),
    }
    setNotes((prev) => [note, ...prev])
  }

  function deleteNote(id: string) {
    setNotes((prev) => prev.filter((note) => note.id !== id))
  }

  return { notes, addNote, deleteNote }
}
