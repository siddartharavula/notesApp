import React from 'react'

const ReadingCard = (props) => {

    return (
        <div className="border rounded-2xl hover:border-green-500 shrink-0 h-80 w-40/81 p-2 flex flex-col gap-2 overflow-y-auto scrollbar-none">

            <div className="justify-between flex">

                <h1 className="font-bold text-3xl w-6/7">
                    {props.title}
                </h1>

                <button
                    onClick={props.onDelete}
                    className="active:scale-95 h-fit bg-white text-black rounded font-bold w-1/7"
                >
                    Bin
                </button>

            </div>

            <div className="h-full">

                <h4>
                    {props.discription}
                </h4>

                <p>
                    {props.content}
                </p>

            </div>

        </div>
    )
}

export default ReadingCard