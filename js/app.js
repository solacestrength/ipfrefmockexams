/*****************************************************
 * Global DOM references
 *****************************************************/
const examSelect = document.getElementById("examSelect");
const sectionsContainer = document.getElementById("sectionsContainer");
const scorePercentEl = document.getElementById("scorePercent");
const scoreSummaryEl = document.getElementById("scoreSummary");
const modeSelect = document.getElementById("modeSelect");
const sectionSelect = document.getElementById("sectionSelect");
const prevSectionBtn = document.getElementById("prevSection");
const nextSectionBtn = document.getElementById("nextSection");
const prevSectionBottom = document.getElementById("prevSectionBottom");
const nextSectionBottom = document.getElementById("nextSectionBottom");
const progressContainer = document.getElementById("progressContainer");
const progressBar = document.getElementById("progressBar");
const exportButtons = document.getElementById("exportButtons");
const exportFullBtn = document.getElementById("exportFull");
const exportWrongBtn = document.getElementById("exportWrong");
const submitButton = document.getElementById("submitButton");
const saveProgressBtn = document.getElementById("saveProgressBtn");
const resetSectionBtn = document.getElementById("resetSectionBtn");
const clearProgressBtn = document.getElementById("clearProgressBtn");
const themeToggle = document.getElementById("themeToggle");

/*****************************************************
 * State variables
 *****************************************************/
let currentExam = null;
let currentExamScript = null;
let currentSectionIndex = 0;
let answers = {}; // questionId → letter
let pendingRestore = null;

/*****************************************************
 * THEME SYSTEM
 *****************************************************/
function applySavedTheme() {
  const saved = localStorage.getItem("theme") || "light";
  if (saved === "dark") document.body.classList.add("dark");
  else document.body.classList.remove("dark");
  updateThemeToggleLabel();
}

function updateThemeToggleLabel() {
  themeToggle.textContent =
    document.body.classList.contains("dark")
      ? "🌞 Light Mode"
      : "🌙 Dark Mode";
}

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeToggleLabel();
});

/*****************************************************
 * DOM READY
 *****************************************************/
window.addEventListener("DOMContentLoaded", () => {
  applySavedTheme();
  populateExamDropdown();
  attachHandlers();

  // Try restore first
  if (!loadProgress()) {
    if (window.examList && window.examList.length > 0) {
      loadExam(window.examList[0].id);
    }
  }
});

/*****************************************************
 * EXAM LOADING
 *****************************************************/
function populateExamDropdown() {
  examSelect.innerHTML = "";
  window.examList.forEach(exam => {
    const opt = document.createElement("option");
    opt.value = exam.id;
    opt.textContent = exam.title;
    examSelect.appendChild(opt);
  });
}

function loadExam(examId) {
  const info = window.examList.find(e => e.id === examId);
  if (!info) return;

  // Remove previous exam script
  if (currentExamScript) {
    document.body.removeChild(currentExamScript);
    currentExamScript = null;
  }

  currentExam = null;
  sectionsContainer.innerHTML = "";
  scorePercentEl.textContent = "–%";
  scoreSummaryEl.textContent = "";
  exportButtons.style.display = "none";

  const s = document.createElement("script");
  s.src = "js/" + info.file;
  s.onload = () => {
    currentExam = window.examData;

    if (pendingRestore && pendingRestore.examId === examId) {
      modeSelect.value = pendingRestore.mode || "full";
      currentSectionIndex = pendingRestore.sectionIndex || 0;
      answers = pendingRestore.answers || {};
      pendingRestore = null;
    } else {
      modeSelect.value = "full";
      currentSectionIndex = 0;
      answers = {};
    }

    populateSectionDropdown(currentExam);
    showSection(currentSectionIndex);
    updateModeUI();
  };

  document.body.appendChild(s);
  currentExamScript = s;
}

function populateSectionDropdown(exam) {
  sectionSelect.innerHTML = "";
  exam.sections.forEach((sec, idx) => {
    const o = document.createElement("option");
    o.value = idx;
    o.textContent = sec.title; // no double numbers
    sectionSelect.appendChild(o);
  });
}

/*****************************************************
 * SECTION RENDERING
 *****************************************************/
function showSection(index) {
  if (!currentExam) return;
  currentSectionIndex = index;
  sectionSelect.value = String(index);

  sectionsContainer.innerHTML = "";
  const section = currentExam.sections[index];
  renderSection(section);
  updateProgressBar();
  saveProgress();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderSection(section) {
  const card = document.createElement("div");
  card.className = "section-card";

  const h = document.createElement("h3");
  h.textContent = section.title;
  card.appendChild(h);

  section.questions.forEach(q => {
    const qDiv = document.createElement("div");
    qDiv.className = "question";
    qDiv.dataset.answer = q.answer;
    qDiv.dataset.qid = q.id;

    const optionsHtml = Object.keys(q.options)
      .map(letter => {
        const checked = answers[q.id] === letter ? "checked" : "";
        return `
          <label>
            <input type="radio" name="${q.id}" value="${letter}" ${checked}>
            ${letter}) ${q.options[letter]}
          </label>`;
      })
      .join("<br>");

    qDiv.innerHTML = `<p>${q.text}</p>${optionsHtml}`;

    qDiv.querySelectorAll('input[type="radio"]').forEach(input => {
      input.addEventListener("change", () => {
        answers[q.id] = input.value;
        saveProgress();
      });
    });

    card.appendChild(qDiv);
  });

  sectionsContainer.appendChild(card);
}

/*****************************************************
 * NAVIGATION & MODE
 *****************************************************/
function updateProgressBar() {
  const mode = modeSelect.value;
  if (!currentExam || mode === "single") {
    progressContainer.style.display = "none";
    return;
  }
  progressContainer.style.display = "block";

  const pct =
    ((currentSectionIndex + 1) / currentExam.sections.length) * 100;
  progressBar.style.width = pct + "%";
}

function updateModeUI() {
  const mode = modeSelect.value;
  submitButton.textContent = mode === "full" ? "Mark Exam" : "Mark Section";
  const disabled = mode === "single";

  prevSectionBtn.disabled = disabled;
  nextSectionBtn.disabled = disabled;
  prevSectionBottom.disabled = disabled;
  nextSectionBottom.disabled = disabled;

  updateProgressBar();
}

function attachHandlers() {
  examSelect.addEventListener("change", () => {
    loadExam(examSelect.value);
  });

  modeSelect.addEventListener("change", () => {
    updateModeUI();
    saveProgress();
  });

  sectionSelect.addEventListener("change", e => {
    showSection(parseInt(e.target.value, 10));
  });

  // Top nav
  prevSectionBtn.addEventListener("click", () => {
    if (!currentExam) return;
    if (currentSectionIndex > 0)
      showSection(currentSectionIndex - 1);
  });

  nextSectionBtn.addEventListener("click", () => {
    if (!currentExam) return;
    if (currentSectionIndex < currentExam.sections.length - 1)
      showSection(currentSectionIndex + 1);
  });

  // Bottom nav
  prevSectionBottom.addEventListener("click", () => {
    if (!currentExam) return;
    if (currentSectionIndex > 0)
      showSection(currentSectionIndex - 1);
  });

  nextSectionBottom.addEventListener("click", () => {
    if (!currentExam) return;
    if (currentSectionIndex < currentExam.sections.length - 1)
      showSection(currentSectionIndex + 1);
  });

  submitButton.addEventListener("click", gradeCurrentScope);

  exportFullBtn.addEventListener("click", () => downloadResults(false));
  exportWrongBtn.addEventListener("click", () => downloadResults(true));

  saveProgressBtn.addEventListener("click", () => {
    saveProgress();
    flashButton(saveProgressBtn, "Saved ✓");
  });

  clearProgressBtn.addEventListener("click", () => {
    localStorage.removeItem("examProgress");
    answers = {};
    const current = examSelect.value;
    loadExam(current);
    flashButton(clearProgressBtn, "Cleared ✓");
  });

  resetSectionBtn.addEventListener("click", () => {
    resetCurrentSectionAnswers();
    flashButton(resetSectionBtn, "Section Reset ✓");
  });
}

/*****************************************************
 * SMALL UI HELPERS
 *****************************************************/
function flashButton(btn, label) {
  const original = btn.textContent;
  btn.textContent = label;
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = original;
    btn.disabled = false;
  }, 1100);
}

/*****************************************************
 * GRADING
 *****************************************************/
function gradeCurrentScope() {
  if (!currentExam) return;

  const mode = modeSelect.value;
  const sections =
    mode === "full"
      ? currentExam.sections
      : [currentExam.sections[currentSectionIndex]];

  let total = 0;
  let correct = 0;

  sections.forEach(sec => {
    sec.questions.forEach(q => {
      total++;
      if (answers[q.id] === q.answer) correct++;
    });
  });

  if (total === 0) return;

  const pct = Math.round((correct / total) * 100);
  scorePercentEl.textContent = pct + "%";
  scoreSummaryEl.textContent = `${correct} / ${total} correct`;
  scorePercentEl.style.color =
    pct >= 90 ? "var(--success)" : "var(--danger)";

  markCurrentSection();
  exportButtons.style.display = "flex";
}

function markCurrentSection() {
  const questions = sectionsContainer.querySelectorAll(".question");

  questions.forEach(qDiv => {
    qDiv.classList.remove("unanswered");

    const qid = qDiv.dataset.qid;
    const correctAns = qDiv.dataset.answer;
    const chosen = answers[qid];

    const labels = qDiv.querySelectorAll("label");
    labels.forEach(label => {
      label.classList.remove("opt-correct", "opt-incorrect-selected");
      const input = label.querySelector("input");
      if (!input) return;

      if (input.value === correctAns)
        label.classList.add("opt-correct");

      if (chosen && input.value === chosen && chosen !== correctAns)
        label.classList.add("opt-incorrect-selected");
    });

    if (!chosen) qDiv.classList.add("unanswered");
  });
}

/*****************************************************
 * RESET HELPERS
 *****************************************************/
function resetCurrentSectionAnswers() {
  if (!currentExam) return;
  const section = currentExam.sections[currentSectionIndex];
  section.questions.forEach(q => {
    delete answers[q.id];
  });
  saveProgress();
  showSection(currentSectionIndex);
}

/*****************************************************
 * SAVE / LOAD PROGRESS
 *****************************************************/
function saveProgress() {
  if (!currentExam) return;

  const data = {
    examId: examSelect.value,
    mode: modeSelect.value,
    sectionIndex: currentSectionIndex,
    answers: answers
  };

  localStorage.setItem("examProgress", JSON.stringify(data));
}

function loadProgress() {
  const raw = localStorage.getItem("examProgress");
  if (!raw) return false;

  try {
    const data = JSON.parse(raw);
    if (!data.examId) return false;

    pendingRestore = {
      examId: data.examId,
      mode: data.mode || "full",
      sectionIndex:
        typeof data.sectionIndex === "number" ? data.sectionIndex : 0,
      answers: data.answers || {}
    };

    examSelect.value = pendingRestore.examId;
    modeSelect.value = pendingRestore.mode;

    loadExam(pendingRestore.examId);
    return true;
  } catch (e) {
    console.error("Failed to load progress:", e);
    return false;
  }
}

/*****************************************************
 * EXPORT RESULTS (FULL TEXT ANSWERS)
 *****************************************************/
function buildExportScope(onlyIncorrect) {
  const mode = modeSelect.value;
  return {
    mode,
    sections:
      mode === "full"
        ? currentExam.sections
        : [currentExam.sections[currentSectionIndex]],
    onlyIncorrect
  };
}

function generateResultHTML(onlyIncorrect) {
  const { mode, sections } = buildExportScope(onlyIncorrect);

  let title = currentExam.title;
  if (mode === "single") {
    title += " – " + sections[0].title;
  }

  const green = "#22c55e";
  const red = "#f97373";
  const gray = "#64748b";

  let html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${title} – Results</title>
<style>
  body {
    font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
    background: #0f172a;
    color: #e5e7eb;
    padding: 24px;
  }
  h1 { margin-top: 0; }
  .section {
    margin-bottom: 24px;
    padding: 16px;
    border-radius: 12px;
    background: #020617;
    border: 1px solid #1f2937;
  }
  .q {
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px dashed #334155;
  }
  .q:last-child { border-bottom: none; }
  .status { font-weight: 700; }
  .correct { color: ${green}; }
  .incorrect { color: ${red}; }
  .unanswered { color: ${gray}; }
</style>
</head>
<body>
<h1>${title} – Results</h1>
<p style="color:#94a3b8">Correct answers are shown in green; incorrect in red.</p>
`;

  sections.forEach(section => {
    html += `<div class="section"><h2>${section.title}</h2>`;

    section.questions.forEach(q => {
      const chosen = answers[q.id] || null;
      const correct = q.answer;
      const chosenText = chosen ? `${chosen}) ${q.options[chosen]}` : "(none)";
      const correctText = `${correct}) ${q.options[correct]}`;
      const isCorrect = chosen === correct;
      const isAnswered = !!chosen;

      if (onlyIncorrect && (isCorrect || !isAnswered)) return;

      if (isCorrect) {
        html += `
<div class="q">
  <p><strong>Q:</strong> ${q.text}</p>
  <p><strong>Your Answer:</strong> ${chosenText}</p>
  <p class="status correct">Correct ✓</p>
</div>
`;
      } else {
        html += `
<div class="q">
  <p><strong>Q:</strong> ${q.text}</p>
  <p><strong>Your Answer:</strong> ${chosenText}</p>
  <p><strong>Correct Answer:</strong> ${correctText}</p>
  <p class="status incorrect">Incorrect ✘</p>
</div>
`;
      }
    });

    html += `</div>`;
  });

  html += `</body></html>`;
  return html;
}

function downloadResults(onlyIncorrect) {
  if (!currentExam) return;

  const html = generateResultHTML(onlyIncorrect);
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  const base =
    modeSelect.value === "full"
      ? "exam"
      : `section-${currentSectionIndex + 1}`;

  const a = document.createElement("a");
  a.href = url;
  a.download = onlyIncorrect
    ? `${base}-incorrect.html`
    : `${base}-full.html`;
  document.body.appendChild(a);
  a.click();
  a.remove();

  setTimeout(() => URL.revokeObjectURL(url), 0);
}

/*****************************************************
 * CUSTOM SPLASH SCREEN (2.5s + fade-out)
 *****************************************************/
window.addEventListener("load", () => {
  setTimeout(() => {
    const splash = document.getElementById("customSplash");
    if (splash) {
      splash.classList.add("fade-out");
      setTimeout(() => splash.remove(), 900);
    }
  }, 1500);
});
