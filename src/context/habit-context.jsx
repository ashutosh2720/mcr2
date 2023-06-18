import React, { createContext, useContext, useState } from "react";
import { habits } from "../components/HabitsData";
const habitContext = createContext();

const HabitProvider = ({ children }) => {
    const [allHabits, setAllHabits] = useState(habits)


    return (
        <habitContext.Provider value={{ allHabits, setAllHabits }}>
            {children}
        </habitContext.Provider>
    );
};

const useGlobalHabit = () => useContext(habitContext);

export { HabitProvider, useGlobalHabit };
