let todoListContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let inputElement = document.getElementById("todoUserInput");
inputElement.setAttribute("placeholder", "What needs  to be done?");

function getTodoListFromLocalStorage() {
    let stringfiedStoredData = localStorage.getItem("todoItems");
    let parsedTodoList = JSON.parse(stringfiedStoredData);
    if (parsedTodoList === null) {
        parsedTodoList = [];
        return parsedTodoList;
    } else {
        return parsedTodoList;
    }
}
let todoList = getTodoListFromLocalStorage();
let todosCount = todoList.length;
let saveTodoButton = document.getElementById("saveTodoButton");
saveTodoButton.onclick = function() {
    let stringfiedTodos = JSON.stringify(todoList);
    localStorage.setItem("todoItems", stringfiedTodos);
}

function todoStatusCheck(checkboxId, labelid, todoId) {
    let inputElement = document.getElementById(checkboxId);

    let labelElement = document.getElementById(labelid);
    labelElement.classList.toggle("checked");
    let todoObjectIndex = todoList.findIndex(function(eachtodo) {
        let eachtodoId = "todo" + eachtodo.uniqueNo;
        if (eachtodoId === todoId) {
            return true;
        } else {
            return false;
        }

    });
    let todoObject = todoList[todoObjectIndex];

    if (todoObject.isChecked === true) {
        todoObject.isChecked = false;
    } else {
        todoObject.isChecked = true;
    }


}

function toDeleteTodo(todoId) {
    let todoElement = document.getElementById(todoId);
    todoListContainer.removeChild(todoElement);
    let deleteIndex = todoList.findIndex(function(eachTodo) {
        let eachTodoId = "todo" + eachTodo.uniqueNo;
        if (eachTodoId === todoId) {
            return true;
        } else {
            return false;
        }

    });
    todoList.splice(deleteIndex, 1);


}


function createAndAppend(todo) {
    let labelid = "label" + todo.uniqueNo;
    let checkboxId = "checkBox" + todo.uniqueNo;
    let todoId = "todo" + todo.uniqueNo;
    let listItemContainer = document.createElement('li');
    listItemContainer.classList.add("todo-item-container", "d-flex", "flex-row");
    listItemContainer.id = todoId;
    todoListContainer.appendChild(listItemContainer);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.checked = todo.isChecked;
    inputElement.classList.add("checkbox-input");
    inputElement.onclick = function() {
        todoStatusCheck(checkboxId, labelid, todoId);
    };

    listItemContainer.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("d-flex", "flex-row", "label-container");
    listItemContainer.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.id = labelid;
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    if (todo.isChecked === true) {
        labelElement.classList.add("checked");
    }
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let iconElement = document.createElement("i");
    iconElement.classList.add("far", "fa-trash-alt", "delete-icon");
    iconElement.onclick = function() {
        toDeleteTodo(todoId);
    }
    deleteIconContainer.appendChild(iconElement);

}
for (let todo of todoList) {
    createAndAppend(todo);
}

function onAddtodo() {
    let todoCount = todoList.length;
    todoCount = todoCount + 1;
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;
    if (userInputValue === "") {
        alert("Enter the task that you want to add");
        return;
    }

    let newtodo = {
        text: userInputValue,
        uniqueNo: todoCount,
        isChecked: false
    };
    todoList.push(newtodo);
    createAndAppend(newtodo);
    userInputElement.value = "";
    console.log(todoList);
}
addTodoButton.onclick = function() {
    onAddtodo();
}