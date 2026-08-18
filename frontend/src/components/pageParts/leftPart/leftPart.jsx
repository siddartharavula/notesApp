import React, { useState } from 'react'

const LeftPart = ({ addNote }) => {

    const [Title, setTitle] = useState("")
    const [Dis, setDis] = useState("")
    const [Content, setContent] = useState("")

    function foam(e) {
        e.preventDefault()

        const newNote = {
            id: Date.now(),
            title: Title,
            discription: Dis,
            content: Content
        }

        addNote(newNote)

        setTitle("")
        setDis("")
        setContent("")
    }

    return (
        <div className='p-2  h-full rounded-2xl overflow-y-scroll scrollbar-none'>

            <h1 className='font-bold p-2 text-4xl'>
                Enter the Form
            </h1>

            <form
                onSubmit={foam}
                className="p-3 bg-black flex flex-col gap-2 rounded-xl"
            >

                <h1 className='text-2xl font-bold'>
                    Title :
                </h1>

                <input
                    className="border rounded p-1"
                    type="text"
                    placeholder='Enter the Title'
                    value={Title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />

                <h1 className='text-2xl font-bold'>
                    Description :
                </h1>

                <textarea
                    value={Dis}
                    onChange={(e) => {
                        setDis(e.target.value)
                    }}
                    className='border rounded min-h-30 overflow-hidden p-1'
                    placeholder='Brief Explanation'
                />

                <h1 className='text-2xl font-bold'>
                    Content :
                </h1>

                <textarea
                    value={Content}
                    onChange={(e) => {
                        setContent(e.target.value)
                    }}
                    className='border rounded min-h-60 overflow-hidden p-1'
                    placeholder='Enter Content'
                />

                <button
                    type="submit"
                    className='bg-white p-1.5 text-black active:scale-98 font-bold rounded-2xl'
                >
                    Note Down
                </button>

            </form>
        </div>
    )
}

export default LeftPart