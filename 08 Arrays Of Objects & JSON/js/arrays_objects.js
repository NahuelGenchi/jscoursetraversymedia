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

// console.log(todos);

let taskNumber = prompt("Type the number of the task:");

function taskFunction() {
    taskNumber -= 1;
    const idMessage = `Task ID: ${todos[taskNumber].id}`;
    const taskMessage = `Task: ${todos[taskNumber].task}`;
    let isCompletedMessage;
    if (todos[taskNumber].isCompleted === true) {
        isCompletedMessage = "It's completed.";
    } else {
        isCompletedMessage = "It's not completed.";
    };
    // console.log(todos[taskNumber]);
    console.log(idMessage);
    console.log(taskMessage);
    console.log(isCompletedMessage);
};

taskFunction();