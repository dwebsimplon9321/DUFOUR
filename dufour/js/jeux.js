/**
 * generer nombre aleatoire entre 1 et 150
 * afficher limite aleatoire de 1 à n
 * recuperer nombre propose
 * verifier le nombre
 * - si le nombre est bon : 
 * afficher  message gagnant
 * 
 * -si le nombre pas bon :
 * verifier limite :
 * -si limite atteinte :
 * afficher bon nombre
 * afficher message perdu
 * 
 * -si limite non atteinte :
 * afficher indice  
 */


//generer un nombre aleatoire entre 1 et 150

function devineMoi(min, max){
    //generateur aleatoire javascript

    return Math.floor(Math.random() * max) + min;
}

let resultat = devineMoi(1, 150);


//generer un nombre aleatoire entre 1 et 15

function essai(min, max){
    //nombre d'essai
    return Math.floor(Math.random() * max) + min;
}
let nbrE = essai(1, 15);
let tour = 0;

//afficher nbrE dans le jeux

let spanE = document.querySelector(".essais");
spanE.innerHTML = nbrE ;

//ecouteur sur le bouton 'reponse'

let bt =document.querySelector("button");

bt.addEventListener("click", function(){
    let reponse = document.querySelector("input#reponse");

    //comparer reponse et resultat

    if(reponse.value == resultat){
        let win = document.querySelector(".reponse");
        win.innerHTML = "You WIN FATALITY !!¡¡"

    }else{
        console.log("nut ,le bon nombre est " + resultat)

        tour += 1;

        if(tour == nbrE){
            console.log("perdu")
        }else{
            console.log("essais encore")
        }
    }
});