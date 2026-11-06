
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
