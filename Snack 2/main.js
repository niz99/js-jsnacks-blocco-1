let parolaUno = prompt("Inserisci la prima parola: ");
let parolaDue = prompt("Inserisci la seconda parola: ");

if (parolaUno.length < parolaDue.length) {
    document.getElementById("container").innerHTML = `<h1>La prima parola è la più corta: <br> ${parolaUno} <br> ${parolaDue}</h1>`;
} else if (parolaDue.length < parolaUno.length) {
    document.getElementById("container").innerHTML = `<h1>La seconda parola è la più corta: <br> ${parolaDue} <br> ${parolaUno}</h1>`;
} else {
    document.getElementById("container").innerHTML = `<h1>Le due parole hanno la stessa lunghezza</h1>`;
}
