let somma = 0;

for(i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Inserisci un numero: "));
    somma = somma + numero;
}

document.getElementById("container").innerHTML = `La somma dei numeri inseriti è: ${somma}`;