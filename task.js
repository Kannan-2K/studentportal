
const taskTick = document.querySelectorAll(".js-tick");
const processBar = document.querySelector(".js-progress-bar");
const progressScore = document.querySelector(".js-progress-score");

// Choose a separate storage key for each page
const page = window.location.pathname.toLowerCase();
let storageKey;

if (page.endsWith("/task.html") || page === "task.html") {
  storageKey = "htmlCompletedTasks";
} else if (page.endsWith("/taskcss.html") || page === "taskcss.html") {
  storageKey = "cssCompletedTasks";
} else if (page.endsWith("/tasktail.html") || page === "tasktail.html") {
  storageKey = "tailwindCompletedTasks";
} else if (page.endsWith("/taskjs.html") || page === "taskjs.html") {
  storageKey = "jsCompletedTasks";
}

// Stop if this page doesn't match a known filename
if (storageKey) {
  // Restore saved checkbox states
  const savedTasks = JSON.parse(
    localStorage.getItem(storageKey) || "[]"
  );

  taskTick.forEach((checkbox, i) => {
    checkbox.checked = savedTasks[i] === true;
  });

  function updateProgress() {
    let completeTask = 0;

    taskTick.forEach((checkbox) => {
      if (checkbox.checked) {
        completeTask++;
      }

      // Each checkbox belongs to its own task card
      const taskCard = checkbox.parentElement;
      const taskTitle = taskCard.querySelector("h3");
      const taskDescription =
        taskCard.querySelector(".js-task-active");

      if (taskTitle) {
        taskTitle.classList.toggle(
          "line-through",
          checkbox.checked
        );
      }

      if (taskDescription) {
        taskDescription.classList.toggle(
          "line-through",
          checkbox.checked
        );
      }
    });

    const percent =
      taskTick.length > 0
        ? (completeTask / taskTick.length) * 100
        : 0;

    if (processBar) {
      processBar.style.width = percent + "%";
    }

    if (progressScore) {
      progressScore.textContent =
        completeTask + "/" + taskTick.length;
    }

    // Save all checkbox states for this skill only
    const taskStates = Array.from(
      taskTick,
      checkbox => checkbox.checked
    );

    localStorage.setItem(
      storageKey,
      JSON.stringify(taskStates)
    );
  }

  taskTick.forEach((checkbox) => {
    checkbox.addEventListener("change", updateProgress);
  });

  // Display saved progress on page load
  updateProgress();
}
