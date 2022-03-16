const nomiInvitati = ["Nizar", "Martina", "Valeria", "Giorgia", "Cristian"];

let nome = prompt("Inserisci il tuo nome: ");

for(i = 0; i < nomiInvitati.length; i++){
    if(nome === nomiInvitati[i]){
        document.getElementById("container").innerHTML = `<h1>Sei presente nella lista, puoi entrare!</h1>`;
    } else {
        document.getElementById("container").innerHTML = `<h1>Non sei presente nella lista, non puoi entrare!</h1>`;
    }
}





//  || nome = nomiInvitati[i]