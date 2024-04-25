function newItem() {
  //1. Adding a new item to the list:
  const li = $("<li></li>");
  const input = $("input");
  const inputValue = input.val();
  const text = document.createTextNode(inputValue);
  li.append(text);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    const list = $("#list");
    list.append(li);
  }
  //2. Crossing an item out:
  function crossOut() {
    li.toggleClass("strike");
  }

  li.on("dblclick", crossOut);
  //3. Adding a delete button
  const crossOutButton = $("<crossoutbutton>X</crossoutbutton>");
  li.append(crossOutButton);

  function deleteListItem() {
    li.addClass("delete");
  }

  crossOutButton.on("click", deleteListItem);

  $('#list').sortable();
}
