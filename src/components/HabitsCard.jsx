import React from 'react'

const HabitsCard = ({ habit }) => {

    return (
        <div className='h-[200px] w-[200px] bg-red-400 flex justify-center items-center rounded-md cursor-pointer'>
            <h1>{habit.title}</h1>
        </div>
    )
}

export default HabitsCard;
