function newItem() {
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

  function crossOut() {
    li.toggleClass("strike")
  }

  li.on("dblclick", crossOut)

  const crossOutButton = $("<crossoutbutton>X</crossoutbutton>");
  li.append(crossOutButton)

  

  function deleteListItem(){
    li.addClass("delete")
  }

  crossOutButton.on("click", deleteListItem)
}
