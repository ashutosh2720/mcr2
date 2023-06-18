import { v4 as uuid } from 'uuid';


export const habits = [
    {
        id: uuid(),
        thumbnail: "habit1.jpg",
        title: "Exercise",
        start: "2023-06-01",
        end: "2023-06-01",
        repeat: "Daily",
        dayOf: "sunday",
        isArchived: false,
        isInTrash: false,
        goal: "Stay fit and healthy"
    },
    {
        id: uuid(),
        thumbnail: "habit2.jpg",
        title: "Meditation",
        start: "2023-06-02",
        repeat: "Daily",
        isArchived: false,
        isInTrash: false,
        goal: "Find inner peace"
    },
    {
        id: uuid(),
        thumbnail: "habit3.jpg",
        title: "Reading",
        start: "2023-06-03",
        repeat: "Weekly",
        isArchived: false,
        isInTrash: false,
        goal: "Read 2 books per month"
    }
]