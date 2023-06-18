import React, { useState } from "react";
import HabitsCard from "../../components/HabitsCard";
import FormModel from "../../components/FormModel";
import { useGlobalHabit } from "../../context/habit-context";

const Home = () => {
    const { allHabits } = useGlobalHabit()
    const [formOpen, setFormOpen] = useState(false);

    return (
        <div className="h-screen w-full bg-white-900 flex flex-col justify-center gap-10 items-center">
            <button
                className="border shadow-lg bg-blue-700 p-2 mt-10 text-white rounded"
                onClick={() => setFormOpen(!formOpen)}
            >
                {formOpen ? "cancel" : "add habit"}
            </button>
            {formOpen && <FormModel />}
            <div className="habits h-[80%] bg-white-600 w-full flex gap-5 items-center justify-center ">
                {allHabits.map((habit) => (
                    <HabitsCard
                        habit={habit}
                        formOpen={formOpen}
                        setFormOpen={setFormOpen}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
