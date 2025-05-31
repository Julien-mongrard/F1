let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

function saveAccounts() {
  localStorage.setItem("accounts", JSON.stringify(accounts));
}

function toggleForm() {
  const card = document.getElementById("card");
  card.classList.toggle("flipped");
}

function createAccount() {
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();
  const confirmPassword = document.getElementById("signupConfirmPassword").value.trim();

  if (email && password && confirmPassword) {
    if (password === confirmPassword) {
      accounts.push({ email, password });
      saveAccounts();
      updateAccountTable();
      document.getElementById("signupEmail").value = "";
      document.getElementById("signupPassword").value = "";
      document.getElementById("signupConfirmPassword").value = "";
      toggleForm();
    } else {
      alert("Les mots de passe ne correspondent pas.");
    }
  } else {
    alert("Merci de remplir les champs email et mot de passe.");
  }
}

function login() {
  const email = document.getElementById("signinEmail").value.trim();
  const password = document.getElementById("signinPassword").value.trim();

  const found = accounts.find(acc => acc.email === email && acc.password === password);

  if (found) {
    alert("Connecté !");
  } else {
    alert("Ce compte n'existe pas.");
  }
}

function deleteAccount(emailToDelete) {
  if (confirm("Êtes-vous sûr de vouloir supprimer ce compte ?")) {
    accounts = accounts.filter(acc => acc.email !== emailToDelete);
    saveAccounts();
    updateAccountTable();
  }
}

function editAccount(emailToEdit) {
  const index = accounts.findIndex(acc => acc.email === emailToEdit);
  if (index === -1) return;

  const tbody = document.querySelector("#accountTable tbody");
  const row = tbody.children[index];

  const current = accounts[index];
  row.innerHTML = `
    <td><input type="text" value="${current.email}" id="editEmail"></td>
    <td><input type="text" value="${current.password}" id="editPassword"></td>
    <td>
      <button onclick="saveEdit('${emailToEdit}')">Sauvegarder</button>
      <button onclick="updateAccountTable()">Annuler</button>
    </td>
  `;
}

function saveEdit(originalEmail) {
  const newEmail = document.getElementById("editEmail").value.trim();
  const newPassword = document.getElementById("editPassword").value.trim();

  if (!newEmail || !newPassword) {
    alert("Les champs ne peuvent pas être vides.");
    return;
  }

  const index = accounts.findIndex(acc => acc.email === originalEmail);
  if (index !== -1) {
    accounts[index] = { email: newEmail, password: newPassword };
    saveAccounts();
    updateAccountTable();
  }
}

function addAccountToTable(account) {
  const tbody = document.querySelector("#accountTable tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${account.email}</td>
    <td>${account.password}</td>
    <td>
      <button onclick="editAccount('${account.email}')">Modifier</button>
      <button onclick="deleteAccount('${account.email}')">Supprimer</button>
    </td>
  `;

  tbody.appendChild(row);
}

function updateAccountTable() {
  const tbody = document.querySelector("#accountTable tbody");
  tbody.innerHTML = "";
  accounts.forEach(addAccountToTable);
}

window.onload = () => {
  updateAccountTable();
};
