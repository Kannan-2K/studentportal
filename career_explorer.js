// Career Explorer Application Logic
// CareerPath Student Portal

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

// Persistent saved jobs
let savedJobs = new Set();
try {
  const stored = localStorage.getItem("careerpath_saved_jobs");
  if (stored) {
    savedJobs = new Set(JSON.parse(stored));
  }
} catch (e) {
  console.warn("localStorage not available for saved jobs", e);
}

function updateSavedCountUI() {
  const countEl = document.getElementById("saved-count");
  if (countEl) countEl.textContent = savedJobs.size;
}
updateSavedCountUI();

// HTML elements
const jobList = document.getElementById("job-list");
const jobCount = document.getElementById("job-count");
const emptyState = document.getElementById("empty-state");
const searchInput = document.getElementById("search-input");
const locationInput = document.getElementById("location-input");
const experienceFilter = document.getElementById("experience-filter");
const typeFilter = document.getElementById("type-filter");
const dateFilter = document.getElementById("date-filter");
const sortFilter = document.getElementById("sort-filter");

// Toast Handler
let toastTimeout;
function showToast(title, message, iconName = "bell") {
  const toast = document.getElementById("toast");
  if (!toast) return;

  const toastTitle = document.getElementById("toast-title");
  const toastMsg = document.getElementById("toast-msg");
  const toastIcon = document.getElementById("toast-icon");

  if (toastTitle) toastTitle.textContent = title;
  if (toastMsg) toastMsg.textContent = message;

  const brandIconMap = {
    github: "git-branch",
    linkedin: "share-2",
    twitter: "send",
    discord: "message-circle",
  };
  const resolvedIcon = brandIconMap[iconName] || iconName;
  if (toastIcon) toastIcon.setAttribute("data-lucide", resolvedIcon);

  if (window.lucide) {
    window.lucide.createIcons();
  }

  if (toastTimeout) clearTimeout(toastTimeout);
  toast.classList.remove("translate-y-24", "opacity-0", "pointer-events-none");
  toast.classList.add("translate-y-0", "opacity-100");

  toastTimeout = setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-24", "opacity-0", "pointer-events-none");
  }, 3500);
}

// Format dates for display
function formatDate(date) {
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// Friendly relative posting date
function postedLabel(days) {
  if (days === 0) return "Today";
  if (days === 1) return "1 day ago";
  return days + " days ago";
}

// Create a job card
function createJobCard(job) {
  const isSaved = savedJobs.has(job.id);

  const skillTags = job.skills
    .map(
      (skill) => `
        <span class="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-600 border border-slate-200/50">
            ${skill}
        </span>
      `,
    )
    .join("");

  return `
    <article data-job-id="${job.id}" 
        class="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:border-brand-400 hover:shadow-lg sm:p-6 relative">

        <div class="flex items-start gap-3 sm:gap-4">

            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${job.logoColor} text-sm font-extrabold shadow-sm group-hover:scale-105 transition-transform">
                ${job.initials}
            </div>

            <div class="min-w-0 flex-1">
                <div class="flex flex-wrap items-start justify-between gap-3">

                    <div class="min-w-0">
                        <h4 class="font-bold leading-6 text-brand-navy group-hover:text-brand-600 transition-colors text-base sm:text-lg">
                            ${job.title}
                        </h4>

                        <p class="mt-1 text-sm font-medium text-slate-500">
                            ${job.company}
                        </p>
                    </div>

                    <button data-save="${job.id}"
                        type="button"
                        aria-label="${isSaved ? "Remove saved job" : "Save job"}"
                        title="${isSaved ? "Remove saved job" : "Save job"}"
                        class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition ${isSaved ? "border-brand-200 bg-brand-50 text-brand-600 font-bold" : "border-slate-200 text-slate-400 hover:border-brand-300 hover:text-brand-600 hover:bg-slate-50"}">
                        <i data-lucide="bookmark" class="h-4 w-4 ${isSaved ? "fill-current" : ""}"></i>
                    </button>

                </div>

                <div class="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">

                    <span class="flex items-center gap-1.5">
                        <i data-lucide="map-pin" class="h-3.5 w-3.5 text-brand-500"></i>
                        ${job.location}
                    </span>

                    <span class="flex items-center gap-1.5">
                        <i data-lucide="briefcase-business" class="h-3.5 w-3.5 text-brand-500"></i>
                        ${job.experienceText}
                    </span>

                    <span class="flex items-center gap-1.5">
                        <i data-lucide="clock-3" class="h-3.5 w-3.5 text-brand-500"></i>
                        ${job.type}
                    </span>

                    <span class="flex items-center gap-1.5">
                        <i data-lucide="calendar-days" class="h-3.5 w-3.5 text-brand-500"></i>
                        Posted ${postedLabel(job.postedDays)}
                    </span>

                </div>

                <div class="mt-4 flex flex-wrap items-center gap-2">
                    <span class="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 border border-brand-100">
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

                    <div class="flex items-center gap-3">
                        <a href="job_details.html?id=${job.id}"
                            class="inline-flex items-center justify-center gap-1.5 rounded-xl border border-brand-200 bg-brand-50/60 px-4 py-2.5 text-xs font-bold text-brand-700 hover:bg-brand-100 transition">
                            View details
                            <i data-lucide="chevron-right" class="h-3.5 w-3.5"></i>
                        </a>
                        <a href="${job.applyUrl}"
                            onclick="event.stopPropagation()"
                            class="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-600 shadow-md shadow-blue-500/20">
                            Apply now
                            <i data-lucide="arrow-up-right" class="h-4 w-4"></i>
                        </a>
                    </div>

                </div>
            </div>

        </div>
    </article>
  `;
}

// Get selected checkbox values
function getCheckedValues(className) {
  return Array.from(
    document.querySelectorAll("." + className + ":checked"),
  ).map((input) => input.value);
}

// Filter and display jobs
let onlyShowingSaved = false;

function renderJobs() {
  const searchText = (searchInput ? searchInput.value : "").trim().toLowerCase();
  const locationText = (locationInput ? locationInput.value : "").trim().toLowerCase();
  const selectedCategories = getCheckedValues("filter-category");
  const selectedModes = getCheckedValues("filter-mode");
  const selectedExperience = experienceFilter ? experienceFilter.value : "";
  const selectedType = typeFilter ? typeFilter.value : "";
  const selectedDate = dateFilter ? dateFilter.value : "";
  const sortValue = sortFilter ? sortFilter.value : "newest";

  let filteredJobs = jobs.filter((job) => {
    if (onlyShowingSaved && !savedJobs.has(job.id)) {
      return false;
    }

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

    const matchesSearch = !searchText || searchableText.includes(searchText);
    const matchesLocation = !locationText || job.location.toLowerCase().includes(locationText);

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

  // Sort the results
  if (sortValue === "newest") {
    filteredJobs.sort((a, b) => a.postedDays - b.postedDays);
  } else if (sortValue === "oldest") {
    filteredJobs.sort((a, b) => b.postedDays - a.postedDays);
  } else if (sortValue === "salary") {
    filteredJobs.sort((a, b) => b.salaryValue - a.salaryValue);
  }

  if (jobCount) jobCount.textContent = filteredJobs.length;

  if (jobList) {
    jobList.innerHTML = filteredJobs.map(createJobCard).join("");
  }

  if (emptyState) {
    emptyState.classList.toggle("hidden", filteredJobs.length !== 0);
  }

  if (window.lucide) {
    lucide.createIcons();
  }
}

// Clear all search and filter selections
function clearFilters() {
  onlyShowingSaved = false;
  if (searchInput) searchInput.value = "";
  if (locationInput) locationInput.value = "";

  document
    .querySelectorAll(".filter-category, .filter-mode")
    .forEach((input) => (input.checked = false));

  if (experienceFilter) experienceFilter.value = "";
  if (typeFilter) typeFilter.value = "";
  if (dateFilter) dateFilter.value = "";
  if (sortFilter) sortFilter.value = "newest";

  renderJobs();
}

// Search button
const searchButton = document.getElementById("search-button");
if (searchButton) searchButton.addEventListener("click", () => {
  onlyShowingSaved = false;
  renderJobs();
});

// Press Enter to search
if (searchInput) {
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      onlyShowingSaved = false;
      renderJobs();
    }
  });
  searchInput.addEventListener("input", () => {
    onlyShowingSaved = false;
    renderJobs();
  });
}

if (locationInput) {
  locationInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      onlyShowingSaved = false;
      renderJobs();
    }
  });
  locationInput.addEventListener("input", () => {
    onlyShowingSaved = false;
    renderJobs();
  });
}

// Update results whenever a filter changes
document
  .querySelectorAll(".filter-category, .filter-mode")
  .forEach((input) => input.addEventListener("change", () => {
    onlyShowingSaved = false;
    renderJobs();
  }));

if (experienceFilter) experienceFilter.addEventListener("change", () => { onlyShowingSaved = false; renderJobs(); });
if (typeFilter) typeFilter.addEventListener("change", () => { onlyShowingSaved = false; renderJobs(); });
if (dateFilter) dateFilter.addEventListener("change", () => { onlyShowingSaved = false; renderJobs(); });
if (sortFilter) sortFilter.addEventListener("change", renderJobs);

// Category cards select the matching category
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

    const targetSection = document.getElementById("job-explorer");
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// View all jobs
const allCategoriesBtn = document.getElementById("all-categories");
if (allCategoriesBtn) {
  allCategoriesBtn.addEventListener("click", () => {
    clearFilters();
    const targetSection = document.getElementById("job-explorer");
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
}

// Clear filters from either button
const clearFiltersBtn = document.getElementById("clear-filters");
if (clearFiltersBtn) clearFiltersBtn.addEventListener("click", clearFilters);

const emptyClearBtn = document.getElementById("empty-clear");
if (emptyClearBtn) emptyClearBtn.addEventListener("click", clearFilters);

// Save or unsave a job or navigate to job details
if (jobList) {
  jobList.addEventListener("click", (event) => {
    // 1. Handle Bookmark Save Button
    const saveButton = event.target.closest("[data-save]");
    if (saveButton) {
      event.preventDefault();
      event.stopPropagation();
      const jobId = Number(saveButton.dataset.save);

      if (savedJobs.has(jobId)) {
        savedJobs.delete(jobId);
        showToast("Bookmark Removed", "Job removed from your saved list", "bookmark-minus");
      } else {
        savedJobs.add(jobId);
        showToast("Job Saved!", "Saved to your bookmarked positions", "bookmark-check");
      }

      try {
        localStorage.setItem("careerpath_saved_jobs", JSON.stringify(Array.from(savedJobs)));
      } catch (e) {}

      updateSavedCountUI();
      renderJobs();
      return;
    }

    // 2. Ignore click if user clicked an explicit link or button (e.g. Apply Now)
    if (event.target.closest("a, button")) {
      return;
    }

    // 3. Navigate to Job Details if clicked on the card
    const jobCard = event.target.closest("[data-job-id]");
    if (jobCard) {
      window.location.href = `job_details.html?id=${jobCard.dataset.jobId}`;
    }
  });
}

// Show only saved jobs when Saved is clicked
const savedNavBtn = document.getElementById("saved-nav");
if (savedNavBtn) {
  savedNavBtn.addEventListener("click", () => {
    onlyShowingSaved = !onlyShowingSaved;
    if (onlyShowingSaved) {
      savedNavBtn.classList.add("bg-brand-100", "text-brand-700");
      showToast("Saved Jobs", `Showing ${savedJobs.size} saved jobs`, "bookmark");
    } else {
      savedNavBtn.classList.remove("bg-brand-100", "text-brand-700");
    }

    renderJobs();

    const targetSection = document.getElementById("job-explorer");
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
}

// Initial page render
renderJobs();
