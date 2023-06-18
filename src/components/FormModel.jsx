import React, { useState } from 'react';
import { useGlobalHabit } from '../context/habit-context';

const FormModel = ({ formOpen, setFormOpen }) => {
    const { allHabits, setAllHabits } = useGlobalHabit()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAllHabits(prevState => ({ ...prevState, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addHabit(habit);
        setCreateModel(false)
    }

    return (
        <form className="mb-4 w-[30%] fixed z-5 bg-cyan-600 p-4 rounded-md">
            <div className="mb-4">
                <label className="block mb-1">Habit Name</label>
                <input
                    type="text"
                    className="border border-gray-300 px-2 py-1 w-full"
                    name="title"

                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Habit Goal</label>
                <input
                    type="text"
                    className="border border-gray-300 px-2 py-1 w-full"
                    name="goal"

                    onChange={handleChange}
                    required
                />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block mb-1">Start Date</label>
                    <input
                        type="date"
                        className="border border-gray-300 px-2 py-1 w-full"
                        name="start"

                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1">End Date</label>
                    <input
                        type="date"
                        className="border border-gray-300 px-2 py-1 w-full"
                        name="end"

                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="mb-4">
                <label className="block mb-1">Day of the Week</label>
                <input
                    type="text"
                    className="border border-gray-300 px-2 py-1 w-full"
                    name="dayOf"

                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Repeat Frequency</label>
                <input
                    type="text"
                    className="border border-gray-300 px-2 py-1 w-full"
                    name="repeat"

                    onChange={handleChange}
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                onClick={() => {
                    handleSubmit,
                        setFormOpen(!formOpen)
                }
                }
            >
                Add Habit
            </button>
        </form>
    );
};

export default FormModel;
