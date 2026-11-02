/**
 * CareerPath - Student Career Preparation Platform
 * Core Interactivity & Dashboard State Management
 */

// Career track dashboard data sets for interactive switching
const careerTracksData = {
  fullstack: {
    title: "Full Stack Web Developer Track",
    badge: "Most Popular",
    phase: "Phase 3 of 4: Backend Architecture & APIs",
    progress: 68,
    level: "Level 4: Advanced Apprentice",
    xp: "1,420 XP",
    streak: "14 Days",
    skillsCompletedCount: "14 / 20 Skills Mastered",
    skills: [
      { name: "HTML5, Semantic UI & Tailwind CSS", progress: 100, status: "Mastered", color: "bg-emerald-500", icon: "check-circle" },
      { name: "Modern JavaScript (ES6+) & Async/Await", progress: 100, status: "Mastered", color: "bg-emerald-500", icon: "check-circle" },
      { name: "React 18 & State Management (Zustand)", progress: 85, status: "In Progress", color: "bg-blue-600", icon: "clock" },
      { name: "Node.js, Express & RESTful APIs", progress: 65, status: "In Progress", color: "bg-blue-500", icon: "clock" },
      { name: "PostgreSQL, Prisma ORM & Database Design", progress: 40, status: "Up Next", color: "bg-slate-400", icon: "lock" }
    ],
    projectsCount: "3 / 4 Portfolio Projects",
    projects: [
      { name: "Full Stack E-Commerce & Stripe Checkout", tech: "React • Node.js • Stripe", status: "Completed", score: "96/100", verified: true },
      { name: "TaskFlow Collaborative Kanban Platform", tech: "TypeScript • Tailwind • Express", status: "Completed", score: "92/100", verified: true },
      { name: "Social Connect Real-time Chat API", tech: "Socket.io • Redis • MongoDB", status: "In Review", score: "Pending", verified: false }
    ],
    weeklyHours: [
      { day: "Mon", hours: 2.5, height: "45%" },
      { day: "Tue", hours: 3.5, height: "65%" },
      { day: "Wed", hours: 4.2, height: "80%" },
      { day: "Thu", hours: 3.0, height: "55%" },
      { day: "Fri", hours: 5.0, height: "95%" },
      { day: "Sat", hours: 4.5, height: "85%" },
      { day: "Sun", hours: 3.3, height: "60%" }
    ],
    weeklyTotal: "26.0 hrs",
    weeklyTarget: "Target: 20 hrs (130% achieved)",
    nextSteps: [
      {
        id: "step-1",
        title: "Complete Module: React Context API & Performance",
        time: "25 min remaining",
        action: "Continue Learning",
        category: "Skill Lesson",
        priority: "High Priority"
      },
      {
        id: "step-2",
        title: "Practice 3 Coding Challenges: Two Pointer Technique",
        time: "Daily Practice Goal",
        action: "Start Practice",
        category: "Code Practice",
        priority: "Recommended"
      },
      {
        id: "step-3",
        title: "Run AI Resume Review for Summer Internships",
        time: "ATS Match: 88%",
        action: "Upload Resume",
        category: "Resume Prep",
        priority: "Action Required"
      }
    ]
  },
  ai: {
    title: "AI & Data Science Track",
    badge: "High Growth",
    phase: "Phase 4 of 5: Deep Learning & Neural Models",
    progress: 74,
    level: "Level 5: AI Specialist Apprentice",
    xp: "1,850 XP",
    streak: "21 Days",
    skillsCompletedCount: "17 / 23 Skills Mastered",
    skills: [
      { name: "Python for Data Science (NumPy & Pandas)", progress: 100, status: "Mastered", color: "bg-emerald-500", icon: "check-circle" },
      { name: "Statistical Modeling & Exploratory Analysis", progress: 100, status: "Mastered", color: "bg-emerald-500", icon: "check-circle" },
      { name: "Machine Learning (Scikit-Learn & XGBoost)", progress: 90, status: "In Progress", color: "bg-blue-600", icon: "clock" },
      { name: "Deep Learning with PyTorch & HuggingFace", progress: 60, status: "In Progress", color: "bg-blue-500", icon: "clock" },
      { name: "Large Language Models & Prompt Tuning", progress: 30, status: "Up Next", color: "bg-slate-400", icon: "lock" }
    ],
    projectsCount: "3 / 4 Portfolio Projects",
    projects: [
      { name: "Customer Churn Prediction Engine", tech: "Python • Scikit-Learn • FastAPI", status: "Completed", score: "98/100", verified: true },
      { name: "Financial Sentiment NLP Analyzer", tech: "Transformers • BERT • Streamlit", status: "Completed", score: "94/100", verified: true },
      { name: "Multimodal Vision RAG Assistant", tech: "LangChain • ChromaDB • OpenAI", status: "In Review", score: "Pending", verified: false }
    ],
    weeklyHours: [
      { day: "Mon", hours: 3.2, height: "60%" },
      { day: "Tue", hours: 4.0, height: "75%" },
      { day: "Wed", hours: 3.0, height: "55%" },
      { day: "Thu", hours: 5.2, height: "95%" },
      { day: "Fri", hours: 4.8, height: "90%" },
      { day: "Sat", hours: 3.5, height: "65%" },
      { day: "Sun", hours: 4.3, height: "80%" }
    ],
    weeklyTotal: "28.0 hrs",
    weeklyTarget: "Target: 22 hrs (127% achieved)",
    nextSteps: [
      {
        id: "step-ai-1",
        title: "Train Fine-Tuned PyTorch Model on Kaggle Dataset",
        time: "40 min session",
        action: "Launch Notebook",
        category: "Hands-on Lab",
        priority: "High Priority"
      },
      {
        id: "step-ai-2",
        title: "Solve 5 LeetCode SQL & Data Aggregation Challenges",
        time: "Daily SQL Practice",
        action: "Start Practice",
        category: "Code Practice",
        priority: "Recommended"
      },
      {
        id: "step-ai-3",
        title: "Mock Interview: ML System Design & Tradeoffs",
        time: "AI Coach Ready",
        action: "Start Mock Interview",
        category: "Interview Prep",
        priority: "Scheduled"
      }
    ]
  },
  cloud: {
    title: "Cloud & DevOps Engineering Track",
    badge: "In Demand",
    phase: "Phase 2 of 4: CI/CD Pipelines & Containerization",
    progress: 54,
    level: "Level 3: Infrastructure Associate",
    xp: "980 XP",
    streak: "9 Days",
    skillsCompletedCount: "11 / 20 Skills Mastered",
    skills: [
      { name: "Linux Administration & Bash Shell Scripting", progress: 100, status: "Mastered", color: "bg-emerald-500", icon: "check-circle" },
      { name: "Docker Containerization & Multi-Stage Builds", progress: 90, status: "In Progress", color: "bg-blue-600", icon: "clock" },
      { name: "AWS Cloud Core (EC2, S3, IAM, VPC, RDS)", progress: 70, status: "In Progress", color: "bg-blue-500", icon: "clock" },
      { name: "Kubernetes Orchestration & Helm Charts", progress: 45, status: "In Progress", color: "bg-blue-500", icon: "clock" },
      { name: "Terraform Infrastructure as Code (IaC)", progress: 20, status: "Up Next", color: "bg-slate-400", icon: "lock" }
    ],
    projectsCount: "2 / 4 Portfolio Projects",
    projects: [
      { name: "Production Automated CI/CD GitHub Actions", tech: "Docker • GitHub Actions • AWS ECR", status: "Completed", score: "95/100", verified: true },
      { name: "Resilient Microservices on AWS ECS Cluster", tech: "Terraform • AWS • Grafana", status: "Completed", score: "91/100", verified: true },
      { name: "Kubernetes Multi-Tier Autoscaling Web App", tech: "K8s • Ingress • Prometheus", status: "In Progress", score: "60%", verified: false }
    ],
    weeklyHours: [
      { day: "Mon", hours: 2.0, height: "40%" },
      { day: "Tue", hours: 2.8, height: "50%" },
      { day: "Wed", hours: 3.5, height: "65%" },
      { day: "Thu", hours: 3.2, height: "60%" },
      { day: "Fri", hours: 4.2, height: "80%" },
      { day: "Sat", hours: 5.0, height: "95%" },
      { day: "Sun", hours: 2.3, height: "45%" }
    ],
    weeklyTotal: "23.0 hrs",
    weeklyTarget: "Target: 20 hrs (115% achieved)",
    nextSteps: [
      {
        id: "step-cloud-1",
        title: "Hands-on Lab: Configure AWS Application Load Balancer",
        time: "35 min session",
        action: "Launch AWS Lab",
        category: "Cloud Sandbox",
        priority: "High Priority"
      },
      {
        id: "step-cloud-2",
        title: "Kubernetes Pod Lifecycle & Helm Chart Architecture",
        time: "Interactive Quiz",
        action: "Take Quiz",
        category: "Assessment",
        priority: "Recommended"
      },
      {
        id: "step-cloud-3",
        title: "Run Cloud Architecture Resume Keyword Scan",
        time: "ATS Match: 82%",
        action: "Analyze Resume",
        category: "Resume Prep",
        priority: "Recommended"
      }
    ]
  }
};

let currentTrackKey = "fullstack";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  initNavbarScroll();
  initMobileMenu();
  initActiveNavSpy();
  initTrackSwitcher();
  renderDashboard(currentTrackKey);
  initModals();
  initSmoothScroll();
});

/* ----------------------------------------------------
 * Navbar Scroll Elevation Effect
 * ---------------------------------------------------- */
function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("shadow-md", "border-blue-200/90", "bg-white/95");
      navbar.classList.remove("border-blue-100/60", "bg-white/90");
    } else {
      navbar.classList.remove("shadow-md", "border-blue-200/90", "bg-white/95");
      navbar.classList.add("border-blue-100/60", "bg-white/90");
    }
  });
}

/* ----------------------------------------------------
 * Mobile Hamburger Menu Toggle
 * ---------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeBtn = document.getElementById("mobile-menu-close");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }

  function closeMenu() {
    mobileMenu.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }

  toggleBtn.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });
}

/* ----------------------------------------------------
 * Intersection Observer for Active Nav Highlight
 * ---------------------------------------------------- */
function initActiveNavSpy() {
  const sections = document.querySelectorAll("section[id]");
  const hashNavLinks = document.querySelectorAll('.desktop-nav-link[href^="#"]');

  if (sections.length === 0 || hashNavLinks.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute("id");
          hashNavLinks.forEach((link) => {
            const href = link.getAttribute("href");
            if (href === `#${currentId}`) {
              link.classList.add("text-blue-600", "font-semibold", "bg-blue-50/80");
              link.classList.remove("text-slate-600", "font-medium");
            } else {
              link.classList.remove("text-blue-600", "font-semibold", "bg-blue-50/80");
              link.classList.add("text-slate-600", "font-medium");
            }
          });
        }
      });
    },
    { threshold: 0.25, rootMargin: "-80px 0px -40% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

/* ----------------------------------------------------
 * Dashboard Track Switcher
 * ---------------------------------------------------- */
function initTrackSwitcher() {
  const buttons = document.querySelectorAll(".track-switch-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const trackKey = btn.getAttribute("data-track");
      if (trackKey && careerTracksData[trackKey]) {
        currentTrackKey = trackKey;
        buttons.forEach((b) => {
          b.classList.remove("bg-blue-600", "text-white", "shadow-sm");
          b.classList.add("text-slate-600", "hover:bg-blue-50");
        });
        btn.classList.add("bg-blue-600", "text-white", "shadow-sm");
        btn.classList.remove("text-slate-600", "hover:bg-blue-50");

        renderDashboard(trackKey);
        showToast(
          "Switched Career Track",
          `Now viewing ${careerTracksData[trackKey].title}`,
          "compass"
        );
      }
    });
  });
}

/* ----------------------------------------------------
 * Render Dashboard Elements Dynamically
 * ---------------------------------------------------- */
function renderDashboard(trackKey) {
  const data = careerTracksData[trackKey];
  if (!data) return;

  // Track Header & Badges
  const trackTitleEl = document.getElementById("dash-track-title");
  const trackPhaseEl = document.getElementById("dash-track-phase");
  const progressTextEl = document.getElementById("dash-progress-text");
  const progressBarEl = document.getElementById("dash-progress-bar");
  const progressCircleEl = document.getElementById("dash-progress-circle");
  const streakEl = document.getElementById("dash-streak-count");
  const xpEl = document.getElementById("dash-xp-count");
  const levelEl = document.getElementById("dash-level-text");

  if (trackTitleEl) trackTitleEl.textContent = data.title;
  if (trackPhaseEl) trackPhaseEl.textContent = data.phase;
  if (progressTextEl) progressTextEl.textContent = `${data.progress}%`;
  if (progressBarEl) progressBarEl.style.width = `${data.progress}%`;
  if (streakEl) streakEl.textContent = data.streak;
  if (xpEl) xpEl.textContent = data.xp;
  if (levelEl) levelEl.textContent = data.level;

  // SVG Circular progress (circumference = 2 * PI * 42 ≈ 264)
  if (progressCircleEl) {
    const circumference = 264;
    const offset = circumference - (data.progress / 100) * circumference;
    progressCircleEl.style.strokeDashoffset = offset;
  }

  // Render Skills
  const skillsListEl = document.getElementById("dash-skills-list");
  const skillsCountEl = document.getElementById("dash-skills-count");
  if (skillsCountEl) skillsCountEl.textContent = data.skillsCompletedCount;

  if (skillsListEl) {
    skillsListEl.innerHTML = data.skills
      .map(
        (skill) => `
        <div class="group bg-slate-50/70 hover:bg-blue-50/50 p-3 rounded-xl border border-slate-100 transition duration-200">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center space-x-2">
              <span class="w-6 h-6 rounded-full flex items-center justify-center ${
                skill.progress === 100
                  ? "bg-emerald-100 text-emerald-600"
                  : skill.progress > 50
                  ? "bg-blue-100 text-blue-600"
                  : "bg-slate-200 text-slate-500"
              }">
                <i data-lucide="${skill.icon}" class="w-3.5 h-3.5"></i>
              </span>
              <span class="text-sm font-semibold text-slate-800">${skill.name}</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-xs px-2 py-0.5 rounded-full font-medium ${
                skill.progress === 100
                  ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                  : skill.progress > 50
                  ? "bg-blue-50 text-blue-600 border border-blue-200"
                  : "bg-slate-100 text-slate-500"
              }">${skill.status}</span>
              <span class="text-xs font-bold text-slate-700">${skill.progress}%</span>
            </div>
          </div>
          <div class="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
            <div class="${skill.color} h-1.5 rounded-full transition-all duration-700" style="width: ${skill.progress}%"></div>
          </div>
        </div>
      `
      )
      .join("");
  }

  // Render Projects
  const projectsListEl = document.getElementById("dash-projects-list");
  const projectsCountEl = document.getElementById("dash-projects-count");
  if (projectsCountEl) projectsCountEl.textContent = data.projectsCount;

  if (projectsListEl) {
    projectsListEl.innerHTML = data.projects
      .map(
        (proj) => `
        <div class="p-3.5 bg-slate-50/70 hover:bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-sm transition duration-200">
          <div class="flex items-start justify-between">
            <div class="space-y-1">
              <div class="flex items-center space-x-2">
                <h4 class="text-sm font-bold text-slate-800">${proj.name}</h4>
                ${
                  proj.verified
                    ? `<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200"><i data-lucide="check" class="w-3 h-3 mr-0.5"></i>Verified</span>`
                    : `<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-100 text-amber-700 border border-amber-200">Reviewing</span>`
                }
              </div>
              <p class="text-xs text-slate-500 font-mono">${proj.tech}</p>
            </div>
            <div class="text-right">
              <span class="text-xs font-bold ${proj.status === "Completed" ? "text-blue-600" : "text-amber-600"}">${proj.score}</span>
              <p class="text-[11px] text-slate-400">${proj.status}</p>
            </div>
          </div>
        </div>
      `
      )
      .join("");
  }

  // Render Weekly Activity Bar Chart
  const weeklyChartEl = document.getElementById("dash-weekly-chart");
  const weeklyTotalEl = document.getElementById("dash-weekly-total");
  const weeklyTargetEl = document.getElementById("dash-weekly-target");
  if (weeklyTotalEl) weeklyTotalEl.textContent = data.weeklyTotal;
  if (weeklyTargetEl) weeklyTargetEl.textContent = data.weeklyTarget;

  if (weeklyChartEl) {
    weeklyChartEl.innerHTML = data.weeklyHours
      .map(
        (dayData) => `
        <div class="flex flex-col items-center flex-1 h-full justify-end activity-bar-group">
          <!-- Tooltip -->
          <div class="activity-tooltip absolute -top-8 bg-slate-900 text-white text-[11px] font-semibold py-1 px-2 rounded-md shadow-md pointer-events-none whitespace-nowrap z-10">
            ${dayData.day}: ${dayData.hours} hrs
          </div>
          <!-- Bar container -->
          <div class="w-full max-w-[28px] bg-blue-100/60 rounded-t-lg h-36 flex flex-col justify-end p-0.5 relative group-hover:bg-blue-100">
            <div class="bg-gradient-to-t from-blue-600 to-sky-400 w-full rounded-t-md transition-all duration-700 group-hover:from-blue-700 group-hover:to-sky-300" style="height: ${dayData.height}"></div>
          </div>
          <!-- Day label -->
          <span class="text-xs font-medium text-slate-600 mt-2">${dayData.day}</span>
        </div>
      `
      )
      .join("");
  }

  // Render Recommended Next Steps
  const nextStepsListEl = document.getElementById("dash-next-steps-list");
  if (nextStepsListEl) {
    nextStepsListEl.innerHTML = data.nextSteps
      .map(
        (step, index) => `
        <div class="p-3.5 bg-white rounded-xl border border-blue-100/90 hover:border-blue-300 shadow-sm hover:shadow transition duration-200 flex items-center justify-between gap-4">
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0 border border-blue-200">
              ${index + 1}
            </div>
            <div>
              <div class="flex items-center space-x-2">
                <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">${step.category}</span>
                <span class="text-xs text-slate-500 font-medium">${step.time}</span>
              </div>
              <h5 class="text-sm font-semibold text-slate-800 mt-1">${step.title}</h5>
            </div>
          </div>
          <button onclick="handleStepAction('${step.title}', '${step.action}')" class="shrink-0 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white text-xs font-bold transition duration-200 border border-blue-200 hover:border-blue-600">
            ${step.action}
          </button>
        </div>
      `
      )
      .join("");
  }

  // Re-run Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/* ----------------------------------------------------
 * Interactive Step Action Handlers
 * ---------------------------------------------------- */
function handleStepAction(title, action) {
  showToast(action, `Started: "${title}"`, "sparkles");
}

/* ----------------------------------------------------
 * Modals (Login & Sign Up)
 * ---------------------------------------------------- */
function initModals() {
  const modal = document.getElementById("auth-modal");
  const modalBackdrop = document.getElementById("auth-modal-backdrop");
  const closeBtn = document.getElementById("auth-modal-close");
  const loginBtns = document.querySelectorAll(".btn-trigger-login");
  const signupBtns = document.querySelectorAll(".btn-trigger-signup");
  const tabLogin = document.getElementById("tab-login");
  const tabSignup = document.getElementById("tab-signup");
  const authTitle = document.getElementById("auth-title");
  const authSubtitle = document.getElementById("auth-subtitle");
  const authSubmit = document.getElementById("auth-submit-btn");
  const demoLoginBtn = document.getElementById("btn-demo-login");
  const authForm = document.getElementById("auth-form");

  if (!modal) return;

  function openModal(mode = "login") {
    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
    setMode(mode);
  }

  function closeModal() {
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }

  function setMode(mode) {
    if (mode === "login") {
      tabLogin.classList.add("border-blue-600", "text-blue-600");
      tabLogin.classList.remove("border-transparent", "text-slate-400");
      tabSignup.classList.remove("border-blue-600", "text-blue-600");
      tabSignup.classList.add("border-transparent", "text-slate-400");

      authTitle.textContent = "Welcome Back to CareerPath";
      authSubtitle.textContent = "Continue your personalized career readiness journey.";
      authSubmit.textContent = "Log In to Dashboard";

      document.getElementById("signup-fields")?.classList.add("hidden");
    } else {
      tabSignup.classList.add("border-blue-600", "text-blue-600");
      tabSignup.classList.remove("border-transparent", "text-slate-400");
      tabLogin.classList.remove("border-blue-600", "text-blue-600");
      tabLogin.classList.add("border-transparent", "text-slate-400");

      authTitle.textContent = "Join CareerPath for Free";
      authSubtitle.textContent = "Create your student account to unlock roadmaps and coding tools.";
      authSubmit.textContent = "Create Student Account";

      document.getElementById("signup-fields")?.classList.remove("hidden");
    }
  }

  loginBtns.forEach((btn) => btn.addEventListener("click", () => openModal("login")));
  signupBtns.forEach((btn) => btn.addEventListener("click", () => openModal("signup")));

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);

  if (tabLogin) tabLogin.addEventListener("click", () => setMode("login"));
  if (tabSignup) tabSignup.addEventListener("click", () => setMode("signup"));

  // Close on Escape
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });

  // Simulated Demo Login
  if (demoLoginBtn) {
    demoLoginBtn.addEventListener("click", () => {
      const emailInput = document.getElementById("auth-email");
      const passwordInput = document.getElementById("auth-password");
      if (emailInput) emailInput.value = "alex.chen@university.edu";
      if (passwordInput) passwordInput.value = "••••••••••••";
      closeModal();
      showToast("Logged in as Alex Chen", "Welcome to your student career dashboard!", "user-check");
      
      const dash = document.getElementById("dashboard");
      if (dash && !window.location.pathname.endsWith("dashboard.html")) {
        dash.scrollIntoView({ behavior: "smooth" });
      } else if (!window.location.pathname.endsWith("dashboard.html")) {
        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 600);
      }
    });
  }

  // Form submission
  if (authForm) {
    authForm.addEventListener("submit", (e) => {
      e.preventDefault();
      closeModal();
      showToast("Welcome to CareerPath!", "Successfully authenticated. Loading dashboard...", "check-circle");
      if (!window.location.pathname.endsWith("dashboard.html")) {
        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 700);
      }
    });
  }
}

/* ----------------------------------------------------
 * Smooth Scroll for all internal hash links
 * ---------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    });
  });
}

/* ----------------------------------------------------
 * Toast Notification System
 * ---------------------------------------------------- */
let toastTimeout;
function showToast(title, message, iconName = "bell") {
  let toast = document.getElementById("toast");
  if (!toast) return;

  const toastTitle = document.getElementById("toast-title");
  const toastMsg = document.getElementById("toast-msg");
  const toastIcon = document.getElementById("toast-icon");

  if (toastTitle) toastTitle.textContent = title;
  if (toastMsg) toastMsg.textContent = message;
  // Map brand or custom icon names to valid Lucide icons for toast
  const brandIconMap = {
    github: "git-branch",
    linkedin: "share-2",
    twitter: "send",
    discord: "message-circle"
  };
  const resolvedIcon = brandIconMap[iconName] || iconName;
  if (toastIcon) toastIcon.setAttribute("data-lucide", resolvedIcon);

  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Clear previous timer
  if (toastTimeout) clearTimeout(toastTimeout);

  toast.classList.remove("translate-y-24", "opacity-0", "pointer-events-none");
  toast.classList.add("translate-y-0", "opacity-100");

  toastTimeout = setTimeout(() => {
    toast.classList.add("translate-y-24", "opacity-0", "pointer-events-none");
    toast.classList.remove("translate-y-0", "opacity-100");
  }, 3500);
}

// Make functions available globally for HTML inline handlers
window.handleStepAction = handleStepAction;
window.showToast = showToast;

/**
 * Optional Component Loader utility
 * Enables dynamic asynchronous loading of navbar.html and footer.html
 * into placeholder elements when running over an HTTP server.
 * Usage: loadComponent('navbar-placeholder', 'navbar.html');
 */
async function loadComponent(elementId, componentUrl) {
  const container = document.getElementById(elementId);
  if (!container) return;
  try {
    const response = await fetch(componentUrl);
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const htmlText = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, "text/html");
    const componentContent = doc.querySelector("header#navbar, footer#footer") || doc.body;
    container.innerHTML = componentContent.outerHTML;
    if (window.lucide) window.lucide.createIcons();
    initNavbarScroll();
    initMobileMenu();
    initModals();
  } catch (err) {
    console.warn(`Could not load component from ${componentUrl}:`, err);
  }
}
window.loadComponent = loadComponent;
