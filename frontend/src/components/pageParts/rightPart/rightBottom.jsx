import React from 'react'
import Card from "../../cards/readingCard"

const RightBottom = ({ notes, deleteNote }) => {

    return (
        <div className='flex flex-wrap gap-3 h-4/7 rounded-2xl overflow-x-auto scrollbar-none p-2'>

            {notes.length === 0 && (
                <p className='text-2xl font-bold text-red-600'>
                    No notes currently being read
                </p>
            )}

            {notes.map((note) => (
                <Card
                    key={note.id}
                    title={note.title}
                    discription={note.discription}
                    content={note.content}
                    onDelete={() => deleteNote(note.id)}
                />
            ))}

        </div>
    )
}

export default RightBottom