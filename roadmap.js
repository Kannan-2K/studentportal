
const progressPercent = document.querySelector(".js-progressPercent");
const completeText = document.querySelector(".js-complete-text");
const overallBar = document.querySelector(".js-overall-progress-bar");

const skills = [
  {
    key: "htmlCompletedTasks",
    count: ".js-html-count",
    bar: ".js-html-bar"
  },
  {
    key: "cssCompletedTasks",
    count: ".js-css-count",
    bar: ".js-css-bar"
  },
  {
    key: "tailwindCompletedTasks",
    count: ".js-tailwind-count",
    bar: ".js-tailwind-bar"
  },
  {
    key: "jsCompletedTasks",
    count: ".js-js-count",
    bar: ".js-js-bar"
  }
];

function getSavedTasks(key) {
  try {
    const saved = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function updateRoadmap() {
  let totalCompleted = 0;

  skills.forEach((skill) => {
    const savedTasks = getSavedTasks(skill.key);

    const completed = savedTasks
      .slice(0, 5)
      .filter(task => task === true).length;

    totalCompleted += completed;

    const countElement = document.querySelector(skill.count);
    const barElement = document.querySelector(skill.bar);

    if (countElement) {
      countElement.textContent = `${completed} of 5 tasks`;
    }
    

    if (barElement) {
      barElement.style.width = `${(completed / 5) * 100}%`;
    }
    
  });
  


  const percent = (totalCompleted / 20) * 100;

  if (progressPercent) {
    progressPercent.textContent = `${percent}%`;
  }

  
  if (completeText) {
    completeText.textContent =
      `${totalCompleted} of 20 tasks completed`;
  }

  if (overallBar) {
    overallBar.style.width = `${percent}%`;
  }
  console.log(completeText);
console.log(totalCompleted);
}

updateRoadmap();

window.addEventListener("pageshow", updateRoadmap);
window.addEventListener("storage", updateRoadmap);
