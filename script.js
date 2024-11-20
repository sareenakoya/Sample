document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  // Add a new to-do
  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = todoInput.value.trim();
    if (task) {
      const listItem = document.createElement("li");
      listItem.textContent = task;

      // Add delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("delete");
      deleteButton.addEventListener("click", () => {
        todoList.removeChild(listItem);
      });

      listItem.appendChild(deleteButton);
      todoList.appendChild(listItem);
      todoInput.value = "";
    }
  });
});
