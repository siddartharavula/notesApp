import React, { useState } from 'react'
import LeftPart from "./components/pageParts/leftPart/leftPart"
import RightPart from "./components/pageParts/rightPart/rightPart"

const App = () => {

    const [notes, setNotes] = useState([])
    const [readingNotes, setReadingNotes] = useState([])

    function appendingNewNotes(addingNotes) {
        setNotes(prevNotes => [...prevNotes, addingNotes])
    }

    function moveToReading(id) {

        const noteToMove = notes.find(note => note.id === id)

        setNotes(prevNotes =>
            prevNotes.filter(note => note.id !== id)
        )

        setReadingNotes(prevNotes => [
            ...prevNotes,
            noteToMove
        ])
    }

    function deleteNote(id) {
        setReadingNotes(prevNotes =>
            prevNotes.filter(note => note.id !== id)
        )
    }

    return (
        <div className='h-screen p-3 flex text-white gap-2 bg-gray-800'>

            <div className='w-1/5 rounded-2xl border bg-black'>
                <LeftPart addNote={appendingNewNotes} />
            </div>

            <div className='w-4/5 border rounded-2xl p-2 bg-black'>
                <RightPart
                    currentNotes={notes}
                    readingNotes={readingNotes}
                    moveToReading={moveToReading}
                    deleteNote={deleteNote}
                />
            </div>

        </div>
    )
}

export default App