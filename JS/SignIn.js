let accounts = JSON.parse(localStorage.getItem("accounts"));
if (!accounts) {
  accounts = [];
}

let loggedInEmail = null;
let currentQuestionIndex = 0;
let score = 0;


const quizQuestions = [
  {
    question: "Who won the Formula 1 World Championship in 2021?",
    answers: [
      { text: "Max Verstappen", correct: true },
      { text: "Lewis Hamilton", correct: false },
      { text: "Sebastian Vettel", correct: false },
      { text: "Charles Leclerc", correct: false }
    ]
  },
  {
    question: "How many laps does a standard Formula 1 race have?",
    answers: [
      { text: "50", correct: false },
      { text: "58", correct: false },
      { text: "Race lasts maximum 2 hours", correct: true },
      { text: "70", correct: false }
    ]
  },
  {
    question: "Which team uses the iconic red car?",
    answers: [
      { text: "Mercedes", correct: false },
      { text: "Red Bull Racing", correct: false },
      { text: "Ferrari", correct: true },
      { text: "McLaren", correct: false }
    ]
  },
  {
    question: "What is the name of the famous street circuit in Monaco?",
    answers: [
      { text: "Monaco Grand Prix", correct: false },
      { text: "Circuit de Monaco", correct: true },
      { text: "Silverstone", correct: false },
      { text: "Suzuka Circuit", correct: false }
    ]
  },
  {
    question: "Who holds the record for the most F1 World Championships?",
    answers: [
      { text: "Michael Schumacher", correct: true },
      { text: "Lewis Hamilton", correct: false },
      { text: "Sebastian Vettel", correct: false },
      { text: "Ayrton Senna", correct: false }
    ]
  },
  {
    question: "Which engine supplier powered the Red Bull Racing team during their 2021 championship win?",
    answers: [
      { text: "Mercedes", correct: false },
      { text: "Honda", correct: true },
      { text: "Ferrari", correct: false },
      { text: "Renault", correct: false }
    ]
  },
  {
    question: "Which country hosts the Grand Prix at Silverstone?",
    answers: [
      { text: "United Kingdom", correct: true },
      { text: "Germany", correct: false },
      { text: "Italy", correct: false },
      { text: "Spain", correct: false }
    ]
  },
  {
    question: "What color flag indicates the end of the race?",
    answers: [
      { text: "Yellow", correct: false },
      { text: "Checkered (black and white)", correct: true },
      { text: "Red", correct: false },
      { text: "Green", correct: false }
    ]
  }
];

function saveAccounts() {
  localStorage.setItem("accounts", JSON.stringify(accounts));
}

function toggleForm() {
  let card = document.getElementById("card");
  card.classList.toggle("flipped");
}

function createAccount() {
  let email = document.getElementById("signupEmail").value.trim();
  let password = document.getElementById("signupPassword").value.trim();
  let confirmPassword = document.getElementById("signupConfirmPassword").value.trim();

  if (email === "" || password === "" || confirmPassword === "") {
    alert("Please fill in the email and password fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  let newAccount = {
    email: email,
    password: password
  };

  accounts.push(newAccount);
  saveAccounts();
  updateAccountTable();

  document.getElementById("signupEmail").value = "";
  document.getElementById("signupPassword").value = "";
  document.getElementById("signupConfirmPassword").value = "";

  toggleForm();
}

function login() {
  let email = document.getElementById("signinEmail").value.trim();
  let password = document.getElementById("signinPassword").value.trim();

  let found = null;
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].email === email && accounts[i].password === password) {
      found = accounts[i];
      break;
    }
  }

  if (found) {
    alert("Connected!");
    loggedInEmail = email;
    showQuiz();
  } else {
    alert("This account does not exist.");
  }
}

function deleteAccount(emailToDelete) {
  if (confirm("Are you sure you want to delete this account?")) {
    let newAccounts = [];
    for (let i = 0; i < accounts.length; i++) {
      if (accounts[i].email !== emailToDelete) {
        newAccounts.push(accounts[i]);
      }
    }
    accounts = newAccounts;
    saveAccounts();
    updateAccountTable();
  }
}

function editAccount(emailToEdit) {
  let index = accounts.findIndex(function (acc) {
    return acc.email === emailToEdit;
  });

  if (index === -1) return;

  let tbody = document.querySelector("#accountTable tbody");
  let row = tbody.children[index];
  let current = accounts[index];

  row.innerHTML = `
    <td><input type="text" value="${current.email}" id="editEmail"></td>
    <td><input type="text" value="${current.password}" id="editPassword"></td>
    <td>
      <button onclick="saveEdit('${emailToEdit}')">Save</button>
      <button onclick="updateAccountTable()">Cancel</button>
    </td>
  `;
}

function saveEdit(originalEmail) {
  let newEmail = document.getElementById("editEmail").value.trim();
  let newPassword = document.getElementById("editPassword").value.trim();

  if (newEmail === "" || newPassword === "") {
    alert("Fields cannot be empty.");
    return;
  }

  let index = accounts.findIndex(function (acc) {
    return acc.email === originalEmail;
  });

  if (index !== -1) {
    accounts[index] = { email: newEmail, password: newPassword };
    saveAccounts();
    updateAccountTable();
  }
}

function addAccountToTable(account) {
  let tbody = document.querySelector("#accountTable tbody");
  let row = document.createElement("tr");

  row.innerHTML = `
    <td>${account.email}</td>
    <td>${account.password}</td>
    <td>
      <button onclick="editAccount('${account.email}')">Modify</button>
      <button onclick="deleteAccount('${account.email}')">Delete</button>
    </td>
  `;

  tbody.appendChild(row);
}

function updateAccountTable() {
  let tbody = document.querySelector("#accountTable tbody");
  tbody.innerHTML = "";
  for (let i = 0; i < accounts.length; i++) {
    addAccountToTable(accounts[i]);
  }
}

function showQuiz() {
  document.getElementById("quizSection").style.display = "block";
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("result").style.display = "none";
  document.getElementById("quizContainer").style.display = "block";
  showQuestion();
}

function showQuestion() {
  let questionData = quizQuestions[currentQuestionIndex];
  let questionElement = document.getElementById("question");
  let answersElement = document.getElementById("answers");

  questionElement.textContent = questionData.question;
  answersElement.innerHTML = "";

  for (let i = 0; i < questionData.answers.length; i++) {
    let answer = questionData.answers[i];
    let btn = document.createElement("button");
    btn.textContent = answer.text;

    btn.onclick = function () {
      selectAnswer(answer.correct, btn);
    };

    answersElement.appendChild(btn);
  }

  document.getElementById("nextBtn").style.display = "none";
}

function selectAnswer(isCorrect, btn) {
  if (isCorrect) {
    score++;
    btn.style.backgroundColor = "green";
  } else {
    btn.style.backgroundColor = "red";
  }

  let allButtons = document.getElementById("answers").children;
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].disabled = true;
    let isCorrectAnswer = quizQuestions[currentQuestionIndex].answers[i].correct;
    if (isCorrectAnswer) {
      allButtons[i].style.backgroundColor = "green";
    }
  }

  document.getElementById("nextBtn").style.display = "inline-block";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quizContainer").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("score").textContent = score;
  document.getElementById("total").textContent = quizQuestions.length;

  if (loggedInEmail !== null) {
    let scores = JSON.parse(localStorage.getItem("scores")) || {};
    scores[loggedInEmail] = score;
    localStorage.setItem("scores", JSON.stringify(scores));
  }

  updateScoresTable();
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("result").style.display = "none";
  document.getElementById("quizContainer").style.display = "block";
  showQuestion();
}

function updateScoresTable() {
  let scores = JSON.parse(localStorage.getItem("scores")) || {};
  let tbody = document.querySelector("#scoresTable tbody");
  tbody.innerHTML = "";

  let entries = Object.entries(scores);
  if (entries.length === 0) {
    let row = document.createElement("tr");
    row.innerHTML = `<td colspan="2" style="text-align:center;">No scores yet.</td>`;
    tbody.appendChild(row);
    return;
  }

  for (let i = 0; i < entries.length; i++) {
    let email = entries[i][0];
    let score = entries[i][1];
    let row = document.createElement("tr");
    row.innerHTML = `<td>${email}</td><td>${score}</td>`;
    tbody.appendChild(row);
  }
}

window.onload = function () {
  updateAccountTable();
  updateScoresTable();
};
