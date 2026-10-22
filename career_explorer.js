// Sample job data.
// Dates are relative to the current date, so the date filter works correctly.

const today = new Date();
today.setHours(0, 0, 0, 0);

function daysAgo(days) {
  const date = new Date(today);
  date.setDate(date.getDate() - days);
  return date;
}

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "PixelCraft Technologies",
    initials: "PC",
    category: "Frontend",
    location: "Chennai, India",
    mode: "Hybrid",
    type: "Full-time",
    experience: "Entry",
    experienceText: "0–2 years",
    salary: "₹4–7 LPA",
    salaryValue: 7,
    postedDays: 0,
    deadline: "2026-11-20",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    description:
      "Build responsive web interfaces and deliver accessible, high-quality user experiences.",
    logoColor: "bg-blue-100 text-blue-700",
    applyUrl:
      "mailto:careers@example.com?subject=Frontend%20Developer%20Application",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "DesignOrbit Studio",
    initials: "DO",
    category: "UX Design",
    location: "Bengaluru, India",
    mode: "Remote",
    type: "Full-time",
    experience: "Mid",
    experienceText: "2–5 years",
    salary: "₹6–10 LPA",
    salaryValue: 10,
    postedDays: 1,
    deadline: "2026-11-15",
    skills: ["Figma", "Wireframing", "Prototyping", "User Research"],
    description:
      "Design intuitive digital products through research, wireframes, prototypes, and usability testing.",
    logoColor: "bg-pink-100 text-pink-700",
    applyUrl:
      "mailto:careers@example.com?subject=UI%2FUX%20Designer%20Application",
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "CloudNest Systems",
    initials: "CN",
    category: "Backend",
    location: "Hyderabad, India",
    mode: "On-site",
    type: "Full-time",
    experience: "Mid",
    experienceText: "2–5 years",
    salary: "₹8–14 LPA",
    salaryValue: 14,
    postedDays: 2,
    deadline: "2026-11-25",
    skills: ["Node.js", "Python", "REST API", "SQL"],
    description:
      "Develop secure APIs, manage databases, and optimize application performance.",
    logoColor: "bg-violet-100 text-violet-700",
    applyUrl:
      "mailto:careers@example.com?subject=Backend%20Developer%20Application",
  },
  {
    id: 4,
    title: "Full Stack Developer",
    company: "LaunchPad Digital",
    initials: "LP",
    category: "Full Stack",
    location: "Pune, India",
    mode: "Hybrid",
    type: "Full-time",
    experience: "Entry",
    experienceText: "0–2 years",
    salary: "₹5–9 LPA",
    salaryValue: 9,
    postedDays: 3,
    deadline: "2026-11-18",
    skills: ["React", "Node.js", "MongoDB", "Git"],
    description:
      "Work across frontend and backend features to build and maintain modern web applications.",
    logoColor: "bg-emerald-100 text-emerald-700",
    applyUrl:
      "mailto:careers@example.com?subject=Full%20Stack%20Developer%20Application",
  },
  {
    id: 5,
    title: "Data Science Intern",
    company: "InsightLoop Analytics",
    initials: "IL",
    category: "Data Science",
    location: "Remote, India",
    mode: "Remote",
    type: "Internship",
    experience: "Fresher",
    experienceText: "Fresher",
    salary: "₹15k–25k/month",
    salaryValue: 3,
    postedDays: 5,
    deadline: "2026-11-10",
    skills: ["Python", "SQL", "Pandas", "Statistics"],
    description:
      "Analyze datasets, create reports, and support data-driven business decisions.",
    logoColor: "bg-orange-100 text-orange-700",
    applyUrl:
      "mailto:careers@example.com?subject=Data%20Science%20Intern%20Application",
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "StackBridge Cloud",
    initials: "SB",
    category: "DevOps",
    location: "Mumbai, India",
    mode: "Hybrid",
    type: "Full-time",
    experience: "Senior",
    experienceText: "5+ years",
    salary: "₹15–24 LPA",
    salaryValue: 24,
    postedDays: 8,
    deadline: "2026-12-01",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    description:
      "Manage cloud infrastructure, automate deployments, and improve system reliability.",
    logoColor: "bg-cyan-100 text-cyan-700",
    applyUrl:
      "mailto:careers@example.com?subject=DevOps%20Engineer%20Application",
  },
  {
    id: 7,
    title: "QA Automation Engineer",
    company: "QualityFirst Labs",
    initials: "QF",
    category: "QA",
    location: "Coimbatore, India",
    mode: "On-site",
    type: "Full-time",
    experience: "Mid",
    experienceText: "2–5 years",
    salary: "₹6–11 LPA",
    salaryValue: 11,
    postedDays: 12,
    deadline: "2026-11-30",
    skills: ["Selenium", "Java", "API Testing", "Jira"],
    description:
      "Create automated test suites, report defects, and ensure product quality.",
    logoColor: "bg-amber-100 text-amber-700",
    applyUrl:
      "mailto:careers@example.com?subject=QA%20Automation%20Engineer%20Application",
  },
  {
    id: 8,
    title: "Associate Product Manager",
    company: "NextWave Products",
    initials: "NW",
    category: "Product",
    location: "Bengaluru, India",
    mode: "Remote",
    type: "Full-time",
    experience: "Entry",
    experienceText: "0–2 years",
    salary: "₹7–12 LPA",
    salaryValue: 12,
    postedDays: 25,
    deadline: "2026-11-28",
    skills: ["Product Strategy", "Analytics", "Agile", "Communication"],
    description:
      "Coordinate product roadmaps, gather requirements, and work with design and engineering teams.",
    logoColor: "bg-rose-100 text-rose-700",
    applyUrl:
      "mailto:careers@example.com?subject=Associate%20Product%20Manager%20Application",
  },
];

// Store saved job IDs.
const savedJobs = new Set();

// Get HTML elements.
const jobList = document.getElementById("job-list");
const jobCount = document.getElementById("job-count");
const emptyState = document.getElementById("empty-state");
const searchInput = document.getElementById("search-input");
const locationInput = document.getElementById("location-input");
const experienceFilter = document.getElementById("experience-filter");
const typeFilter = document.getElementById("type-filter");
const dateFilter = document.getElementById("date-filter");
const sortFilter = document.getElementById("sort-filter");

// Format dates for display.
function formatDate(date) {
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// Show a friendly relative posting date.
function postedLabel(days) {
  if (days === 0) return "Today";
  if (days === 1) return "1 day ago";
  return days + " days ago";
}

// Create a job card.
function createJobCard(job) {
  const isSaved = savedJobs.has(job.id);

  const skillTags = job.skills
    .map(
      (skill) => `
                <span class="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-600">
                    ${skill}
                </span>
            `,
    )
    .join("");

  return `
                <article data-job-id="${job.id}" 
                
                    class="cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-brand-300 hover:shadow-md sm:p-6">

                    <div class="flex items-start gap-3 sm:gap-4">

                        <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${job.logoColor} text-sm font-extrabold">
                            ${job.initials}
                        </div>

                        <div class="min-w-0 flex-1">
                            <div class="flex flex-wrap items-start justify-between gap-3">

                                <div class="min-w-0">
                                    <h4 class="font-bold leading-6 text-brand-navy">
                                        ${job.title}
                                    </h4>

                                    <p class="mt-1 text-sm font-medium text-slate-500">
                                        ${job.company}
                                    </p>
                                </div>

                                <button data-save="${job.id}"
                                    aria-label="${isSaved ? "Remove saved job" : "Save job"}"
                                    title="${isSaved ? "Remove saved job" : "Save job"}"
                                    class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${isSaved ? "border-brand-200 bg-brand-50 text-brand-600" : "border-slate-200 text-slate-500 hover:border-brand-300 hover:text-brand-600"}">
                                    <i data-lucide="bookmark" class="h-4 w-4 ${isSaved ? "fill-current" : ""}"></i>
                                </button>

                            </div>

                            <div class="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">

                                <span class="flex items-center gap-1.5">
                                    <i data-lucide="map-pin" class="h-3.5 w-3.5"></i>
                                    ${job.location}
                                </span>

                                <span class="flex items-center gap-1.5">
                                    <i data-lucide="briefcase-business" class="h-3.5 w-3.5"></i>
                                    ${job.experienceText}
                                </span>

                                <span class="flex items-center gap-1.5">
                                    <i data-lucide="clock-3" class="h-3.5 w-3.5"></i>
                                    ${job.type}
                                </span>

                                <span class="flex items-center gap-1.5">
                                    <i data-lucide="calendar-days" class="h-3.5 w-3.5"></i>
                                    Posted ${postedLabel(job.postedDays)}
                                </span>

                            </div>

                            <div class="mt-4 flex flex-wrap items-center gap-2">
                                <span class="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                                    ${job.mode}
                                </span>
                                <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                                    ${job.category}
                                </span>
                            </div>

                            <p class="mt-4 text-sm leading-6 text-slate-600">
                                ${job.description}
                            </p>

                            <div class="mt-4 flex flex-wrap gap-2">
                                ${skillTags}
                            </div>

                            <div class="mt-5 flex flex-col justify-between gap-4 border-t border-slate-100 pt-4 sm:flex-row sm:items-end">

                                <div>
                                    <p class="text-lg font-extrabold text-brand-navy">${job.salary}</p>
                                    <p class="mt-1 text-xs text-slate-500">
                                        Apply before ${formatDate(new Date(job.deadline + "T00:00:00"))}
                                    </p>
                                </div>

                                <a href="${job.applyUrl}"
                                    class="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-600">
                                    Apply now
                                    <i data-lucide="arrow-up-right" class="h-4 w-4"></i>
                                </a>

                            </div>
                        </div>

                    </div>
                </article>
            `;
}

// Get selected checkbox values.
function getCheckedValues(className) {
  return Array.from(
    document.querySelectorAll("." + className + ":checked"),
  ).map((input) => input.value);
}

// Filter and display jobs.
function renderJobs() {
  const searchText = searchInput.value.trim().toLowerCase();
  const locationText = locationInput.value.trim().toLowerCase();
  const selectedCategories = getCheckedValues("filter-category");
  const selectedModes = getCheckedValues("filter-mode");
  const selectedExperience = experienceFilter.value;
  const selectedType = typeFilter.value;
  const selectedDate = dateFilter.value;
  const sortValue = sortFilter.value;

  let filteredJobs = jobs.filter((job) => {
    const searchableText = [
      job.title,
      job.company,
      job.category,
      job.location,
      job.mode,
      job.type,
      job.description,
      ...job.skills,
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = searchableText.includes(searchText);
    const matchesLocation = job.location.toLowerCase().includes(locationText);

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(job.category);

    const matchesMode =
      selectedModes.length === 0 || selectedModes.includes(job.mode);

    const matchesExperience =
      !selectedExperience || job.experience === selectedExperience;

    const matchesType = !selectedType || job.type === selectedType;

    const matchesDate = !selectedDate || job.postedDays <= Number(selectedDate);

    return (
      matchesSearch &&
      matchesLocation &&
      matchesCategory &&
      matchesMode &&
      matchesExperience &&
      matchesType &&
      matchesDate
    );
  });

  // Sort the results.
  if (sortValue === "newest") {
    filteredJobs.sort((a, b) => a.postedDays - b.postedDays);
  } else if (sortValue === "oldest") {
    filteredJobs.sort((a, b) => b.postedDays - a.postedDays);
  } else if (sortValue === "salary") {
    filteredJobs.sort((a, b) => b.salaryValue - a.salaryValue);
  }

  jobCount.textContent = filteredJobs.length;

  jobList.innerHTML = filteredJobs.map(createJobCard).join("");

  emptyState.classList.toggle("hidden", filteredJobs.length !== 0);

  lucide.createIcons();
}

// Clear all search and filter selections.
function clearFilters() {
  searchInput.value = "";
  locationInput.value = "";

  document
    .querySelectorAll(".filter-category, .filter-mode")
    .forEach((input) => (input.checked = false));

  experienceFilter.value = "";
  typeFilter.value = "";
  dateFilter.value = "";
  sortFilter.value = "newest";

  renderJobs();
}

// Search button.
document.getElementById("search-button").addEventListener("click", renderJobs);

// Press Enter to search.
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") renderJobs();
});

locationInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") renderJobs();
});

// Live search as the user types.
searchInput.addEventListener("input", renderJobs);
locationInput.addEventListener("input", renderJobs);

// Update results whenever a filter changes.
document
  .querySelectorAll(".filter-category, .filter-mode")
  .forEach((input) => input.addEventListener("change", renderJobs));

experienceFilter.addEventListener("change", renderJobs);
typeFilter.addEventListener("change", renderJobs);
dateFilter.addEventListener("change", renderJobs);
sortFilter.addEventListener("change", renderJobs);

// Category cards select the matching category.
document.querySelectorAll(".category-card").forEach((button) => {
  button.addEventListener("click", () => {
    clearFilters();

    const category = button.dataset.category;
    const categoryCheckbox = document.querySelector(
      '.filter-category[value="' + category + '"]',
    );

    if (categoryCheckbox) {
      categoryCheckbox.checked = true;
    }

    renderJobs();

    document.getElementById("job-explorer").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// View all jobs.
document.getElementById("all-categories").addEventListener("click", () => {
  clearFilters();
  document.getElementById("job-explorer").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

// Clear filters from either button.
document
  .getElementById("clear-filters")
  .addEventListener("click", clearFilters);
document.getElementById("empty-clear").addEventListener("click", clearFilters);

// Save or unsave a job.
jobList.addEventListener("click", (event) => {

  // Do not navigate when the user clicks a button or link.
    if (event.target.closest("button, a")) return;

    const jobCard = event.target.closest("[data-job-id]");

    if (jobCard) {
        window.location.href =
            `job_details.html?id=${jobCard.dataset.jobId}`;
    }

  const saveButton = event.target.closest("[data-save]");

  if (!saveButton) return;

  const jobId = Number(saveButton.dataset.save);

  if (savedJobs.has(jobId)) {
    savedJobs.delete(jobId);
  } else {
    savedJobs.add(jobId);
  }

  document.getElementById("saved-count").textContent = savedJobs.size;
  renderJobs();
});

// Show only saved jobs when Saved is clicked.
// This is a simple demonstration using the existing sample data.
document.getElementById("saved-nav").addEventListener("click", () => {
  const savedIds = new Set(savedJobs);

  clearFilters();

  searchInput.value = "";

  // Display saved jobs directly.
  const filteredJobs = jobs.filter((job) => savedIds.has(job.id));

  jobCount.textContent = filteredJobs.length;
  jobList.innerHTML = filteredJobs.map(createJobCard).join("");
  emptyState.classList.toggle("hidden", filteredJobs.length !== 0);

  lucide.createIcons();

  document.getElementById("job-explorer").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

// Initial page render.
renderJobs();
