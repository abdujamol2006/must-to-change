const postsBtn = document.getElementById("postsBtn");
const usersBtn = document.getElementById("usersBtn");
const photosBtn = document.getElementById("photosBtn");
const todosBtn = document.getElementById("todosBtn");
const outputDiv = document.getElementById("output");

async function fetchData(endpoint) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${endpoint}`
      /* .then((response) => response.json())
        .then((json) => console.log(json))*/
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ma'lumotlarni olishda xato: ", error);
  }
}
postsBtn.addEventListener("click", async () => {
  const posts = await fetchData("posts");
  displayData(posts);
});

usersBtn.addEventListener("click", async () => {
  const users = await fetchData("users");
  displayData(users);
});

photosBtn.addEventListener("click", async () => {
  const photos = await fetchData("photos");
  displayData(photos);
});
todosBtn.addEventListener("click", async () => {
  const todos = await fetchData("todos");
  displayData(todos);
});

function displayData(data) {
  outputDiv.innerHTML = JSON.stringify(data, null, 2);
}
