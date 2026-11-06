# EXPERIMENT 3: TO-DO LIST USING JAVA SCRIPT 
## NAME : RUSHMITHA  R
## REGISTRATION NUMBER : 212224040281
### Date : 06/11/2026
# AIM
To create a To-do Application with all features using JavaScript.

# ALGORITHM
### STEP 1:
Build the HTML structure (index.html).

### STEP 2:
Style the App (style.css).

### STEP 3:
Plan the features the To-Do App should have.

### STEP 4:
Create a To-do application using Javascript.

### STEP 5:
Add functionalities.

### STEP 6:
Test the App.

### STEP 7:
Open the HTML file in a browser to check layout and functionality.

### STEP 8:
Fix styling issues and refine content placement.

### STEP 9:
Deploy the website.

### STEP 10:
Upload to GitHub Pages for free hosting.

# PROGRAM

index.html

```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bloom Desk - My Dashboard</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="dashboard">

    <!-- Sidebar -->
    <aside class="sidebar">
        <h2>🌸 Bloom Desk</h2>
        <p class="side-label">MENU</p>

        <button class="nav active" data-filter="All">⌂ Dashboard</button>
        <button class="nav" data-filter="All">▤ All Tasks</button>
        <button class="nav" data-filter="Pending">◷ Pending</button>
        <button class="nav" data-filter="Completed">✓ Completed</button>

        <p class="side-label">CATEGORIES</p>
        <button class="nav" data-category="College">📚 College</button>
        <button class="nav" data-category="Personal">💗 Personal</button>
        <button class="nav" data-category="Work">💼 Work</button>

        <div class="sidebar-bottom">
            <button onclick="toggleTheme()">☾ Change Theme</button>
        </div>
    </aside>

    <!-- Main Content -->
    <main class="main">

        <header>
            <div>
                <h1>Good Morning! 🌷</h1>
                <p>Let's make today productive.</p>
            </div>
            <div class="header-right">
                <span id="today"></span>
                <div class="profile">R</div>
            </div>
        </header>

        <section class="stats">
            <div class="stat pink">
                <p>Total Tasks</p>
                <h2 id="total">0</h2>
            </div>
            <div class="stat orange">
                <p>Pending</p>
                <h2 id="pending">0</h2>
            </div>
            <div class="stat green">
                <p>Completed</p>
                <h2 id="completed">0</h2>
            </div>
            <div class="stat purple">
                <p>Overdue</p>
                <h2 id="overdue">0</h2>
            </div>
        </section>

        <section class="task-section">
            <div class="task-heading">
                <div>
                    <h2 id="sectionTitle">My Tasks</h2>
                    <p>Manage your daily activities</p>
                </div>
                <input type="text" id="search"
                    placeholder="Search tasks..." oninput="showTasks()">
            </div>

            <div class="task-filters">
                <select id="priorityFilter" onchange="showTasks()">
                    <option value="All">All Priorities</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>

                <select id="sort" onchange="showTasks()">
                    <option value="default">Default Order</option>
                    <option value="date">Due Date</option>
                    <option value="priority">Priority</option>
                </select>
            </div>

            <div id="taskList" class="task-list"></div>
        </section>

    </main>

    <!-- Right Panel -->
    <aside class="right-panel">

        <section class="quick-add">
            <h2>Quick Add ✨</h2>
            <p>Add a new task to your list</p>

            <input type="text" id="taskInput"
                placeholder="What needs to be done?">

            <label>Due Date</label>
            <input type="date" id="dueDate">

            <label>Category</label>
            <select id="category">
                <option>College</option>
                <option>Personal</option>
                <option>Work</option>
                <option>Other</option>
            </select>

            <label>Priority</label>
            <select id="priority">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>

            <button class="add-btn" onclick="addTask()">+ Add Task</button>
        </section>

        <section class="progress-card">
            <h3>My Progress</h3>
            <div class="progress-circle">
                <span id="progressPercent">0%</span>
            </div>
            <p id="progressText">Start completing your tasks!</p>
        </section>

        <section class="upcoming">
            <h3>Upcoming Deadlines</h3>
            <div id="upcomingList"></div>
        </section>

    </aside>

</div>

<!-- YOUR NAME AND REGISTRATION NUMBER -->
<footer>
    Designed & Developed by RUSHMITHA R
    <br>
    Registration Number : 212224040281
</footer>

<script src="script.js"></script>

</body>
</html>
```

style.css

```

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background: #fff5fa;
    color: #493849;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.dashboard {
    display: grid;
    grid-template-columns: 220px minmax(350px, 1fr) 290px;
    flex: 1;
    min-height: 0;
}

/* Sidebar */

.sidebar {
    background: #f3d6e7;
    padding: 28px 18px;
    display: flex;
    flex-direction: column;
}

.sidebar h2 {
    color: #a33e75;
    margin-bottom: 35px;
}

.side-label {
    color: #a16d8b;
    font-size: 11px;
    font-weight: bold;
    margin: 15px 10px;
}

.nav {
    background: transparent;
    color: #71445f;
    text-align: left;
    padding: 13px;
    border: none;
    border-radius: 9px;
    margin: 4px 0;
    cursor: pointer;
}

.nav:hover, .nav.active {
    background: #e9b9d3;
    color: #8c285f;
}

.sidebar-bottom {
    margin-top: auto;
}

.sidebar-bottom button {
    width: 100%;
    padding: 11px;
    border: none;
    border-radius: 8px;
    background: #e9b9d3;
    color: #713b5c;
    cursor: pointer;
}

/* Main Content */

.main {
    padding: 30px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-width: 0;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
}

header h1 {
    color: #9b3f72;
    font-size: 25px;
}

header p, .task-heading p {
    color: #987b8d;
    font-size: 13px;
    margin-top: 5px;
}

.header-right {
    display: flex;
    align-items: center;
    gap: 15px;
    color: #8f5577;
    font-size: 13px;
}

.profile {
    background: #e9b9d3;
    color: #87365e;
    border-radius: 50%;
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    font-weight: bold;
}

/* Statistics */

.stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin-bottom: 28px;
}

.stat {
    padding: 17px;
    border-radius: 12px;
}

.stat p {
    font-size: 12px;
}

.stat h2 {
    margin-top: 8px;
    font-size: 25px;
}

.pink { background: #f8dce9; color: #a33e75; }
.orange { background: #ffecd9; color: #bd762f; }
.green { background: #ddf1e5; color: #41845a; }
.purple { background: #eae0f7; color: #8058a7; }

/* Task List */

.task-section {
    display: flex;
    flex-direction: column;
    min-height: 0;
    flex: 1;
}

.task-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 18px;
}

.task-heading h2 {
    color: #874365;
    font-size: 20px;
}

#search, input, select {
    padding: 11px;
    border: 1px solid #ead3e0;
    border-radius: 7px;
    background: white;
}

#search {
    width: 190px;
}

.task-filters {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
}

.task-list {
    overflow-y: auto;
    padding-right: 5px;
}

.task-card {
    display: flex;
    align-items: center;
    gap: 10px;
    background: white;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 12px;
    border: 1px solid #f2e3ec;
    border-left: 4px solid #d58bb2;
}

.task-info {
    flex: 1;
    min-width: 0;
}

.task-info h4 {
    font-size: 14px;
    overflow-wrap: anywhere;
}

.task-info small {
    display: block;
    margin-top: 6px;
    color: #987b8d;
    font-size: 11px;
}

.task-card button {
    padding: 7px 9px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    background: #f7e4ef;
    color: #914b70;
}

.task-card .done {
    text-decoration: line-through;
    opacity: 0.5;
}

/* Right Panel */

.right-panel {
    background: #fffafd;
    border-left: 1px solid #f0dce7;
    padding: 25px 18px;
    overflow-y: auto;
}

.quick-add h2 {
    color: #98446f;
    font-size: 20px;
}

.quick-add p {
    color: #a38b9b;
    font-size: 12px;
    margin: 7px 0 18px;
}

.quick-add input, .quick-add select {
    width: 100%;
    margin: 6px 0 13px;
}

.quick-add label {
    display: block;
    font-size: 12px;
    color: #79566c;
}

.add-btn {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 8px;
    background: #d77eaa;
    color: white;
    cursor: pointer;
    font-weight: bold;
}

/* Progress */

.progress-card {
    margin-top: 25px;
    padding: 20px;
    background: #f8e8f1;
    border-radius: 13px;
    text-align: center;
}

.progress-card h3, .upcoming h3 {
    color: #91466e;
    font-size: 16px;
}

.progress-circle {
    width: 105px;
    height: 105px;
    border-radius: 50%;
    background: conic-gradient(#d77eaa 0%, #f1d5e4 0%);
    display: grid;
    place-items: center;
    margin: 18px auto;
    position: relative;
}

.progress-circle::before {
    content: "";
    position: absolute;
    background: #f8e8f1;
    width: 78px;
    height: 78px;
    border-radius: 50%;
}

.progress-circle span {
    position: relative;
    color: #94436c;
    font-weight: bold;
}

.progress-card p {
    font-size: 12px;
    color: #987b8d;
}

/* Upcoming */

.upcoming {
    margin-top: 25px;
}

.upcoming h3 {
    margin-bottom: 12px;
}

.upcoming-item {
    padding: 10px;
    border-bottom: 1px solid #f0dce7;
    font-size: 12px;
}

.upcoming-item small {
    display: block;
    color: #987b8d;
    margin-top: 4px;
}

/* Footer */

footer {
    background: #f3d6e7;
    color: #91466e;
    text-align: center;
    padding: 10px;
    font-size: 12px;
    font-weight: 600;
}

/* Dark Mode */

body.dark {
    background: #211c2a;
    color: #f8eaf3;
}

body.dark .main,
body.dark .right-panel {
    background: #292335;
}

body.dark .sidebar {
    background: #38283a;
}

body.dark .nav {
    color: #f5d9e9;
}

body.dark .nav.active,
body.dark .nav:hover {
    background: #65435f;
}

body.dark .task-card,
body.dark input,
body.dark select {
    background: #393044;
    color: white;
    border-color: #55445b;
}

body.dark .progress-card {
    background: #403047;
}

body.dark .progress-circle::before {
    background: #403047;
}

body.dark footer {
    background: #38283a;
    color: #f5d9e9;
}

/* Responsive */

@media(max-width: 1050px) {
    .dashboard {
        grid-template-columns: 180px minmax(300px, 1fr);
    }

    .right-panel {
        display: none;
    }
}

@media(max-width: 650px) {
    body {
        height: auto;
        overflow: auto;
    }

    .dashboard {
        display: block;
    }

    .sidebar {
        padding: 15px;
    }

    .main {
        padding: 18px;
        overflow: visible;
    }

    .stats {
        grid-template-columns: repeat(2, 1fr);
    }

    .right-panel {
        display: block;
    }

    .task-card {
        flex-wrap: wrap;
    }

    footer {
        margin-top: 15px;
    }
}
```
script.js
```

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "All";
let currentCategory = "All";

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

document.getElementById("today").textContent =
    new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });

// Add Task

function addTask() {
    let name = document.getElementById("taskInput").value.trim();

    if (!name) {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        id: Date.now(),
        name: name,
        date: document.getElementById("dueDate").value,
        category: document.getElementById("category").value,
        priority: document.getElementById("priority").value,
        done: false
    });

    document.getElementById("taskInput").value = "";
    document.getElementById("dueDate").value = "";

    saveTasks();
    showTasks();
}

// Display Tasks

function showTasks() {
    let list = document.getElementById("taskList");
    let search = document.getElementById("search").value.toLowerCase();
    let priority = document.getElementById("priorityFilter").value;
    let sort = document.getElementById("sort").value;

    let today = new Date().toLocaleDateString("en-CA");

    let filtered = tasks.filter(t => {
        let late = t.date && t.date < today && !t.done;

        return (
            (currentFilter === "All" ||
            (currentFilter === "Pending" && !t.done) ||
            (currentFilter === "Completed" && t.done)) &&
            (currentCategory === "All" || t.category === currentCategory) &&
            (priority === "All" || t.priority === priority) &&
            t.name.toLowerCase().includes(search)
        );
    });

    if (sort === "date") {
        filtered.sort((a, b) => (a.date || "9999").localeCompare(b.date || "9999"));
    }

    if (sort === "priority") {
        let order = { High: 1, Medium: 2, Low: 3 };
        filtered.sort((a, b) => order[a.priority] - order[b.priority]);
    }

    list.innerHTML = "";

    if (filtered.length === 0) {
        list.textContent = "No tasks found. Add a new task!";
    }

    filtered.forEach(task => {
        let late = task.date && task.date < today && !task.done;

        let card = document.createElement("div");
        card.className = "task-card";
        card.style.borderLeftColor =
            task.priority === "High" ? "#d64c61" :
            task.priority === "Medium" ? "#d58a32" : "#4c9b69";

        let info = document.createElement("div");
        info.className = "task-info";

        let title = document.createElement("h4");
        title.textContent = task.name;
        if (task.done) title.className = "done";

        let details = document.createElement("small");
        details.textContent =
            task.category + " | " + task.priority +
            (task.date ? " | Due: " + task.date : "") +
            (late ? " | OVERDUE" : "");

        if (late) details.style.color = "#d64c61";

        info.append(title, details);

        let done = document.createElement("button");
        done.textContent = task.done ? "Undo" : "✓";
        done.onclick = () => {
            task.done = !task.done;
            saveTasks();
            showTasks();
        };

        let edit = document.createElement("button");
        edit.textContent = "Edit";
        edit.onclick = () => {
            let updated = prompt("Edit task:", task.name);
            if (updated && updated.trim()) {
                task.name = updated.trim();
                saveTasks();
                showTasks();
            }
        };

        let del = document.createElement("button");
        del.textContent = "✕";
        del.onclick = () => {
            tasks = tasks.filter(t => t.id !== task.id);
            saveTasks();
            showTasks();
        };

        card.append(info, done, edit, del);
        list.appendChild(card);
    });

    updateDashboard();
    showUpcoming();
}

// Dashboard Statistics

function updateDashboard() {
    let completed = tasks.filter(t => t.done).length;
    let today = new Date().toLocaleDateString("en-CA");

    let overdue = tasks.filter(t =>
        t.date && t.date < today && !t.done
    ).length;

    let percent = tasks.length
        ? Math.round(completed / tasks.length * 100) : 0;

    document.getElementById("total").textContent = tasks.length;
    document.getElementById("pending").textContent =
        tasks.length - completed;
    document.getElementById("completed").textContent = completed;
    document.getElementById("overdue").textContent = overdue;

    document.getElementById("progressPercent").textContent = percent + "%";

    document.querySelector(".progress-circle").style.background =
        `conic-gradient(#d77eaa ${percent}%, #f1d5e4 ${percent}%)`;

    document.getElementById("progressText").textContent =
        percent + "% of your tasks completed!";
}

// Upcoming Deadlines

function showUpcoming() {
    let area = document.getElementById("upcomingList");
    area.innerHTML = "";

    let upcoming = tasks
        .filter(t => t.date && !t.done)
        .sort((a, b) => a.date.localeCompare(b.date))
        .slice(0, 4);

    if (!upcoming.length) {
        area.textContent = "No upcoming deadlines.";
    }

    upcoming.forEach(t => {
        let item = document.createElement("div");
        item.className = "upcoming-item";

        let name = document.createElement("strong");
        name.textContent = t.name;

        let date = document.createElement("small");
        date.textContent = "Due: " + t.date;

        item.append(name, date);
        area.appendChild(item);
    });
}

// Sidebar Navigation

document.querySelectorAll(".nav").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".nav").forEach(b =>
            b.classList.remove("active")
        );

        button.classList.add("active");

        currentFilter = button.dataset.filter || "All";
        currentCategory = button.dataset.category || "All";

        document.getElementById("sectionTitle").textContent =
            button.textContent.trim();

        showTasks();
    });
});

// Theme

function toggleTheme() {
    document.body.classList.toggle("dark");

    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark")
    );
}

if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
}

// Initial Display

showTasks();
```
# OUTPUT

# RESULT
The program for creating To-do list using JavaScript is executed successfully.
