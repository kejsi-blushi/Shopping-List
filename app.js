var input = document.getElementById("input");
var ul = document.getElementById("myList");
var listItems = document.querySelectorAll(".list");
var enterButton = document.getElementById("enter-button");

function addDeleteButton(item) {
  // Add delete button
  var deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("Delete"));
  deleteButton.classList.add("delete");

  deleteButton.addEventListener("click", function (event) {
    // Check if the click occurred on the delete button
    if (event.target === deleteButton) {
      ul.removeChild(item);
    }
  });

  item.appendChild(deleteButton);
}

listItems.forEach(addDeleteButton);

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  addDeleteButton(li);
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

enterButton.addEventListener("click", addListAfterClick);
