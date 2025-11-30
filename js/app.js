const examSelect = document.getElementById("examSelect");
const sectionsContainer = document.getElementById("sectionsContainer");
const scorePercentEl = document.getElementById("scorePercent");
const scoreSummaryEl = document.getElementById("scoreSummary");

let currentExam = null;

// Populate dropdown from examList
window.examList.forEach(exam => {
  const opt = document.createElement("option");
  opt.value = exam.id;
  opt.textContent = exam.title;
  examSelect.appendChild(opt);
});

// Dynamic loader
function loadExam(examId) {
  const examInfo = window.examList.find(e => e.id === examId);
  if (!examInfo) return;

  // Remove previous exam script
  if (window.currentExamScript) {
    document.body.removeChild(window.currentExamScript);
  }

  // Reset state
  sectionsContainer.innerHTML = "";
  scorePercentEl.textContent = "–%";
  scoreSummaryEl.textContent = "";

  // Create <script> tag to load exam file
  const script = document.createElement("script");
  script.src = "js/" + examInfo.file;
  script.onload = () => {
    currentExam = window.examData;
    renderExam(currentExam);
  };
  document.body.appendChild(script);
  window.currentExamScript = script;
}

function renderExam(exam) {
  sectionsContainer.innerHTML = "";

  exam.sections.forEach(section => {
    const card = document.createElement("div");
    card.className = "section-card";

    const h = document.createElement("h3");
    h.textContent = section.title;
    card.appendChild(h);

    section.questions.forEach((q, idx) => {
      const qDiv = document.createElement("div");
      qDiv.className = "question";
      qDiv.dataset.answer = q.answer;

      qDiv.innerHTML = `
        <p>${q.text}</p>
        ${Object.keys(q.options).map(letter => `
          <label>
            <input type="radio" name="${q.id}" value="${letter}">
            ${letter}) ${q.options[letter]}
          </label>
        `).join("<br>")}
      `;
      card.appendChild(qDiv);
    });

    sectionsContainer.appendChild(card);
  });
}

document.getElementById("submitButton").addEventListener("click", () => {
  let total = 0;
  let correct = 0;

  sectionsContainer.querySelectorAll(".question").forEach(q => {
    total++;
    const correctAns = q.dataset.answer;
    const chosen = q.querySelector("input:checked");
    if (chosen && chosen.value === correctAns) correct++;
  });

  if (total > 0) {
    const pct = Math.round((correct / total) * 100);
    scorePercentEl.textContent = pct + "%";
    scoreSummaryEl.textContent = `${correct} / ${total} correct`;

    scorePercentEl.style.color = pct >= 90 ? "#22c55e" : "#f87171";
  }
});

// Load first exam on page load
loadExam("exam1");
examSelect.addEventListener("change", () => loadExam(examSelect.value));
