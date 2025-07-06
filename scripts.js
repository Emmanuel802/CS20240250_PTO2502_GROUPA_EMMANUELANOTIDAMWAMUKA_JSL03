// Starting with 3 default tasks already on the board
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

// Let the user add up to 3 more tasks
for (let i = 0; i < 3; i++) {
  // If we already have 6 tasks total, don't allow more
  if (tasks.length >= 6) {
    alert(
      "There are enough tasks on your board, please check them in the console."
    );
    break; // stop the loop if we hit the limit
  }

  // Ask user for task title
  const title = prompt(`Enter task ${tasks.length + 1} title:`);
  if (title === null) break; // user cancelled

  // Ask for task description
  const description = prompt(`Enter task ${tasks.length + 1} description:`);
  if (description === null) break; // user cancelled

  // Ask for status: todo, doing, or done
  let status = prompt("Enter task status (todo, doing, done):");
  if (status === null) break;
  status = status.toLowerCase(); // make it lowercase just in case

  // Keep asking if the user enters an invalid status
  while (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt("Enter task status (todo, doing, done):");
    if (status === null) break; // allow cancellation even in retry
    status = status.toLowerCase();
  }

  // Double check again in case user cancelled during validation
  if (status === null) break;

  // Create new task and push to the tasks array
  const newTask = {
    id: tasks.length + 1, // auto-assign ID based on current length
    title: title,
    description: description,
    status: status,
  };

  tasks.push(newTask); // add the task to the list
}

// Log all tasks whether user added more or cancelled
console.log("All tasks:");
console.log(tasks);

//logs completed tasks (status === "done")
const completedTasks = tasks.filter((task) => task.status === "done");

if (completedTasks.length > 0) {
  // If we have at least one completed task
  console.log("Completed tasks:");
  console.log(completedTasks);
} else {
  // If none were completed, show this message
  console.log("No completed tasks, Let's get to work!");
}
