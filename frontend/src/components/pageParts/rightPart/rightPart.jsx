import React from 'react'
import RightTop from "./rightTop"
import RightBottom from "./rightBottom"

const RightPart = (props) => {

    return (
        <div className='flex flex-col h-full'>

            <h1 className="font-bold text-white text-2xl p-1">
                To Read
            </h1>

            <RightTop
                notes={props.currentNotes}
                moveToReading={props.moveToReading}
            />

            <h1 className="font-bold text-white text-2xl p-1">
                Reading
            </h1>

            <RightBottom
                notes={props.readingNotes}
                deleteNote={props.deleteNote}
            />

        </div>
    )
}

export default RightPart