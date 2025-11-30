const examSelect = document.getElementById("examSelect");
const sectionsContainer = document.getElementById("sectionsContainer");
const scorePercentEl = document.getElementById("scorePercent");
const scoreSummaryEl = document.getElementById("scoreSummary");
const modeSelect = document.getElementById("modeSelect");
const sectionSelect = document.getElementById("sectionSelect");
const prevSectionBtn = document.getElementById("prevSection");
const nextSectionBtn = document.getElementById("nextSection");
const progressContainer = document.getElementById("progressContainer");
const progressBar = document.getElementById("progressBar");
const exportButtons = document.getElementById("exportButtons");
const exportFullBtn = document.getElementById("exportFull");
const exportWrongBtn = document.getElementById("exportWrong");
const submitButton = document.getElementById("submitButton");
const themeToggle = document.getElementById("themeToggle");
const saveProgressBtn = document.getElementById("saveProgressBtn");

let currentExam = null;
let currentExamScript = null;
let currentSectionIndex = 0;
let answers = {}; // { questionId: "A" | "B" | ... }
let pendingRestore = null;

// ==================== THEME ====================
function applySavedTheme() {
  const saved = localStorage.getItem("theme") || "light";
  if (saved === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  updateThemeToggleLabel();
}

function updateThemeToggleLabel() {
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "🌞 Light Mode" : "🌙 Dark Mode";
}

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeToggleLabel();
});

// ==================== DOM READY ====================
window.addEventListener("DOMContentLoaded", () => {
  applySavedTheme();
  populateExamDropdown();
  attachHandlers();

  // Try restoring progress; if none, load first exam
  if (!loadProgress()) {
    if (window.examList && window.examList.length > 0) {
      loadExam(window.examList[0].id);
    }
  }
});

// ==================== EXAM LOADING ====================
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

  // Remove old script
  if (currentExamScript) {
    document.body.removeChild(currentExamScript);
    currentExamScript = null;
  }

  // Reset UI state
  currentExam = null;
  sectionsContainer.innerHTML = "";
  scorePercentEl.textContent = "–%";
  scoreSummaryEl.textContent = "";
  exportButtons.style.display = "none";

  // Answers remain; they might be restored

  const s = document.createElement("script");
  s.src = "js/" + info.file;
  s.onload = () => {
    currentExam = window.examData;
    // If we have pending restore for this exam, apply it
    if (pendingRestore && pendingRestore.examId === examId) {
      modeSelect.value = pendingRestore.mode || "full";
      currentSectionIndex = pendingRestore.sectionIndex || 0;
      answers = pendingRestore.answers || {};
      populateSectionDropdown(currentExam);
      showSection(currentSectionIndex);
      updateModeUI();
      pendingRestore = null;
    } else {
      // Default fresh exam
      answers = {};
      currentSectionIndex = 0;
      populateSectionDropdown(currentExam);
      showSection(0);
      updateModeUI();
    }
  };
  document.body.appendChild(s);
  currentExamScript = s;
}

function populateSectionDropdown(exam) {
  sectionSelect.innerHTML = "";
  exam.sections.forEach((sec, idx) => {
    const o = document.createElement("option");
    o.value = idx;
    o.textContent = sec.title; // no duplicated numbers
    sectionSelect.appendChild(o);
  });
}

// ==================== RENDERING ====================
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
        const checked =
          answers[q.id] && answers[q.id] === letter ? "checked" : "";
        return `
          <label>
            <input type="radio" name="${q.id}" value="${letter}" ${checked}>
            ${letter}) ${q.options[letter]}
          </label>
        `;
      })
      .join("<br>");

    qDiv.innerHTML = `
      <p>${q.text}</p>
      ${optionsHtml}
    `;

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

// ==================== NAVIGATION & MODE ====================
function updateProgressBar() {
  const mode = modeSelect.value;
  if (!currentExam) {
    progressContainer.style.display = "none";
    return;
  }

  if (mode === "single") {
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
  updateProgressBar();
}

function attachHandlers() {
  examSelect.addEventListener("change", () => {
    loadExam(examSelect.value);
    // When switching exams, we will save progress for new exam when answers are changed
  });

  modeSelect.addEventListener("change", () => {
    updateModeUI();
    saveProgress();
  });

  sectionSelect.addEventListener("change", e => {
    showSection(parseInt(e.target.value, 10));
  });

  prevSectionBtn.addEventListener("click", () => {
    if (!currentExam) return;
    if (currentSectionIndex > 0) showSection(currentSectionIndex - 1);
  });

  nextSectionBtn.addEventListener("click", () => {
    if (!currentExam) return;
    if (currentSectionIndex < currentExam.sections.length - 1) {
      showSection(currentSectionIndex + 1);
    }
  });

  submitButton.addEventListener("click", gradeCurrentScope);

  exportFullBtn.addEventListener("click", () => downloadResults(false));
  exportWrongBtn.addEventListener("click", () => downloadResults(true));

  saveProgressBtn.addEventListener("click", () => {
    saveProgress();
    const original = saveProgressBtn.textContent;
    saveProgressBtn.textContent = "Saved ✓";
    setTimeout(() => {
      saveProgressBtn.textContent = original;
    }, 1200);
  });
}

// ==================== GRADING ====================
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
      const chosen = answers[q.id];
      if (chosen && chosen === q.answer) correct++;
    });
  });

  if (total === 0) return;

  const pct = Math.round((correct / total) * 100);
  scorePercentEl.textContent = pct + "%";
  scoreSummaryEl.textContent = `${correct} / ${total} correct`;
  scorePercentEl.style.color = pct >= 90 ? "var(--success)" : "var(--danger)";

  // Highlight questions only in current visible section
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
      if (input.value === correctAns) {
        label.classList.add("opt-correct");
      }
      if (chosen && input.value === chosen && chosen !== correctAns) {
        label.classList.add("opt-incorrect-selected");
      }
    });

    if (!chosen) {
      qDiv.classList.add("unanswered");
    }
  });
}

// ==================== SAVE / LOAD PROGRESS ====================
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

// ==================== EXPORT RESULTS ====================
function buildExportScope(onlyIncorrect) {
  const mode = modeSelect.value;
  const sections =
    mode === "full"
      ? currentExam.sections
      : [currentExam.sections[currentSectionIndex]];

  return { mode, sections, onlyIncorrect };
}

function generateResultHTML(onlyIncorrect) {
  const scope = buildExportScope(onlyIncorrect);
  const mode = scope.mode;
  const sections = scope.sections;

  let title = currentExam.title;
  if (mode === "single") {
    title += " – " + sections[0].title;
  }

  const passColour = "#22c55e";
  const failColour = "#f97373";
  const neutral = "#64748b";

  let html = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${title} – Results</title>
<style>
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif;
  background: #0f172a;
  color: #e5e7eb;
  padding: 24px;
}
h1 {
  margin-top: 0;
}
.section {
  margin-bottom: 24px;
  padding: 16px;
  border-radius: 12px;
  background: #020617;
  border: 1px solid #1f2933;
}
.q {
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px dashed #1f2937;
}
.q:last-child {
  border-bottom: none;
}
.status {
  font-weight: 600;
}
.status.correct { color: ${passColour}; }
.status.incorrect { color: ${failColour}; }
.status.unanswered { color: ${neutral}; }
.small {
  font-size: 0.85rem;
  color: #9ca3af;
}
</style>
</head>
<body>
<h1>${title} – Results</h1>
<p class="small">Correct answers in green, incorrect in red.</p>
`;

  sections.forEach(section => {
    html += `<div class="section"><h2>${section.title}</h2>`;
    section.questions.forEach(q => {
      const chosen = answers[q.id] || null;
      const correct = q.answer;
      const isCorrect = chosen === correct;
      const isAnswered = !!chosen;

      if (onlyIncorrect && (isCorrect || !isAnswered)) return;

      let statusClass = "unanswered";
      let statusLabel = "Unanswered";
      if (isCorrect) {
        statusClass = "correct";
        statusLabel = "Correct";
      } else if (isAnswered) {
        statusClass = "incorrect";
        statusLabel = "Incorrect";
      }

      html += `<div class="q">
  <p><strong>Q:</strong> ${q.text}</p>
  <p><strong>Your answer:</strong> ${chosen || "(none)"}<br>
     <strong>Correct answer:</strong> ${correct}</p>
  <p class="status ${statusClass}">${statusLabel}</p>
</div>`;
    });
    html += `</div>`;
  });

  html += `</body></html>`;
  return html;
}

function downloadResults(onlyIncorrect) {
  if (!currentExam) return;
  const mode = modeSelect.value;
  const html = generateResultHTML(onlyIncorrect);
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  const base =
    mode === "full" ? "exam" : `section-${currentSectionIndex + 1}`;
  a.href = url;
  a.download = onlyIncorrect
    ? `${base}-incorrect.html`
    : `${base}-full.html`;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    URL.revokeObjectURL(url);
    a.remove();
  }, 0);
}
