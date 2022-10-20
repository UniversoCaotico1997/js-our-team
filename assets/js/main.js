// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1: Trasformare la stringa foto in una immagine effettiva
// BONUS 2: Organizzare i singoli membri in card/schede
// Consigli del giorno: Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!


//Stampare le stesse informazioni su DOM sottoforma di stringhe
    // mi seleziono l'elemento della dom 
        // Attravero il querySelctor
const colElement = document.querySelector(`.col`);
// console.log(rowElement);


// creazione di un Array di oggeti 
// creare un array 
//inserire al suo interno degli oggetti

const members = [
    {
        nome:`Wayne Barnett`,
        ruolo:`Founder & CEO`,
        foto:`wayne-barnett-founder-ceo.jpg`
    },
    {
        nome:`Angela Carol`,
        ruolo:`Chief Editor`,
        foto:`angela-caroll-chief-editor.jpg`
    },
    {
        nome:`Waleter gordon`,
        ruolo:`Chief Editor`,
        foto:`walter-gordon-office-manager.jpg`
    },
    {
        nome:`Angela Lopez`,
        ruolo:`Social Media Manager`,
        foto:`angela-lopez-social-media-manager.jpg`
    },
    {
        nome:`Scott Estrada`,
        ruolo:`Developer`,
        foto:`wayne-barnett-founder-ceo.jpg`
    },
    {
        nome:`Barbara Ramos`,
        ruolo:`Grafic designer`,
        foto:`barbara-ramos-graphic-designer.jpg`
    },
    
]
// console.log(members);

// stampiano a schermo la nostra arry contenente gli oggetti
// ciclo for 

for (let i = 0; i < members.length; i++) {
    const member = members[i];
    // console.log(member);
    // console.log(member.nome);
    // console.log(member.ruolo);
    // console.log(member.foto);

    // creo l'elemento da importare nella dom 
    const cardElement = `<div class"col">${member.nome + member.ruolo}</div>`;
    // console.log(cardElement);
     // trasferisco l'elemento creato con insert
    colElement.insertAdjacentHTML(`beforeend`,cardElement);
}

