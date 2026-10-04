const THEMES = {
  light: { bg: "bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100", card: "bg-white", text: "text-gray-800" },
  dark: { bg: "bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900", card: "bg-gray-800", text: "text-gray-100" },
  ocean: { bg: "bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-100", card: "bg-white", text: "text-gray-800" },
  sunset: { bg: "bg-gradient-to-br from-orange-50 via-red-50 to-pink-100", card: "bg-white", text: "text-gray-800" }
};

let currentTheme = localStorage.getItem("theme") || "light";

function applyTheme(name) {
  currentTheme = name;
  localStorage.setItem("theme", name);
  const theme = THEMES[name];
  document.body.className = theme.bg + " min-h-screen transition-all duration-500";
  document.querySelectorAll(".theme-card").forEach(el => {
    el.className = el.className.replace(/bg-\w+-\d+/g, theme.card);
  });
  document.querySelectorAll(".theme-text").forEach(el => {
    el.className = el.className.replace(/text-gray-\d+/g, theme.text);
  });
}

const HOOK_TEMPLATES = {
  gaming: [
    "This TOPIC mechanic is BROKEN",
    "I reached {rank} with TOPIC in {days} days",
    "TOPIC pros don't want you to know this",
    "Why YOU are stuck with TOPIC",
    "The TOPIC meta is changing EVERYTHING",
    "I tried TOPIC for {days} days and {result}",
    "{number} TOPIC tips from a pro player",
    "This TOPIC strategy got me to {rank}",
    "TOPIC is ruining the game (here's why)",
    "The secret to mastering TOPIC in {timeframe}",
    "Why {percent}% of players fail at TOPIC",
    "TOPIC guide that actually works",
    "I went from {lowrank} to {highrank} using TOPIC",
    "The TOPIC technique nobody talks about",
    "{number} hidden TOPIC tricks",
    "TOPIC is getting nerfed (use this now)",
    "How TOPIC changed my gameplay forever"
  ],
  business: [
    "How I made ${amount} with TOPIC",
    "The TOPIC mistake that cost me everything",
    "TOPIC passive income breakdown",
    "From zero to ${amount} with TOPIC",
    "I quit my job with TOPIC (full story)",
    "{number} TOPIC strategies that made me ${amount}",
    "Why TOPIC is the best side hustle in {year}",
    "TOPIC business model explained",
    "The TOPIC secret {percent}% of entrepreneurs miss",
    "I failed at TOPIC {number} times before this",
    "TOPIC changed my life in {days} days",
    "Why I chose TOPIC over everything else",
    "The truth about TOPIC nobody tells you",
    "TOPIC income report: ${amount} in {timeframe}",
    "{number} TOPIC lessons I learned the hard way"
  ],
  fitness: [
    "I lost {weight} pounds with TOPIC",
    "Why TOPIC is not working for you",
    "TOPIC transformation in {days} days",
    "The {minutes} minute TOPIC workout",
    "TOPIC results that shocked my doctor",
    "I tried TOPIC for {days} days (before & after)",
    "{number} TOPIC mistakes killing your progress",
    "The TOPIC routine that changed everything",
    "Why {percent}% of people fail at TOPIC",
    "TOPIC vs gym: which is better?",
    "My TOPIC journey from {start} to {end}",
    "The TOPIC secret trainers won't tell you",
    "{number} TOPIC tips for beginners",
    "TOPIC meal plan that actually works",
    "How TOPIC fixed my {problem}"
  ],
  tech: [
    "TOPIC in {minutes} minutes (complete guide)",
    "Why senior devs use TOPIC",
    "I built a startup using TOPIC",
    "TOPIC vs {alternative}: which is better?",
    "The TOPIC feature you're not using",
    "{number} TOPIC tips that changed my workflow",
    "TOPIC is replacing {technology}",
    "I learned TOPIC in {days} days (here's how)",
    "Why {percent}% of developers love TOPIC",
    "The future of TOPIC in {year}",
    "TOPIC mistakes every beginner makes",
    "How TOPIC made me ${amount}",
    "TOPIC tutorial for {level} developers",
    "The TOPIC stack everyone's using now",
    "{number} TOPIC projects to build"
  ],
  lifestyle: [
    "My TOPIC morning routine",
    "{number} TOPIC habits of successful people",
    "Why TOPIC is ruining your life",
    "I quit TOPIC for {days} days",
    "TOPIC changed my life in {timeframe}",
    "The TOPIC routine that fixed my {problem}",
    "{number} TOPIC tips for {outcome}",
    "Why I started TOPIC at {age}",
    "TOPIC transformation: {before} to {after}",
    "The TOPIC secret nobody talks about",
    "I tried TOPIC for {days} days (results)",
    "TOPIC vs {alternative}: honest review",
    "How TOPIC improved my {aspect}",
    "{number} TOPIC mistakes I made",
    "The truth about TOPIC influencers won't tell you"
  ],
  education: [
    "Learn TOPIC in {days} days",
    "TOPIC explained like you're 5",
    "The TOPIC course universities don't teach",
    "Master TOPIC: {number} tips",
    "TOPIC for beginners (complete guide)",
    "I learned TOPIC in {timeframe} (here's how)",
    "{number} TOPIC concepts explained simply",
    "Why {percent}% of students fail TOPIC",
    "The TOPIC method that actually works",
    "TOPIC crash course in {minutes} minutes",
    "How I went from zero to TOPIC expert",
    "{number} TOPIC resources you need",
    "The fastest way to learn TOPIC",
    "TOPIC mistakes that cost students {outcome}",
    "TOPIC vs {alternative}: which to learn first?"
  ]
};

const REPLACEMENTS = {
  rank: ["Diamond", "Master", "Challenger", "Grand Master", "Platinum", "Legend"],
  lowrank: ["Bronze", "Silver", "Gold", "Unranked"],
  highrank: ["Diamond", "Master", "Challenger", "Grand Master"],
  days: ["7", "14", "21", "30", "60", "90"],
  number: ["3", "5", "7", "10", "15"],
  amount: ["1,000", "5,000", "10,000", "50,000", "100,000"],
  percent: ["90", "85", "75", "95", "80"],
  timeframe: ["a week", "a month", "6 months", "a year"],
  minutes: ["5", "10", "15", "20", "30"],
  weight: ["10", "15", "20", "25", "30", "40", "50"],
  year: ["2024", "2025", "2026"],
  result: ["the results shocked me", "I couldn't believe it", "everything changed", "my life transformed"],
  problem: ["back pain", "sleep", "stress", "energy levels", "focus"],
  alternative: ["the competition", "traditional methods", "other options", "what I used before"],
  level: ["beginner", "intermediate", "advanced"],
  outcome: ["better results", "success", "happiness", "productivity"],
  age: ["25", "30", "35", "40"],
  before: ["chaos", "struggling", "stressed"],
  after: ["peace", "thriving", "balanced"],
  aspect: ["health", "productivity", "mindset", "relationships"],
  start: ["0", "nowhere", "rock bottom"],
  end: ["success", "my goals", "where I am now"]
};

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function fillTemplate(template, topic) {
  let result = template.replace(/TOPIC/g, topic);
  
  // Replace all placeholders in curly braces
  result = result.replace(/\{(\w+)\}/g, (match, key) => {
    if (REPLACEMENTS[key]) {
      return getRandomElement(REPLACEMENTS[key]);
    }
    return match;
  });
  
  return result;
}

let currentNiche = "gaming";
let history = [];

function scoreHook(hook) {
  let score = 50;
  if (/\d+/.test(hook)) score += 15;
  if (/dont|secret|truth/i.test(hook)) score += 10;
  if (/\$/.test(hook)) score += 10;
  if (/why|how/i.test(hook)) score += 8;
  return Math.min(100, score);
}

function generateVariations(hook) {
  const prefixes = ["SHOCKING:", "NEW:", "WARNING:"];
  const suffixes = ["(watch now)", "(going viral)", "(you wont believe this)"];
  return [
    hook,
    prefixes[Math.floor(Math.random() * prefixes.length)] + " " + hook,
    hook + " " + suffixes[Math.floor(Math.random() * suffixes.length)],
    hook.replace(/\d+/, "7"),
    hook.replace(/\d+/, "30")
  ];
}

function generate() {
  const topic = document.getElementById("topic-input").value.trim();
  if (!topic) { alert("Enter a topic"); return; }
  
  const templates = HOOK_TEMPLATES[currentNiche];
  
  // Randomly select 6 unique templates
  const shuffled = [...templates].sort(() => Math.random() - 0.5);
  const selectedTemplates = shuffled.slice(0, 6);
  
  // Fill each template with topic and random replacements
  const hooks = selectedTemplates.map(template => fillTemplate(template, topic));
  
  const container = document.getElementById("hooks-container");
  container.innerHTML = "";
  
  hooks.forEach((hook, i) => {
    const score = scoreHook(hook);
    const scoreColor = score >= 70 ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800";
    
    const card = document.createElement("div");
    card.className = "theme-card bg-white rounded-xl shadow-lg p-6 mb-4";
    card.innerHTML = `
      <div class="flex justify-between mb-3">
        <div class="flex items-center gap-2">
          <span class="font-bold text-purple-600">Hook ${i + 1}</span>
          <span class="px-2 py-1 rounded text-xs font-bold ${scoreColor}">${score}</span>
        </div>
        <button onclick="copy(this)" data-hook="${hook}" class="px-3 py-1 bg-blue-100 hover:bg-blue-200 rounded text-sm font-semibold">Copy</button>
      </div>
      <p class="theme-text text-gray-700 mb-3">${hook}</p>
      <button onclick="showVars(${i})" class="text-sm text-purple-600 font-semibold">+ Show Variations</button>
      <div id="vars-${i}" class="hidden mt-2"></div>
    `;
    container.appendChild(card);
  });
  
  applyTheme(currentTheme);
  
  history.unshift({ topic, niche: currentNiche, time: Date.now() });
  if (history.length > 20) history.pop();
  updateHistory();
}

function showVars(index) {
  const container = document.getElementById("vars-" + index);
  if (!container.classList.contains("hidden")) {
    container.classList.add("hidden");
    return;
  }
  
  const hook = document.querySelectorAll("#hooks-container p")[index].textContent;
  const variations = generateVariations(hook);
  
  container.innerHTML = variations.slice(1).map(v => 
    `<div class="bg-purple-50 p-2 rounded mb-1 flex justify-between text-sm">
      <span>${v}</span>
      <button onclick="copy(this)" data-hook="${v}" class="px-2 py-1 bg-purple-200 hover:bg-purple-300 rounded text-xs">Copy</button>
    </div>`
  ).join("");
  
  container.classList.remove("hidden");
}

function copy(btn) {
  const text = btn.getAttribute("data-hook");
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = "Copied!";
    btn.className = "px-3 py-1 bg-green-100 rounded text-sm font-semibold";
    setTimeout(() => {
      btn.textContent = "Copy";
      btn.className = "px-3 py-1 bg-blue-100 hover:bg-blue-200 rounded text-sm font-semibold";
    }, 2000);
  });
}

function updateHistory() {
  const container = document.getElementById("history-container");
  container.innerHTML = history.map(h => 
    `<div class="bg-gray-50 p-3 rounded cursor-pointer hover:bg-gray-100" onclick="loadHistory('${h.topic}', '${h.niche}')">
      <div class="font-semibold text-sm">${h.topic}</div>
      <div class="text-xs text-gray-500">${h.niche}</div>
    </div>`
  ).join("");
}

function loadHistory(topic, niche) {
  document.getElementById("topic-input").value = topic;
  currentNiche = niche;
  document.querySelectorAll(".niche-btn").forEach(b => b.classList.remove("ring-2", "ring-purple-600"));
  document.querySelector(`[data-niche="${niche}"]`).classList.add("ring-2", "ring-purple-600");
  generate();
}

function exportHooks() {
  const topic = document.getElementById("topic-input").value;
  const hooks = Array.from(document.querySelectorAll("#hooks-container p")).map((p, i) => `${i+1}. ${p.textContent}`);
  const text = `HOOKS FOR: ${topic}\n\n${hooks.join("\n\n")}`;
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `hooks-${topic.replace(/\s+/g, "-")}.txt`;
  a.click();
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(currentTheme);
  
  document.querySelectorAll(".theme-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      applyTheme(btn.dataset.theme);
      document.querySelectorAll(".theme-btn").forEach(b => b.classList.remove("ring-2"));
      btn.classList.add("ring-2", "ring-white");
    });
  });
  
  document.getElementById("generate-btn").addEventListener("click", generate);
  document.getElementById("export-btn").addEventListener("click", exportHooks);
  document.getElementById("topic-input").addEventListener("keypress", e => {
    if (e.key === "Enter") generate();
  });
  
  document.querySelectorAll(".niche-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentNiche = btn.dataset.niche;
      document.querySelectorAll(".niche-btn").forEach(b => b.classList.remove("ring-2", "ring-purple-600"));
      btn.classList.add("ring-2", "ring-purple-600");
    });
  });
  
  document.getElementById("clear-history").addEventListener("click", () => {
    if (confirm("Clear history?")) {
      history = [];
      updateHistory();
    }
  });
});
