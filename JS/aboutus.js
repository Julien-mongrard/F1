const soumissions = [];

function envoyerFormulaire(event) {
event.preventDefault();

const data = {
    choix: document.getElementById("choix").value,
    nom: document.getElementById("nom").value,
    prenom: document.getElementById("prenom").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
};

soumissions.push(data);

afficherSoumissions();

document.getElementById("contactForm").reset();
}

function afficherSoumissions() {
const tbody = document.querySelector("#submissionsTable tbody");
tbody.innerHTML = ""; 

soumissions.forEach((s) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${s.choix}</td>
    <td>${s.nom}</td>
    <td>${s.prenom}</td>
    <td>${s.email}</td>
    <td>${s.message}</td>
    `;
    tbody.appendChild(row);
});
}
