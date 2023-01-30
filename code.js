// Vous allez créer un jeu qui permettra de deviner un nombre aléatoire.

// Vous devez d’abord penser à la logique de votre code, le segmenter en micro-tâches, ainsi que les éléments à utiliser (function, condition, …)
// Comment faire ?

// 1 déterminer un nombre aléatoire au début de la partie
// 2 bouton input pour entrer un nombre
// 3 bouton valider 
// 4 si le nombre entré est égal au nombre aléatoire = gagné sinon = perdu

// Quelles fonctionnalités sont nécessaires ?
// Qu’est-ce que je sais faire ?
// Qu’est-ce que je ne sais pas faire ?

// puis : 
// limiter le nombre de tentatives
// indiquer si le nombre proposé est trop haut ou trop bas
// afficher un gros “c’est gagné” ou “c’est perdu”
// faire un décompte
// mettre un niveau (facile, moyen, difficile)
// avoir une zone qui historise les différentes propositions effectuées
// …

const submitGuess = document.getElementById('submitGuess');
const randomNumber = Math.floor(Math.random() * 100) + 1; 
console.log('Random Number',randomNumber);
let nbEssai = 0;


function guessNumber(){
    nbEssai++;
    const number = document.getElementById('findNumber').value;
    const tentative = document.getElementById('nbTentative');
    if (number == randomNumber){
        errorNumber.innerHTML="Bien joué !!";
        tentative.style.display = "none";
    }else if (number > randomNumber){
        errorNumber.innerHTML=" Vous visez un peu trop haut";
    }else if (number< randomNumber){
        errorNumber.innerHTML=" Vous visez un peu trop bas";
    }
    if (nbEssai == 1) {
        nbTentative.innerHTML= "Il reste 9 tentatives";
    }else if (nbEssai == 2) {
        nbTentative.innerHTML= "Il reste 8 tentatives";
    }else if (nbEssai == 3) {
        nbTentative.innerHTML= "Il reste 7 tentatives";
    }else if (nbEssai == 4) {
        nbTentative.innerHTML= "Il reste 6 tentatives";
    }else if (nbEssai == 5) {
        nbTentative.innerHTML= "Il reste 5 tentatives";
    }else if (nbEssai == 6) {
        nbTentative.innerHTML= "Il reste 4 tentatives";
    }else if (nbEssai == 7) {
        nbTentative.innerHTML= "Il reste 3 tentatives";
    }else if (nbEssai == 8) {
        nbTentative.innerHTML= "Il reste 2 tentatives";
    }else if (nbEssai == 9) {
        nbTentative.innerHTML= "Il reste 1 tentative";
    }else if (nbEssai >= 10) {
        nbTentative.innerHTML=`Désolé, c'est fini. Le nombre correct était : ${randomNumber}`;
    }
}
submitGuess.addEventListener("click", guessNumber);
