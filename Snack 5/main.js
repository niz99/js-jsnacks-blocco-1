let lista = [];

for(i = 0; i < 6; i++){
    let numero = parseInt(prompt("Inserisci un numero: "));

    if(numero % 2 == 1){
        lista.push(numero);
    }
}

document.getElementById("container").innerHTML = `<h1>Gli elementi della lista sono: ${lista}</h1>`;