var todos = [];

var ans = prompt("What would you like to do?");

while (ans !== "quit") {
  if (ans === "list") {
    listTodos();
  }
  else if (ans === "new") {
    addTodo();
  }
  else if (ans === "delete") {
    delTodo();
  }
  ans = prompt("What would you like to do?");
}
console.log("Ok, you quit the app");

// Functions

function listTodos() {
  console.log("***********");
  todos.forEach(function (todo, i) {
    console.log(i + ": " + todo);
  });
  console.log("***********");
}

function addTodo() {
  var newTodo = prompt("Please enter a todo")
  todos.push(newTodo);
  console.log("Todo added");
}

function delTodo() {
  var delIndex = prompt("Which index of todo to delete?");
  todos.splice(delIndex, 1);
  console.log("Todo deleted");
}