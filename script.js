const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.getElementById("inputForm");
const task_container = document.getElementById("element");
const addBtn = document.getElementById("addBtn");

const tasks = localStorage.getItem("Goals")
  ? JSON.parse(localStorage.getItem("Goals"))
  : [];
showAllTasks();

function showAllTasks() {
  task_container.innerHTML = "";

  tasks.forEach((e, i) => {
    const div = document.createElement("div");
    div.setAttribute("class", "card");

    const title_tag = document.createElement("p");
    title_tag.innerText = e.title;
    div.append(title_tag);

    const description_tag = document.createElement("span");
    description_tag.innerText = e.description;
    div.append(description_tag);

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "deleteBtn");
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    deleteBtn.addEventListener("click", () => {
      tasks.splice(i, 1);
      localStorage.setItem("Goals", JSON.stringify(tasks));
      showAllTasks();
    });
    div.append(deleteBtn);

    task_container.append(div);
  });
}

function removeTasks() {
  tasks.forEach((e) => {
    const div = document.querySelector(".card");
    div.remove();
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  removeTasks();
  tasks.push({
    title: title.value,
    description: description.value,
  });

  localStorage.setItem("Goals", JSON.stringify(tasks));

  console.log(tasks);
  console.log("form submitted");
  showAllTasks();
});
