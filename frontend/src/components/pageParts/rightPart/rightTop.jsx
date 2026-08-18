import React from 'react'
import Card from "../../cards/readCard"

const RightTop = (props) => {

    return (
        <div className='h-2/7 rounded-2xl overflow-x-auto scrollbar-none p-1 flex gap-3'>

            {props.notes.length === 0 && (
                <p className='text-2xl font-bold content-center text-red-600'>
                    No notes to display
                </p>
            )}

            {props.notes.map((note) => (
                <Card
                    key={note.id}
                    title={note.title}
                    discription={note.discription}
                    content={note.content}
                    onMove={() => props.moveToReading(note.id)}
                />
            ))}

        </div>
    )
}

export default RightTop