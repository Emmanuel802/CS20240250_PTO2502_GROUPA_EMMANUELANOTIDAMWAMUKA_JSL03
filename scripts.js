const tasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description: "Gain practical experience",
    status: "done",
  },
];

for (let i = 0; i < 3; i++) {
  if (tasks.length >= 6) {
    alert(
      "There are enough tasks on your board, please check them in the console."
    );
    break;
  }

  const title = prompt(`Enter task ${tasks.length + 1} title:`);
  if (title === null) break;

  const description = prompt(`Enter task ${tasks.length + 1} description:`);
  if (description === null) break;

  let status = prompt("Enter task status (todo, doing, done):").toLowerCase();
  if (status === null) break;

  while (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt("Enter task status (todo, doing, done):").toLowerCase();
  }

  if (status === null) break;

  const newTask = {
    id: tasks.length + 1,
    title: title,
    description: description,
    status: status,
  };

  tasks.push(newTask);
}

console.log("All tasks:");
console.log(tasks);

const completedTasks = tasks.filter((task) => task.status === "done");

if (completedTasks.length > 0) {
  console.log("Completed tasks:");
  console.log(completedTasks);
} else {
  console.log("No completed tasks, Let's get to work!");
}
