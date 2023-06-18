import React, { createContext, useContext, useState } from "react";
import { habits } from "../components/HabitsData";
const habitContext = createContext();

const HabitProvider = ({ children }) => {
    const [allHabits, setAllHabits] = useState(habits)
    const AddHabit = (newHabit) => {
        setAllHabits((prev) => [...prev, newHabit])
    }


    return (
        <habitContext.Provider value={{ allHabits, AddHabit, setAllHabits }}>
            {children}
        </habitContext.Provider>
    );
};

const useGlobalHabit = () => useContext(habitContext);

export { HabitProvider, useGlobalHabit };
