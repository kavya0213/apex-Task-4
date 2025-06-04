// To-Do List
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") return;
  let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.onclick = () => {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    };
    list.appendChild(li);
  });
}
renderTasks();

// Product Listing
const products = [
  { name: "Pen", price: 10, rating: 4.5 },
  { name: "Notebook", price: 50, rating: 4.8 },
  { name: "Eraser", price: 5, rating: 4.0 },
  { name: "Ruler", price: 15, rating: 4.2 }
];

function sortProducts() {
  const sortBy = document.getElementById("sortSelect").value;
  const sorted = [...products].sort((a, b) => a[sortBy] - b[sortBy]);
  displayProducts(sorted);
}

function displayProducts(items = products) {
  const container = document.getElementById("productList");
  container.innerHTML = "";
  items.forEach(product => {
    const div = document.createElement("div");
    div.textContent = `${product.name} - ₹${product.price} - ⭐${product.rating}`;
    container.appendChild(div);
  });
}
displayProducts();
