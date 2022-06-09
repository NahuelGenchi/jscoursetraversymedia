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

// forEach, map, filter

todos.forEach(function(todo) {
    console.log(todo.task);
});

const todoTaskMap = todos.map(function(todo) {
    return todo.task;
});
console.log(todoTaskMap);

/*
const todoCompletedFilter = todos.filter(function(todo) {
    return todo.isCompleted === true;
});
console.log(todoCompletedFilter);
*/

const todoCompletedFilter = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.task;
});

console.log(todoCompletedFilter);