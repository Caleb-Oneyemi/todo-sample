// window.addEventListener("load", renderTodos);

// const container = document.querySelector("#container");
// const input = document.querySelector("#input");
// const addBtn = document.querySelector("#add");

// addBtn.addEventListener("click", addTodo);

// let todos = [
// 	{ id: 1, content: "sample todo", createdDate: new Date().toDateString() },
// ];

// function addTodo() {
// 	let content = input.value;

// 	if (!content) return;

// 	const newTodo = {
// 		id: todos[todos.length - 1].id + 1,
// 		content: content,
// 		createdDate: new Date().toDateString(),
// 	};

// 	input.value = "";
// 	todos.push(newTodo);
// 	renderTodo(newTodo);
// }

// function removeTodo(id) {
// 	todos = todos.filter((todo) => todo.id !== id);
// 	renderTodos();
// }

// function createIcons(parent, deleteIcon, i) {
// 	deleteIcon.setAttribute("id", "delete-" + i);
// 	deleteIcon.setAttribute("class", "clickcable");
// 	deleteIcon.setAttribute("src", "./delete.png");
// 	deleteIcon.setAttribute("width", "20px");
// 	deleteIcon.setAttribute("height", "20px");

// 	parent.appendChild(deleteIcon);
// }

// function createTodoElement(todo, i) {
// 	let div = document.createElement("div");
// 	let p = document.createElement("p");
// 	p.textContent = todo.content;

// 	let innerDiv = document.createElement("div");
// 	let innerP = document.createElement("p");
// 	let deleteIcon = document.createElement("img");

// 	innerP.textContent = todo.createdDate;
// 	innerDiv.appendChild(innerP);
// 	createIcons(innerDiv, deleteIcon, i);

// 	div.setAttribute("class", "todo");
// 	div.appendChild(p);
// 	div.appendChild(innerDiv);

// 	return div;
// }

// function renderTodos() {
// 	todos.map((todo) => {
// 		renderTodo(todo);
// 	});
// }

// function renderTodo(todo) {
// 	let todoElement = createTodoElement(todo, todo.id);
// 	container.appendChild(todoElement);

// 	let deleteBtn = document.querySelector("#delete-" + todo.id);
// 	deleteBtn.addEventListener("click", () => {
// 		removeTodo(todo.id);
//     container.innerHTML = null;
//     renderTodos();
// 	});
// }

let todos = [
	{ id: 1, content: "sample todo", createdDate: new Date().toDateString() },
	{ id: 2, content: "I want to eat", createdDate: new Date().toDateString() },
	{
		id: 3,
		content: "build a todo list app",
		createdDate: new Date().toDateString(),
	},
];

window.addEventListener("load", () => {
	for (let todo of todos) {
		appendTodo(todo);
	}
});

const container = document.querySelector("#container");
const inputBox = document.querySelector("#input");
const addButton = document.querySelector("#add");

inputBox.addEventListener('keyup', (event) => {
  let content = inputBox.value.trim();
	if (!content) {
		alert("input box is empty");
		return;
	}

  if(event.keyCode === 13) {
    addTodo(content);
	  inputBox.value = "";
  }
})

addButton.addEventListener("click", () => {
	let content = inputBox.value.trim();
	if (!content) {
		alert("input box is empty");
		return;
	}

	addTodo(content);
	inputBox.value = "";
});

function appendTodo(todo) {
	let div = document.createElement("div");
	div.setAttribute("class", "todo");

	let p = document.createElement("p");
	p.innerText = todo.content;

	let innerDiv = document.createElement("div");

	let subParagraph = document.createElement("p");
	subParagraph.innerText = todo.createdDate;

	let deleteIcon = document.createElement("img");
	deleteIcon.setAttribute("id", "delete-" + todo.id);
	deleteIcon.setAttribute("class", "clickable");
	deleteIcon.setAttribute("src", "./delete.png");

	deleteIcon.addEventListener("click", () => {
		deleteTodo(todo.id);
	});

	innerDiv.appendChild(subParagraph);
	innerDiv.appendChild(deleteIcon);

	div.appendChild(p);
	div.appendChild(innerDiv);

	container.appendChild(div);
}

function addTodo(content) {
	const newTodo = {
		id: todos[todos.length - 1].id + 1,
		content: content,
		createdDate: new Date().toDateString(),
	};

	todos.push(newTodo);
	appendTodo(newTodo);
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  container.innerHTML = null;
  for (let todo of todos) {
		appendTodo(todo);
	};
}
