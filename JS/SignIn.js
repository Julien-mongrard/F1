const accounts = [];

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

      const tbody = document.querySelector("#accountTable tbody");
      const row = document.createElement("tr");
      row.innerHTML = `<td>${email}</td><td>${password}</td>`;
      tbody.appendChild(row);

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
    alert("✅ Connecté !");
  } else {
    alert("❌ Ce compte n'existe pas.");
  }
}
