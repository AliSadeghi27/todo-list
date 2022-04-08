let input = document.getElementById("input");
let btn = document.getElementById("btn");
let todoList = document.querySelector(".todo_list");

const addTodoItem = (event) => {
  event.preventDefault();

  if (!input.value.trim()) {
    swal("لطفا مقداری معتبر وارد نمایید", "نباید باکس خالی باشد", "error");
    return;
  }

  let todoListItem = document.createElement("div");
  todoListItem.className = "todo_list_item";
  let newTodoTitleSpan = document.createElement("span");
  newTodoTitleSpan.innerHTML = input.value.trim();
  let todoTrashIcon = document.createElement("i");
  todoTrashIcon.className = "fa fa-trash-o delete";

  todoTrashIcon.addEventListener("click", (event) => {
    event.target.parentElement.remove();
  });

  todoListItem.append(newTodoTitleSpan, todoTrashIcon);
  todoList.appendChild(todoListItem);
  input.value = "";
};

btn.addEventListener("click", addTodoItem);
