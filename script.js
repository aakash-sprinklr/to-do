const listContainer = document.querySelector(".list-container");
const addButton = document.getElementById("to-do-add-btn");
const toDoInput = document.getElementById("to-do-input");
toDoInput.setAttribute("placeholder", "Buy grocery...");
const addItem = () => {
  const inputValue = toDoInput.value;

  if (inputValue.trim() === "") {
    alert("Item can't be empty");
    return;
  }

  const itemContainer = document.createElement("div");
  itemContainer.classList.add("item-container");
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.classList.add("to-do-checkbox");
  const item = document.createElement("p");
  item.innerText = toDoInput.value;

  checkBox.addEventListener("change", (event) => {
    item.classList.toggle("checked");
  });

  itemContainer.append(checkBox, item);
  listContainer.append(itemContainer);
  toDoInput.value = "";
};

addButton.addEventListener("click", addItem);
