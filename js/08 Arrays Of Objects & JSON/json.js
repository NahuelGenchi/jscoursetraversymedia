const todos = [
    {
        id: 1,
        task: "Take out trash",
        isCompleted: false,
    },
    {
        id: 2,
        task: "Study English on Duolingo",
        isCompleted: false,
    },
    {
        id: 3,
        task: "Practice JavaScript",
        isCompleted: true,
    },
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);