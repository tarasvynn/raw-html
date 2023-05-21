const button = document.querySelector(".input-container button");
const list = document.querySelector(`.todo-list`);
const input = document.querySelector(`.input-container input`);

button.addEventListener(`click`, () => {
  if (!(input.value || "").trim()) {
    return;
  }

  const li = document.createElement(`li`);
  const text = document.createElement(`span`);
  const editBtn = document.createElement(`button`);
  const deleteBtn = document.createElement(`button`);

  li.className = `todo-list-item`;
  text.innerText = input.value;
  editBtn.innerText = `Edit`;
  deleteBtn.innerText = `Delete`;

  list.appendChild(li);
  li.appendChild(text);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  input.value = "";

  editBtn.addEventListener(`click`, () => {
    console.log("edit");
  });
  deleteBtn.addEventListener(`click`, () => {
    list.removeChild(li);
  });
});
