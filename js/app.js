const searchInp = document.getElementById("input");
const submitBtn = document.getElementById("button");
const productList = document.getElementById("productList");
const listItem = document.getElementById("listItem");

submitBtn.addEventListener("click", () => {
  let text = input.value;
  input.value = "";
  productList.innerHTML += `<li>${text}</li>`;
});
/*let text = input.value;
productList.addEventListener("dblclick", () => {
  productList.textContent = "";
});*/
