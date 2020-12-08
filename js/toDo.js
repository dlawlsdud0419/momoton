const form = document.querySelector(".js-to-do"),
  input = document.querySelector(".js-add-to-do"),
  list = document.querySelector(".js-list");
  
let toDos = [];
let planToDos = [];

function persistToDos() {
  const stringToDo = JSON.stringify(toDos);
  localStorage.setItem("toDos", stringToDo);
}

function saveToDo(text, check) {
  const toDoObject = {
    id: toDos.length + 1,
    value: text,
    checking: check
  };
  toDos.push(toDoObject);
  persistToDos();
}

function handleDelete(event) {
  const target = event.target;
  const li = target.parentElement;
  const ul = li.parentElement;
  const toDoId = li.id;
  ul.removeChild(li);
  toDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(toDoId);
  });
  persistToDos();
}
function checkplan(event){
  const target = event.target;
  const li = target.parentElement;
  const toDoId = li.id;
  if (this.checked) {
    document.getElementById(target.id).checked=true;
    toDos[toDoId-1].checking=true;
    persistToDos();
  } else {
    document.getElementById(target.id).checked=false;
    toDos[toDoId-1].checking=false;
    persistToDos();
  }
  
}

function addToDo(text, chk) {
  const toDo = document.createElement("li");
  const check = document.createElement("input");
  check.type ="checkbox";
  check.className= "checked";
  check.id = "check" + (toDos.length + 1);
  check.checked=chk;
  toDo.className = "toDo";
  toDo.id = toDos.length + 1;
  const deleteBtn = document.createElement("span");
  deleteBtn.innerHTML = "❌";
  deleteBtn.className = "toDo__button";
  deleteBtn.addEventListener("click", handleDelete);
  check.addEventListener("change" , checkplan);
  const label = document.createElement("label");
  label.innerHTML = text;
  toDo.appendChild(check);
  toDo.appendChild(label);
  toDo.appendChild(deleteBtn);
  list.appendChild(toDo);
  saveToDo(text, check.checked);
}


function onSubmit(event) {
  event.preventDefault();
  const value = input.value;
  input.value = "";
  addToDo(value, false);
}

function loadToDos() {
  const loadedToDos = localStorage.getItem("toDos");
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      addToDo(toDo.value,toDo.checking);
    });
  }
  return;
}



function init() {
  loadToDos();
}

form.addEventListener("submit", onSubmit);

init();