let numeroUno = parseInt(prompt("Inserisci il primo numero: "));
let numeroDue = parseInt(prompt("Inserisci il secondo numero: "));

if (numeroUno > numeroDue) {
    document.getElementById("container").innerHTML = `<h1>Il primo numero è quello più grande: ${numeroUno}</h1>`;
} else if (numeroUno < numeroDue) {
    document.getElementById("container").innerHTML = `<h1>Il secondo numero è quello più grande: ${numeroDue}</h1>`;
} else {
    document.getElementById("container").innerHTML = `<h1>I due numeri sono uguali</h1>`;
}