import { useState } from 'react'
import type { FormEvent } from 'react'

interface NoteFormProps {
  onAdd: (title: string, content: string) => void
}

export function NoteForm({ onAdd }: NoteFormProps) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const trimmedTitle = title.trim()
    const trimmedContent = content.trim()
    if (!trimmedTitle && !trimmedContent) return

    onAdd(trimmedTitle || 'Untitled', trimmedContent)
    setTitle('')
    setContent('')
  }

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Write a note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={3}
      />
      <button type="submit">Add note</button>
    </form>
  )
}
