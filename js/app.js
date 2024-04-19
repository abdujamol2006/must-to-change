const postsBtn = document.getElementById("postsBtn");
const usersBtn = document.getElementById("usersBtn");
const photosBtn = document.getElementById("photosBtn");
const todosBtn = document.getElementById("todosBtn");
const outputDiv = document.getElementById("output");

usersBtn.addEventListener("click", () => getData("users"));
todosBtn.addEventListener("click", () => getData("todos"));
postsBtn.addEventListener("click", () => getData("posts"));
photosBtn.addEventListener("click", () => getData("photos"));

function createUi(data, dataType) {
  data.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("list-item");

    switch (dataType) {
      case "users":
        li.innerHTML = `<p>Name:${item.name}</p><p>Username:${item.username}</p><p>Phone:${item.phone}</p>`;
        break;

      case "todos":
        li.innerHTML = `<p>ID:${item.id}</p><p>Title:${item.title}</p><p>Completed:${item.completed}</p>`;
        break;

      case "posts":
        li.innerHTML = `<p>ID:${item.id}</p><p>Title:${item.title}</p><p>Desc:${item.body}</p>`;
        break;

      case "photos":
        li.innerHTML = `<p>Name:${item.name}</p><p>Username:${item.username}</p><p>Phone:${item.phone}</p>`;
        break;
    }

    outputDiv.appendChild(li);
  });
}
function getData(dataType) {
  fetch(`https://jsonplaceholder.typicode.com/${dataType}`)
    .then((res) => res.json())
    .then((data) => createUi(data.slice(0, 20), dataType))
    .catch((err) => alert("Eror"));
}
