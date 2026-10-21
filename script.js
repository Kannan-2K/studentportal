const careers = [
  {
    name: "Full Stack Web Development",
    icon: "💻",
    description: "Build websites and complete web applications.",
    skills: ["Aptitude", "HTML", "CSS", "JavaScript", "Frontend Development", "Backend Development", "Database"]
  },
  {
    name: "AI & Machine Learning",
    icon: "🤖",
    description: "Explore intelligent systems and machine learning.",
    skills: ["Aptitude", "Python", "Artificial Intelligence", "Machine Learning", "Deep Learning"]
  },
  {
    name: "Cloud & DevOps",
    icon: "☁️",
    description: "Learn cloud infrastructure and software deployment.",
    skills: ["Aptitude", "Cloud Computing", "Linux", "DevOps", "Networking", "Git & GitHub"]
  },
  {
    name: "Data Science & SQL",
    icon: "📊",
    description: "Work with data, databases, and analytics.",
    skills: ["Aptitude", "Python", "SQL", "Statistics", "Data Analysis", "Data Visualization"]
  },
  {
    name: "Mobile App Development",
    icon: "📱",
    description: "Learn the foundations of mobile application development.",
    skills: ["Aptitude", "Java", "Kotlin", "Mobile Development", "UI Basics", "App Testing"]
  },
  {
    name: "Cybersecurity",
    icon: "🔐",
    description: "Understand networks, threats, and digital security.",
    skills: ["Aptitude", "Networking", "Cybersecurity", "Ethical Hacking", "Linux", "Security Basics"]
  }
];

/*
  Question format:
  [question, [four options], correct option index]

  Add 60 different questions for each topic to support
  three unique sets of 20 questions.
*/

const banks = {
  "Aptitude": [
    ["What is 25% of 240?", ["40", "50", "60", "80"], 2],
    ["What is 15 × 12?", ["160", "170", "180", "190"], 2],
    ["Find the next number: 3, 6, 9, 12, ?", ["13", "14", "15", "18"], 2],
    ["If 5 pens cost ₹75, what is the cost of one pen?", ["₹10", "₹12", "₹15", "₹20"], 2],
    ["What is the square of 13?", ["156", "169", "179", "196"], 1],
    ["What is 144 ÷ 12?", ["10", "11", "12", "14"], 2],
    ["What is 20% of 350?", ["50", "60", "70", "80"], 2],
    ["Complete the sequence: 2, 4, 8, 16, ?", ["20", "24", "30", "32"], 3],
    ["Which is the odd one out?", ["Apple", "Mango", "Carrot", "Banana"], 2],
    ["If today is Tuesday, what day will it be after 3 days?", ["Thursday", "Friday", "Saturday", "Sunday"], 1],
    ["What is 9²?", ["18", "72", "81", "99"], 2],
    ["A ₹800 item has a 10% discount. What is its price?", ["₹700", "₹720", "₹740", "₹780"], 1],
    ["Find the next number: 5, 10, 20, 40, ?", ["45", "60", "70", "80"], 3],
    ["Choose a synonym for 'rapid'.", ["Slow", "Fast", "Weak", "Late"], 1],
    ["If A=1, B=2, C=3, what is the value of E?", ["3", "4", "5", "6"], 2],
    ["Choose the opposite of 'expand'.", ["Increase", "Enlarge", "Contract", "Extend"], 2],
    ["How many minutes are in 3 hours?", ["120", "150", "180", "240"], 2],
    ["Which is the largest number?", ["0.45", "0.54", "0.405", "0.504"], 1],
    ["A person walks 4 km north and 4 km south. How far are they from the starting point?", ["0 km", "4 km", "8 km", "2 km"], 0],
    ["What is the average of 10, 20 and 30?", ["15", "20", "25", "30"], 1],
    ["What is 35% of 200?", ["50", "60", "70", "80"], 2],
    ["If 8 workers finish a job in 6 days, how many worker-days are needed?", ["14", "24", "48", "56"], 2],
    ["Find the next number: 1, 4, 9, 16, ?", ["20", "24", "25", "36"], 2],
    ["What is the simple interest on ₹1000 at 10% per year for 2 years?", ["₹100", "₹150", "₹200", "₹250"], 2],
    ["A car travels 120 km in 2 hours. What is its average speed?", ["40 km/h", "50 km/h", "60 km/h", "80 km/h"], 2],
    ["What is 7 × 8?", ["48", "54", "56", "64"], 2],
    ["Which fraction equals 0.5?", ["1/4", "1/3", "1/2", "3/4"], 2],
    ["If 3x = 21, what is x?", ["6", "7", "8", "9"], 1],
    ["What is the perimeter of a square with side 5 cm?", ["10 cm", "15 cm", "20 cm", "25 cm"], 2],
    ["How many degrees are in a right angle?", ["45", "60", "90", "180"], 2],
    ["A dozen contains how many items?", ["10", "12", "20", "24"], 1],
    ["What is 1000 − 375?", ["525", "575", "625", "675"], 2],
    ["Find the next number: 7, 14, 21, 28, ?", ["30", "32", "35", "42"], 2],
    ["Which word is spelled correctly?", ["Accomodate", "Acommodate", "Accommodate", "Acomodate"], 2],
    ["What is the median of 3, 8, 9, 10, 15?", ["8", "9", "10", "15"], 1],
    ["What is 5³?", ["15", "25", "75", "125"], 3],
    ["If a product costs ₹400 after a 20% discount, what was its original price?", ["₹450", "₹480", "₹500", "₹520"], 2],
    ["Which number is prime?", ["21", "27", "29", "33"], 2],
    ["What is 2/5 expressed as a percentage?", ["20%", "25%", "40%", "50%"], 2],
    ["Complete the series: 100, 90, 80, 70, ?", ["50", "55", "60", "65"], 2],
    ["A train travels 180 km in 3 hours. What is its speed?", ["45 km/h", "50 km/h", "60 km/h", "90 km/h"], 2],
    ["What is the cube root of 27?", ["2", "3", "6", "9"], 1],
    ["If all roses are flowers, which statement is definitely true?", ["All flowers are roses", "Roses are flowers", "No roses are flowers", "All plants are roses"], 1],
    ["Which is the smallest?", ["0.7", "0.07", "0.77", "0.17"], 1],
    ["What is the sum of the first five positive integers?", ["10", "15", "20", "25"], 1],
    ["A class has 30 students and 18 are girls. How many are boys?", ["10", "12", "15", "18"], 1],
    ["Which is the next letter: A, C, E, G, ?", ["H", "I", "J", "K"], 1],
    ["What is 48 ÷ 6?", ["6", "7", "8", "9"], 2],
    ["If a = 4 and b = 5, what is a + 2b?", ["9", "12", "14", "18"], 2],
    ["What is the area of a rectangle of length 8 cm and width 3 cm?", ["11 cm²", "16 cm²", "24 cm²", "32 cm²"], 2],
    ["Which number is divisible by 3?", ["124", "125", "126", "127"], 2],
    ["What is 1/4 of 100?", ["20", "25", "30", "40"], 1],
    ["If yesterday was Friday, what day is tomorrow?", ["Saturday", "Sunday", "Monday", "Tuesday"], 1],
    ["Choose the opposite of 'ancient'.", ["Old", "Historic", "Modern", "Past"], 2],
    ["What is 11 × 11?", ["111", "121", "131", "144"], 1],
    ["A bag has 3 red and 2 blue balls. How many balls are there?", ["3", "4", "5", "6"], 2],
    ["What is the next number: 11, 22, 33, 44, ?", ["45", "50", "55", "66"], 2],
    ["How many sides does a hexagon have?", ["5", "6", "7", "8"], 1],
    ["What is 60% of 50?", ["20", "25", "30", "35"], 2],
    ["Which is equal to 2 hours 30 minutes?", ["120 minutes", "130 minutes", "150 minutes", "180 minutes"], 2]
  ],

  "HTML": [
    ["What does HTML stand for?", ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], 0],
    ["Which tag creates a hyperlink?", ["<img>", "<a>", "<p>", "<link>"], 1],
    ["Which tag represents the main heading?", ["<h6>", "<head>", "<h1>", "<heading>"], 2],
    ["Which tag displays an image?", ["<image>", "<pic>", "<img>", "<src>"], 2],
    ["Which tag creates a paragraph?", ["<p>", "<para>", "<text>", "<pg>"], 0],
    ["Which attribute provides alternative image text?", ["title", "src", "alt", "href"], 2],
    ["Which tag creates an unordered list?", ["<ol>", "<ul>", "<li>", "<list>"], 1],
    ["Which tag creates a line break?", ["<break>", "<lb>", "<br>", "<hr>"], 2],
    ["Which attribute specifies a link destination?", ["src", "href", "alt", "class"], 1],
    ["Which element defines the browser tab title?", ["<h1>", "<title>", "<header>", "<caption>"], 1],
    ["Which tag creates a form?", ["<form>", "<inputbox>", "<fieldsetpage>", "<data>"], 0],
    ["Which tag defines a table row?", ["<td>", "<th>", "<tr>", "<table-row>"], 2],
    ["Which element marks important text?", ["<b>", "<strong>", "<i>", "<small>"], 1],
    ["Which attribute gives an element a unique identifier?", ["class", "name", "id", "style"], 2],
    ["Which element embeds a video?", ["<movie>", "<media>", "<video>", "<play>"], 2],
    ["Which tag creates an ordered list?", ["<ul>", "<ol>", "<li>", "<order>"], 1],
    ["Which element contains the visible page content?", ["<head>", "<body>", "<title>", "<meta>"], 1],
    ["Which input type hides typed characters?", ["text", "password", "hidden-text", "secure"], 1],
    ["Which declaration identifies an HTML5 document?", ["<!DOCTYPE html>", "<html5>", "<!HTML>", "<doctype>"], 0],
    ["Which tag creates a list item?", ["<item>", "<li>", "<ul>", "<listitem>"], 1],
    ["Which element defines metadata?", ["<meta>", "<datafield>", "<info>", "<details>"], 0],
    ["Which attribute opens a link in a new tab?", ["target='_blank'", "open='new'", "tab='new'", "window='open'"], 0],
    ["Which element is used for a table cell?", ["<tr>", "<td>", "<tablecell>", "<tc>"], 1],
    ["Which tag creates a horizontal thematic break?", ["<line>", "<br>", "<hr>", "<separator>"], 2],
    ["Which element is used to collect user input?", ["<input>", "<enter>", "<collect>", "<get>"], 0],
    ["Which attribute makes an input mandatory?", ["needed", "required", "must", "validate"], 1],
    ["Which tag defines navigation links?", ["<navigate>", "<nav>", "<links>", "<menu-bar>"], 1],
    ["Which tag represents the footer of a page or section?", ["<bottom>", "<foot>", "<footer>", "<end>"], 2],
    ["Which element groups related form controls?", ["<fieldset>", "<formgroup>", "<controls>", "<group>"], 0],
    ["Which tag is used to play audio?", ["<sound>", "<audio>", "<music>", "<speaker>"], 1],
    ["Which attribute specifies an image file?", ["href", "alt", "src", "file"], 2],
    ["Which element provides a drop-down list?", ["<select>", "<dropdown>", "<optionlist>", "<choices>"], 0],
    ["Which tag defines a table heading cell?", ["<th>", "<theadcell>", "<tdh>", "<head>"], 0],
    ["Which element marks emphasized text?", ["<em>", "<marking>", "<italic-text>", "<strong-only>"], 0],
    ["Which element can display expandable details?", ["<expand>", "<details>", "<open>", "<summary-box>"], 1],
    ["Which tag defines a caption for a figure?", ["<caption>", "<figcaption>", "<figuretitle>", "<figtitle>"], 1],
    ["Which element contains CSS style rules inside HTML?", ["<css>", "<style>", "<design>", "<stylesheet>"], 1],
    ["Which element loads JavaScript from a file?", ["<javascript>", "<code>", "<script>", "<js>"], 2],
    ["Which attribute defines an element's CSS class?", ["id", "class", "style-name", "group"], 1],
    ["Which element represents a standalone article?", ["<section>", "<article>", "<main-text>", "<content>"], 1],
    ["Which element represents the primary page content?", ["<main>", "<body-main>", "<primary>", "<content>"], 0],
    ["Which tag inserts a line break in text?", ["<lb>", "<br>", "<newline>", "<breakline>"], 1],
    ["Which tag creates a definition list?", ["<dl>", "<ul>", "<def>", "<list-def>"], 0],
    ["Which tag represents a term in a definition list?", ["<dt>", "<term>", "<ddt>", "<dl-item>"], 0],
    ["Which attribute specifies the language of an HTML document?", ["lang", "language", "locale", "type"], 0],
    ["Which tag defines a column group in a table?", ["<col>", "<columns>", "<colgroup>", "<tablecols>"], 2],
    ["Which element creates a clickable button?", ["<click>", "<button>", "<press>", "<action>"], 1],
    ["Which attribute specifies a form submission destination?", ["href", "src", "action", "target"], 2],
    ["Which tag defines a section of a document?", ["<section>", "<part>", "<area>", "<division>"], 0],
    ["Which attribute specifies an input's initial value?", ["default", "value", "start", "initial"], 1],
    ["Which element shows a short quotation?", ["<quote>", "<q>", "<blockquote-short>", "<say>"], 1],
    ["Which tag is used for a long quotation?", ["<q>", "<quotation>", "<blockquote>", "<quote-long>"], 2],
    ["Which attribute connects a label to an input ID?", ["for", "target", "idref", "connect"], 0],
    ["Which tag defines a description list's description?", ["<dt>", "<dd>", "<dl>", "<desc>"], 1],
    ["Which attribute can provide a tooltip?", ["alt", "hint", "title", "tooltip-text"], 2],
    ["Which element marks highlighted text?", ["<highlight>", "<mark>", "<em>", "<light>"], 1],
    ["Which element defines a date or time value?", ["<datetime>", "<clock>", "<time>", "<date>"], 2],
    ["Which attribute sets the maximum length of text input?", ["maxlength", "maxtext", "textlimit", "length"], 0],
    ["Which tag creates a clickable link to an email address?", ["<mail>", "<a href='mailto:...'>", "<email>", "<send>"], 1],
    ["Which element represents a generic inline container?", ["<div>", "<span>", "<section>", "<inline>"], 1]
  ],

  "CSS": [
    ["What does CSS stand for?", ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], 1],
    ["Which property changes text colour?", ["font-style", "background", "color", "text-size"], 2],
    ["Which declaration enables Flexbox?", ["position:flex", "display:flex", "flex:display", "layout:flex"], 1],
    ["Which property changes background colour?", ["color", "bgcolor", "background-color", "background-text"], 2],
    ["Which selector targets an ID?", [".", "#", "*", "@"], 1],
    ["Which property changes text size?", ["font-size", "text-style", "font-weight", "size"], 0],
    ["Which unit is relative to the root font size?", ["px", "em", "rem", "cm"], 2],
    ["Which property rounds corners?", ["corner", "border-round", "border-radius", "radius"], 2],
    ["Which declaration creates a grid container?", ["display:grid", "grid:display", "position:grid", "layout:grid"], 0],
    ["Which pseudo-class applies when the pointer hovers over an element?", [":focus", ":active", ":hover", ":visited"], 2],
    ["Which property adds space inside an element?", ["margin", "padding", "gap", "outline"], 1],
    ["Which property adds space outside an element?", ["padding", "margin", "border", "width"], 1],
    ["Which rule supports responsive styles?", ["@media", "@screen", "@responsive", "@width"], 0],
    ["Which property controls stacking order?", ["position-index", "layer", "z-index", "stack"], 2],
    ["Which value removes an element from layout?", ["visibility:hidden", "opacity:0", "display:none", "hidden:true"], 2],
    ["Which property makes text bold?", ["font-style", "font-weight", "text-bold", "bold"], 1],
    ["Which property controls flex or grid spacing?", ["spacing", "gap", "padding", "margin-inside"], 1],
    ["Which property changes the mouse cursor?", ["mouse", "pointer", "cursor", "hover"], 2],
    ["Which property sets element width?", ["width", "size", "length", "element-width"], 0],
    ["Which property animates changes smoothly?", ["transition", "transform-only", "smooth", "motion"], 0],
    ["Which selector targets every element?", ["#", ".", "*", "&"], 2],
    ["Which property controls line spacing?", ["line-height", "letter-space", "text-height", "line-gap"], 0],
    ["Which property aligns text horizontally?", ["text-align", "align-items", "justify-content", "text-position"], 0],
    ["Which property controls an element's transparency?", ["transparent", "opacity", "visibility", "alpha-color"], 1],
    ["Which property changes font family?", ["font-family", "font-type", "text-font", "family"], 0],
    ["Which position value keeps an element in normal flow and offsets it?", ["absolute", "fixed", "relative", "sticky-only"], 2],
    ["Which display value makes an element a block-level flex container?", ["display:flex", "display:inline", "position:flex", "flex:block"], 0],
    ["Which property controls how an image fits its box?", ["object-fit", "image-size", "fit-image", "background-fit"], 0],
    ["Which property adds a shadow around a box?", ["shadow", "box-shadow", "border-shadow", "element-shadow"], 1],
    ["Which property changes border thickness?", ["border-width", "border-size", "outline-width", "line-size"], 0],
    ["Which property controls whether text is underlined?", ["font-decoration", "text-decoration", "text-style", "underline"], 1],
    ["Which property prevents text from wrapping?", ["text-wrap:none", "white-space:nowrap", "wrap:false", "overflow-text"], 1],
    ["Which value hides overflow content?", ["overflow:hidden", "display:hidden", "content:none", "hide:overflow"], 0],
    ["Which property changes an element's minimum width?", ["min-width", "width-min", "minimum-size", "small-width"], 0],
    ["Which property aligns flex items along the cross axis?", ["justify-content", "align-items", "flex-direction", "align-content-only"], 1],
    ["Which property sets the main direction of flex items?", ["flex-direction", "flex-align", "direction-items", "main-axis"], 0],
    ["Which value puts a flex item on a new line when needed?", ["flex-wrap:wrap", "flex-break", "wrap:flex", "flex-newline"], 0],
    ["Which property sets the space between letters?", ["word-spacing", "letter-spacing", "text-gap", "font-spacing"], 1],
    ["Which property controls list marker style?", ["list-style-type", "marker-style", "list-marker", "bullet-type"], 0],
    ["Which pseudo-class targets the first child?", [":first", ":first-child", ":child-first", "::first"], 1],
    ["Which pseudo-element styles the first letter?", ["::first-letter", ":first-letter-only", "::letter", "::first"], 0],
    ["Which property changes the order of flex items?", ["flex-order", "order", "item-index", "position-order"], 1],
    ["Which property allows an element to grow in a flex layout?", ["flex-grow", "grow-flex", "flex-size", "grow"], 0],
    ["Which property controls shrinking in Flexbox?", ["flex-shrink", "shrink-flex", "flex-reduce", "reduce"], 0],
    ["Which property defines grid columns?", ["grid-template-columns", "grid-columns", "columns-grid", "grid-column-size"], 0],
    ["Which unit represents a fraction of available grid space?", ["px", "fr", "rem", "vw"], 1],
    ["Which property defines the space between grid rows?", ["row-gap", "grid-margin", "row-space", "grid-row-margin"], 0],
    ["Which property creates rounded corners?", ["border-radius", "corner-style", "radius-border", "rounding"], 0],
    ["Which property changes an element's height?", ["height", "size-y", "element-length", "vertical-size"], 0],
    ["Which property changes an element's background image?", ["image-src", "background-image", "background-src", "image-background"], 1],
    ["Which value makes an element stay at a viewport position?", ["absolute", "fixed", "relative", "static"], 1],
    ["Which value is the default positioning mode?", ["relative", "absolute", "static", "fixed"], 2],
    ["Which property controls the duration of a transition?", ["transition-time", "transition-duration", "animation-speed", "change-time"], 1],
    ["Which at-rule defines keyframe animations?", ["@animation", "@keyframes", "@motion", "@frames"], 1],
    ["Which property repeats a background image?", ["background-repeat", "image-repeat", "repeat-image", "background-loop"], 0],
    ["Which property sets the maximum width of an element?", ["max-width", "width-max", "width-limit", "maximum-size"], 0],
    ["Which value makes a container's width adapt to its parent?", ["width:auto", "width:parent", "width:fit-parent", "width:inherit-only"], 0],
    ["Which property controls the space between words?", ["word-spacing", "letter-spacing", "text-indent", "line-height"], 0],
    ["Which property sets inner space in a box model?", ["margin", "padding", "border", "outline"], 1],
    ["Which property controls the style of a border?", ["border-style", "border-look", "line-style", "outline-style"], 0]
  ]
};

/*
  For topics without a dedicated bank, use this separate bank.
  Replace these with topic-specific questions before your final submission.
*/
const generalBank = [
  ["What is a good first step when learning a new technical skill?", ["Practise the basics", "Skip the basics", "Ignore examples", "Avoid practice"], 0],
  ["What is the purpose of documentation?", ["Decorate a project", "Explain how something works", "Replace testing", "Increase file size"], 1],
  ["How should you investigate an error?", ["Change everything", "Ignore the message", "Read the error and test a change", "Delete the project"], 2],
  ["Why is version control useful?", ["Tracks code changes", "Designs logos", "Replaces the internet", "Automatically removes bugs"], 0],
  ["What should you do before releasing an application?", ["Test important features", "Delete source files", "Disable security", "Ignore feedback"], 0]
];

const completedSets = {};
const completedScores = [];
const exploredSkills = new Set();

let selectedCareer = null;
let selectedTopic = "";
let selectedSet = 1;
let currentQuestions = [];
let currentIndex = 0;
let userAnswers = [];
let timerSeconds = 900;
let timerInterval = null;
let quizFinished = false;
let previousScreen = "setsScreen";

const $ = id => document.getElementById(id);

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.toggle("hidden", screen.id !== screenId);
  });

  document.querySelectorAll(".nav-links button").forEach(button => {
    button.classList.toggle(
      "active",
      (screenId === "homeScreen" && button.id === "homeBtn") ||
      (screenId === "trackerScreen" && button.id === "trackerBtn") ||
      (["skillsScreen", "topicsScreen"].includes(screenId) && button.id === "skillsBtn") ||
      (["setsScreen", "quizScreen", "resultsScreen"].includes(screenId) && button.id === "quizNavBtn")
    );
  });

  $("navLinks").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function notify(message) {
  $("toast").textContent = message;
  $("toast").classList.remove("hidden");
  setTimeout(() => $("toast").classList.add("hidden"), 2400);
}

function getCareer(name) {
  return careers.find(career => career.name === name);
}

function makeCard({ icon, title, description, label, actionText, onClick }) {
  const card = document.createElement("button");
  card.className = "skill-card";
  card.innerHTML = `
    <div class="card-icon">${icon}</div>
    <h3></h3>
    <p></p>
    <span class="skill-tag"></span>
    <div class="card-bottom">
      <span>${actionText || "Explore →"}</span>
      <span>↗</span>
    </div>
  `;

  card.querySelector("h3").textContent = title;
  card.querySelector("p").textContent = description;
  card.querySelector(".skill-tag").textContent = label || "Explore";

  card.addEventListener("click", onClick);
  return card;
}

function renderTracker() {
  $("trackerGrid").innerHTML = "";

  careers.forEach(career => {
    const card = document.createElement("button");
    card.className = "career-card";

    card.innerHTML = `
      <div class="card-icon">${career.icon}</div>
      <h3></h3>
      <p></p>
      <div class="card-bottom">
        <span>${career.skills.length} learning topics</span>
        <span>Explore →</span>
      </div>
    `;

    card.querySelector("h3").textContent = career.name;
    card.querySelector("p").textContent = career.description;
    card.addEventListener("click", () => openCareer(career));

    $("trackerGrid").appendChild(card);
  });

  $("trackCount").textContent = careers.length;
  updateDashboardStats();
}

function updateDashboardStats() {
  $("skillCount").textContent = exploredSkills.size;
  $("quizCount").textContent = completedScores.length;

  const average = completedScores.length
    ? Math.round(completedScores.reduce((sum, item) => sum + item.percent, 0) / completedScores.length)
    : 0;

  $("averageScore").textContent = average + "%";
  renderProgress();
}

function renderProgress() {
  $("progressList").innerHTML = "";

  careers.forEach(career => {
    let total = 0;
    let passed = 0;

    career.skills.forEach(topic => {
      const key = career.name + "|" + topic;
      const completed = completedSets[key] || [];
      total += completed.length;
      passed += completed.length;
    });

    const percentage = Math.min(100, Math.round((passed / 3) * 100));

    const row = document.createElement("div");
    row.className = "progress-item";
    row.innerHTML = `
      <div class="progress-label">
        <span class="progress-title"></span>
        <span>${percentage}%</span>
      </div>
      <div class="progress-bar"><div style="width:${percentage}%"></div></div>
    `;

    row.querySelector(".progress-title").textContent = career.name;
    $("progressList").appendChild(row);
  });
}

function openCareer(career) {
  selectedCareer = career;
  renderSkills();
  showScreen("skillsScreen");
}

function renderCareerFilter() {
  const filter = $("careerFilter");

  filter.innerHTML = '<option value="all">All Career Tracks</option>';

  careers.forEach(career => {
    const option = document.createElement("option");
    option.value = career.name;
    option.textContent = career.name;
    filter.appendChild(option);
  });
}

function renderSkills() {
  const filterValue = $("careerFilter").value;
  $("skillsGrid").innerHTML = "";

  const shownCareers = filterValue === "all"
    ? careers
    : careers.filter(career => career.name === filterValue);

  shownCareers.forEach(career => {
    career.skills.forEach((topic, index) => {
      const icon = topic === "Aptitude"
        ? "🧠"
        : ["📘", "💻", "⚙️", "🧩", "📊"][index % 5];

      const card = makeCard({
        icon,
        title: topic,
        description: `${career.name} · Practise this skill with its own quiz sets.`,
        label: topic === "Aptitude" ? "Aptitude Practice" : "Technical Skill",
        actionText: "View Quiz Sets →",
        onClick: () => {
          selectedCareer = career;
          selectedTopic = topic;
          exploredSkills.add(career.name + "|" + topic);
          renderTopicsAndSets();
          updateDashboardStats();
          showScreen("topicsScreen");
        }
      });

      $("skillsGrid").appendChild(card);
    });
  });
}

function renderTopicsAndSets() {
  $("topicsTitle").textContent = selectedTopic;
  $("topicsDescription").textContent =
    `${selectedCareer.name} · Choose a quiz set for ${selectedTopic}.`;

  $("topicsGrid").innerHTML = "";

  for (let setNumber = 1; setNumber <= 3; setNumber++) {
    const key = selectedCareer.name + "|" + selectedTopic;
    const completed = (completedSets[key] || []).includes(setNumber);

    const card = makeCard({
      icon: completed ? "✅" : "📝",
      title: "Quiz Set " + setNumber,
      description: completed
        ? "Completed. You can review your result or try another set."
        : "20 multiple-choice questions with a 15-minute timer.",
      label: completed ? "Completed" : "20 Questions",
      actionText: completed ? "Practise Again →" : "Start Quiz →",
      onClick: () => openSets()
    });

    $("topicsGrid").appendChild(card);
  }
}

function openSets() {
  $("setsTitle").textContent = selectedTopic + " Quiz Sets";
  $("setsGrid").innerHTML = "";

  for (let setNumber = 1; setNumber <= 3; setNumber++) {
    const key = selectedCareer.name + "|" + selectedTopic;
    const completed = (completedSets[key] || []).includes(setNumber);

    const card = document.createElement("button");
    card.className = "set-card" + (completed ? " completed" : "");

    card.innerHTML = `
      <div class="set-number">${String(setNumber).padStart(2, "0")}</div>
      <h3>Quiz Set ${setNumber}</h3>
      <p>${completed ? "Previously completed" : "20 MCQs · 15 minutes"}</p>
      <div class="card-bottom">
        <span>${completed ? "Practise Again" : "Start Practice"}</span>
        <span>→</span>
      </div>
    `;

    card.addEventListener("click", () => startQuiz(setNumber));
    $("setsGrid").appendChild(card);
  }

  showScreen("setsScreen");
}

function getBank(topic) {
  if (banks[topic]) return banks[topic];

  /*
    This fallback is temporary for topics without a dedicated
    question bank. It is not a substitute for topic-specific questions.
  */
  return generalBank;
}

function startQuiz(setNumber) {
  const bank = getBank(selectedTopic);

  if (bank.length < 20) {
    notify("This topic needs more unique questions before it can support a 20-question quiz.");
    return;
  }

  const key = selectedCareer.name + "|" + selectedTopic;
  const completed = completedSets[key] || [];

  /*
    Each set uses a non-overlapping 20-question range:
    Set 1 = questions 1–20
    Set 2 = questions 21–40
    Set 3 = questions 41–60

    A topic needs at least 60 questions for three full unique sets.
  */
  const start = (setNumber - 1) * 20;
  const end = start + 20;

  if (bank.length < end) {
    notify("This topic does not have 20 new questions available for this set yet.");
    return;
  }

  currentQuestions = bank.slice(start, end).map(item => ({
    question: item[0],
    options: [...item[1]],
    answer: item[2]
  }));

  selectedSet = setNumber;
  currentIndex = 0;
  userAnswers = new Array(20).fill(null);
  timerSeconds = 900;
  quizFinished = false;

  $("quizCareerLabel").textContent = selectedCareer.name;
  $("quizCareerName").textContent = selectedCareer.name;
  $("quizTopicName").textContent = selectedTopic;

  showScreen("quizScreen");
  renderQuestion();
  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  updateTimer();

  timerInterval = setInterval(() => {
    timerSeconds--;
    updateTimer();

    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      finishQuiz();
    }
  }, 1000);
}

function updateTimer() {
  const minutes = Math.floor(timerSeconds / 60);
  const seconds = timerSeconds % 60;

  $("timer").textContent =
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0");
}

function renderQuestion() {
  const question = currentQuestions[currentIndex];

  $("questionNumber").textContent =
    `QUESTION ${currentIndex + 1} OF ${currentQuestions.length}`;

  $("questionText").textContent = question.question;

  $("quizProgress").style.width =
    ((currentIndex + 1) / currentQuestions.length * 100) + "%";

  $("answerOptions").innerHTML = "";
  $("answerFeedback").textContent = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-option";

    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = String.fromCharCode(65 + index);

    const text = document.createElement("span");
    text.textContent = option;

    button.append(letter, text);

    if (userAnswers[currentIndex] === index) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => {
      userAnswers[currentIndex] = index;
      renderQuestion();
    });

    $("answerOptions").appendChild(button);
  });

  $("previousQuestionBtn").disabled = currentIndex === 0;
  $("previousQuestionBtn").style.opacity = currentIndex === 0 ? "0.45" : "1";

  $("nextQuestionBtn").textContent =
    currentIndex === currentQuestions.length - 1
      ? "Finish Quiz ✓"
      : "Next Question →";
}

function nextQuestion() {
  if (currentIndex < currentQuestions.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function previousQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
}

function finishQuiz() {
  if (quizFinished) return;

  quizFinished = true;
  clearInterval(timerInterval);

  let correct = 0;
  let wrong = 0;
  let unanswered = 0;

  currentQuestions.forEach((question, index) => {
    if (userAnswers[index] === null) {
      unanswered++;
    } else if (userAnswers[index] === question.answer) {
      correct++;
    } else {
      wrong++;
    }
  });

  const percent = Math.round(correct / currentQuestions.length * 100);

  $("resultScore").textContent = `${correct}/20`;
  $("resultPercent").textContent = `${percent}%`;
  $("resultCorrect").textContent = correct;
  $("resultWrong").textContent = wrong;
  $("resultUnanswered").textContent = unanswered;

  $("resultMessage").textContent =
    percent >= 80
      ? "Excellent work! You have performed very well."
      : percent >= 60
        ? "Good progress! Review your answers to improve further."
        : "Keep practising. Review the correct answers and try again.";

  const key = selectedCareer.name + "|" + selectedTopic;

  if (!completedSets[key]) completedSets[key] = [];

  if (!completedSets[key].includes(selectedSet)) {
    completedSets[key].push(selectedSet);
  }

  completedScores.push({
    career: selectedCareer.name,
    topic: selectedTopic,
    set: selectedSet,
    percent
  });

  buildReview();
  $("reviewSection").classList.add("hidden");
  $("reviewAnswersBtn").textContent = "Review Answers";

  updateDashboardStats();
  showScreen("resultsScreen");
}

function buildReview() {
  $("reviewAnswersList").innerHTML = "";

  currentQuestions.forEach((question, index) => {
    const item = document.createElement("article");
    item.className = "review-item";

    const heading = document.createElement("h3");
    heading.textContent = `${index + 1}. ${question.question}`;

    const yourAnswer = document.createElement("p");
    yourAnswer.textContent = "Your answer: " +
      (userAnswers[index] === null
        ? "Not answered"
        : question.options[userAnswers[index]]);

    const correctAnswer = document.createElement("p");
    correctAnswer.textContent =
      "Correct answer: " + question.options[question.answer];

    const status = document.createElement("p");
    const correct = userAnswers[index] === question.answer;

    status.className = "review-status";
    status.textContent = correct ? "✓ Correct" : "✕ Incorrect";
    status.style.color = correct ? "#16845b" : "#c24141";

    item.append(heading, yourAnswer, correctAnswer, status);
    $("reviewAnswersList").appendChild(item);
  });
}

/* NAVIGATION */

$("homeLink").addEventListener("click", event => {
  event.preventDefault();
  showScreen("homeScreen");
});

$("homeBtn").addEventListener("click", () => showScreen("homeScreen"));

$("trackerBtn").addEventListener("click", () => {
  renderTracker();
  showScreen("trackerScreen");
});

$("skillsBtn").addEventListener("click", () => {
  $("careerFilter").value = "all";
  renderSkills();
  showScreen("skillsScreen");
});

$("quizNavBtn").addEventListener("click", () => {
  if (!selectedCareer) {
    notify("Choose a career track first.");
    showScreen("trackerScreen");
    return;
  }

  if (!selectedTopic) {
    showScreen("skillsScreen");
    return;
  }

  openSets();
});

$("startBtn").addEventListener("click", () => {
  renderTracker();
  showScreen("trackerScreen");
});

$("exploreSkillsBtn").addEventListener("click", () => {
  $("careerFilter").value = "all";
  renderSkills();
  showScreen("skillsScreen");
});

$("allTracksBtn").addEventListener("click", () => {
  renderTracker();
  showScreen("trackerScreen");
});

$("careerFilter").addEventListener("change", renderSkills);

$("backSkillsBtn").addEventListener("click", () => showScreen("skillsScreen"));

$("backTopicsBtn").addEventListener("click", () => showScreen("topicsScreen"));

$("previousQuestionBtn").addEventListener("click", previousQuestion);

$("nextQuestionBtn").addEventListener("click", nextQuestion);

$("exitQuizBtn").addEventListener("click", () => {
  clearInterval(timerInterval);
  openSets();
});

$("reviewAnswersBtn").addEventListener("click", () => {
  const isHidden = $("reviewSection").classList.toggle("hidden");
  $("reviewAnswersBtn").textContent = isHidden ? "Review Answers" : "Hide Review";
});

$("retryQuizBtn").addEventListener("click", openSets);

$("dashboardBtn").addEventListener("click", () => {
  renderTracker();
  showScreen("trackerScreen");
});

$("menuBtn").addEventListener("click", () => {
  $("navLinks").classList.toggle("open");
});

$("loginBtn").addEventListener("click", () => {
  notify("Login needs an authentication system.");
});

$("signupBtn").addEventListener("click", () => {
  notify("Sign-up needs an authentication system.");
});

document.querySelectorAll("[data-page]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const page = link.dataset.page;

    if (page === "skillsScreen") renderSkills();
    if (page === "trackerScreen") renderTracker();

    showScreen(page);
  });
});

document.querySelectorAll(".footer-career").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();

    const career = getCareer(link.dataset.career);

    if (career) openCareer(career);
  });
});

/* INITIALISE */

renderCareerFilter();
renderTracker();
renderSkills();
showScreen("homeScreen");
