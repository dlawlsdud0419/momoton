const nameContainer = document.querySelector(".js-name");

function paintName(name) {
  nameContainer.innerHTML = "";
  const title = document.createElement("span");
  title.className = "name__text";
  if(nowhours >= 12 && nowhours < 18){
    title.innerHTML = `Good afternoon, ${name}.`;
  } else if(nowhours >= 18 && nowhours < 23){
    title.innerHTML = `Good evening, ${name}.`;
  } else if(nowhours >= 23){
    title.innerHTML = `Good night, ${name}.`;
  }
  else {
    title.innerHTML = `Good morning, ${name}.`;
  }
  
  nameContainer.appendChild(title);
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const input = form.querySelector("input");
  const value = input.value;
  localStorage.setItem("username", value);
  paintName(value);
}

function paintInput() {
  const div = document.createElement("div");
  const input = document.createElement("input");
  input.placeholder = "Hello, what's your name?";
  input.style.textAlign ="center";
  input.type = "text";
  input.className = "name__input";
  const form = document.createElement("form");
  form.addEventListener("submit", handleSubmit);
  form.appendChild(input);
  nameContainer.appendChild(form);
}

function loadName() {
  const name = localStorage.getItem("username");
  if (name === null) {
    paintInput();
  } else {
    paintName(name);
  }
}

function init() {
  loadName();
}

init();