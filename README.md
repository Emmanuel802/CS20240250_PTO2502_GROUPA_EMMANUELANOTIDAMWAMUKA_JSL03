# JSL03 Challenge – Solution Code

## Overview

This repository provides the **official solution code for the JSL03 challenge**. It is designed to reinforce JavaScript fundamentals such as **user input validation**, **conditional logic**, **dynamic object creation**, and **array manipulation**.

Students should use this solution to:

- Learn how to collect and validate user input for task management
- Understand how to dynamically create and manage objects in an array
- Practice checking task completion and giving meaningful console feedback

## Features Covered

The solution demonstrates how to:

- Start with a pre-filled array of 3 existing tasks
- Let the user **add up to 3 new tasks** with title, description, and valid status (`todo`, `doing`, `done`)
- Validate the status input using a **loop** that re-prompts until valid
- Allow the user to **cancel input** at any time, gracefully stopping the task entry process
- Still log the existing tasks even if the user cancels mid-way
- Filter and log all tasks marked `"done"`
- Display a motivational message if **no tasks** are completed

## Structure

The project includes:

- A loop that allows adding multiple tasks up to a max of 6
- Input cancellation handling using `prompt()` return values
- Status validation loop that ensures only valid task states
- Dynamic task object creation with auto-incremented IDs
- Console output showing all tasks and any completed ones
- Friendly alerts and feedback throughout the process

## How to Use This Solution

1. Open the project in **VS Code** and run it using **Live Server** (or directly in the browser).
2. Open the **Developer Console** to view real-time task logs and motivational messages.
3. Try canceling a prompt mid-way — observe how the program still logs your progress.
4. Compare the code’s structure, validation logic, and flexibility to your own version.

---

## License

This solution code is provided for **educational use only**. Feel free to modify, study, and learn from it — but do not submit it as your own work in assessments without proper understanding.
