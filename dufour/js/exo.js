//commentaire

//variable


//comment declarer une variable ?
let a = ''; // let a = 0
const b = ''; //const b = 0

//comment affecter une chaine de caracteres a une variable ?
let c ='bonsoir ça va ?';

//comment changer une valeur dans une variable ?
c ='bonsoir DWEB';

//comment verifier le contenue d'une variable ?
//alert(c);

//de quoi avons nous besoin pour faire une addition ?
let d = 5+7;
let e = 7; let f = 9;
let total = e + f;

//De quoi avons nous besoin pour faire une concatenation ?
let section ='DWEB';
let salutation = 'yo la mif';
//alert(salutation+section);

//exo
/**
 * Creer 4 variable 3 numerique et 1 avec la chaine de caracteres suivante
 * -"Le total est :"
 * -vous devez mettre en place une division,une multiplication, une soustraction et une addition
 * avec des chiffres different et afficher pour chaque operation une alerte avec le resultat
*/

const Total ='Le total est :';

let w = 75; let x = 19; let z = 34;

//multiplication

let t = w * x;
//alert(Total+t); 

//division

let p = z / x;
//alert(Total+p);

//soustraction

let s = w - z;
//alert(Total+s);

//addition

let m = w + x;
//alert(Total+m)


//coment changer le contenue d'un element html ?
//identifier l'element html h1

let bh1 = document.querySelector("h1");
bh1.innerHTML ="Bonsoir les DWEB";

//comment changer le contenue d'un element html et l'affecter dans un autre element ?
//identifier l'element h2

let bh2 = document.querySelectorAll("h2");

//identifier le 2éme element h2

bh2[1].innerHTML ="Section Sasageyo";

//affecter le contenu du 2éme h2 dans le h3

let bh3 =document.querySelector("h3");
let changeH2 = bh2[1].innerHTML = "cimer mon reuf";

bh3.innerHTML = changeH2;

let bh2s = document.querySelector("h2.ssh2");
bh2s.innerHTML = "Benjamin le flemmard";

console.log(bh2);

/**EXO
 * creer la variable paragraphe puis recuperer l'element html p et ajouter le contenue suivant :
 * 'la DWEB est en vacance à partir de jamais'
 */

let bp = document.querySelector("p");
bp.innerHTML = 'la DWEB est en vacance à partir de jamais';

//comment ajouter un element html en javascript 
//dans la div.info ajouter un element html
//cibler l'element parent

let divI = document.querySelector("div.info");

//creation de l'element

let phtml = document.createElement("p");
let ptext = document.createTextNode("La DWEB est flemmarde")

//ajouter le text dans la balise html p

phtml.appendChild(ptext);

//ajouter le paragraphe dans la div.info

divI.append(phtml);

//console.log(phtml);


//comment poser une question
//window.prompt("Poser une question");

//comment recuperer une reponse 

let reponse = document.querySelector("p.r");
//reponse.innerHTML = prompt("ça va l'équipe ?");

/**EXO
 * questionnaire
 * Poser les question correspondant aux textes des paragraphes present dans la division div.form
 * afficher chaque paragraphe, les reponse
 */


let q1 = document.querySelector("p.q1");
let q2 = document.querySelector("p.q2");
let q3 = document.querySelector("p.q3");
let q4 = document.querySelector("p.q4");
let q5 = document.querySelector("p.q5");
let q6 = document.querySelector("p.q6");
let q7 = document.querySelector("p.q7");
let q8 = document.querySelector("p.q8");
/** 
q1.append("" + prompt("Nom :")) ;
q2.append("" + prompt("Prénom :")) ;
q3.append("" + prompt("Sexe :")) ;
q4.append("" + prompt("Date de naissance :")) ;
q5.append("" + prompt("Lieux de naissance :")) ;
q6.append("" + prompt("Addresse :")) ;
q7.append("" + prompt("Code postal :")) ;
q8.append("" + prompt("Ville :")) ;
*/

//comment verifier si une variable est vide ou non ?

let myName ="";
if(myName !=""){
    //alert("c'est pas vide mon reuf")
} else if(myName ==""){
    //alert("c'est vide")
}

//coment stoker 6 mois de l'annee dans une variable ?

//let semestre = "janvier, fevier, mars, avril, mai ,juin";
let annee = ["janvier", "fevier", "mars", "avril", "mai" ,"juin","juillet","aout","septembre","octobre","novembre","decembre"]


//compter le nombre d'element d'un tableau

let nbrAnnee = annee.length;

//boucle for 
//let i = 0; //on commence a compter a partir de 0

//si i est plus petit que nbrAnnee alors ajoute a i +1
for(let i =0; i < nbrAnnee; i++){
    //console.log(i)

    //afficher le mois de mars manuellement
    //console.log(annee[2]);

    //pour afficher 1 fois le mois de mars
    if(annee[i] == "mars"){
        console.log(annee[i]);
    }
}

//autre boucle 

annee.forEach(mois => {
    //console.log(mois);

    if(mois == "aout"){
        let message = "Benjamin est née au mois :"+mois;
        //alert(message)
    }
});

//comment mettre en place automatiquement ...
//afficher un nom dans un element html vide

function afficheNom() {
    let dA = document.querySelector(".afficher");
    //dA.children[0].innerHTML = "Michel";
    dA.children[0].innerHTML = prompt("C'est quoi ton blase bg ?");

    return dA;
}

//executer function afficheNom 
//afficheNom();

// comment creer une horloge numerique 
//comment rendre l'horloge dynamique

function afficheHeure() {
    let divA = document.querySelector("div.afficher");
    
    divA.children[0].innerHTML = "Afficher heure";

    let objDate = new Date();

    divA.children[0].innerHTML = objDate.getHours() +":"+ objDate.getMinutes() +":"+ objDate.getSeconds();


    return divA;
}

afficheHeure();