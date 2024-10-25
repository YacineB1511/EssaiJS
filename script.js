let compteur=0;

function Init() {
    document.getElementById("compteur").innerText=compteur;
}

function incrementer() {
    compteur++;
    document.getElementById("compteur").innerText=compteur;
}