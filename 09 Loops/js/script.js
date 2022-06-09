const todos = [
    {
        id: 1,
        task: "Take out trash",
        isCompleted: false,
    },
    {
        id: 2,
        task: "Study English on Duolingo",
        isCompleted: true,
    },
    {
        id: 3,
        task: "Practice JavaScript",
        isCompleted: true,
    },
];

for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].task);
};

for (let todo of todos) {
    console.log(todo.task, todo.isCompleted);
};

// for loops

for (let i = 0; i < 10; i++) {
    console.log(`For loop number: ${i}`);
};

// while loops

let i = 0;
while (i < 10) {
    console.log(`While loop number: ${i}`);
    i++;
};