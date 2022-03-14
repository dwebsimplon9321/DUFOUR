/**
 * mise en place api pokemon 
 */

//balise html

const listePU = document.querySelector(".liste-poke");

//nbr dynamique de poke 

const nbrPoke = 201;

//Tableau de datas 

let allPokemon = [];
let tableauFin = [];
let cpTab = [];

/* appel API pokemon */

function findPoke(){

    //url api pokemon 
    
    fetch("https://pokeapi.co/api/v2/pokemon?limit=" + nbrPoke)
        .then( reponse => reponse.json())
        .then((allPoke => {
            //console.log(allPoke);

            allPoke.results.forEach(pokemon => {

                //function pour affichage info complete
                fullInfoPoke(pokemon)
            });
        }))
}

//executer la fonction

findPoke();

//info sur 1 pokemon
function fullInfoPoke(iPokemon){

    let objetPokeFull = {};  //format json vide

    let urlPoke = iPokemon.url;
    let namePoke = iPokemon.name;

    //console.log(urlPoke);


//recuperer les infos sur un pokemon

fetch(urlPoke)

    //reponse appel sur urlPoke
    .then(reponse => reponse.json())
    .then( (dataPoke => {

        //console.log(dataPoke);

        //recup info que je veux 
        /**
         * name
         * sprites
         * id
         */

        objetPokeFull.nom = dataPoke.name;
        objetPokeFull.id = dataPoke.id;
        objetPokeFull.imgF = dataPoke.sprites.front_default; //devant
        objetPokeFull.imgB = dataPoke.sprites.back_default; //arrier

        //console.log(objetPokeFull);

        //info sur la couleur du pokemon

        /**
         * url : https://pokeapi.co/api/v2/pokemon-species
         * id
         */

        fetch("https://pokeapi.co/api/v2/pokemon-species/" + dataPoke.id)
            .then(reponse => reponse.json())
            .then(( dataPoke => {

                //recup color
                /**
                 * color.name = la couleur
                 * names[4].name = vf
                 */


                objetPokeFull.couleur = dataPoke.color.name;
                objetPokeFull.nomF = dataPoke.names[4].name;


                //ajouter allPoke dans un tableau

                allPokemon.push(objetPokeFull);

                //console.log(allPokemon.length);

                if(allPokemon.length == nbrPoke){

                    
                    
                    //console.log(allPokemon[10].nomF);

                    //trier les ids par ordre croissant
                    tableauFin = allPokemon.sort((a ,b) =>{
                        return a.id - b.id
                    }).slice(0, 8);

                    //creation de carte en html
                    createCard(tableauFin)
                }

            }))
    }))
}


function createCard(tab){

    //console.log(tab)

    for(let i=0; i < tab.length; i++){
        
        const carte = document.createElement("li");
        let couleur = tab[i].couleur;

        carte.style.backgroundColor = couleur;


        //ajouter id du pokemon

        const idCarte = document.createElement("h3");
        idCarte.innerHTML = tab[i].id;


        //ajouter le nom du pokemon

        const nomCarte = document.createElement("p");
        nomCarte.innerHTML = tab[i].nom;


        //ajouter l'image du pokemon (front)

        const imgFPoke = document.createElement("img");
        imgFPoke.src = tab[i].imgF ;
        imgFPoke.setAttribute("alt", tab[i].nom)



        //ajouter les li 
        carte.appendChild(idCarte);
        carte.appendChild(nomCarte);
        carte.appendChild(imgFPoke);


        //ajouter back en rollhover
        hoverLI(carte, tab[i].imgB, tab[i].imgF, imgFPoke, nomCarte, tab[i].nomF, tab[i].nom);

        //ajouter dans ul les li
        listePU.appendChild(carte);

    }
}

function hoverLI(carteLI, imgB, imgF, image, p,nomFr, nom){

    carteLI.addEventListener("mouseover", () => {
        //console.log(imgB);

        image.src = imgB ;
        p.innerHTML = nomFr
    });
    
    carteLI.addEventListener("mouseout", () => {

        image.src = imgF ;
        p.innerHTML = nom
    });
   
}

//scroll infini
window.addEventListener("scroll", () => {

    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    //console.log(scrollTop, scrollHeight, clientHeight);

    if(clientHeight + scrollTop >= clientHeight - 20){
    
        addPoke(8);
    };
    
});

//ajout de carte au scroll

let index = 8;

function addPoke(nbrAddCarte){
    

    //test fin chargement des cartes total
    if( index > nbrPoke){

        return;
    }


    const tabToAdd = allPokemon.slice(index, index+nbrAddCarte);

    createCard(tabToAdd);

    index += nbrAddCarte; 
}

//animation label input 

const inputL = document.querySelector("#find");

inputL.addEventListener("input", (e) => {

    //verifier si input est vide ou nnon

    if(e.target.value !== ''){

        e.target.parentNode.parentNode.classList.add("active-input");

    }else if(e.target.value === ""){
        e.target.parentNode.parentNode.classList.remove("active-input");
    }

});

//systeme de recherche 

inputL.addEventListener("keyup", rechercher);

//function rechercher

function rechercher(){

    //ajouter les pokemon 

    if(index < nbrPoke){
        addPoke(nbrPoke);
    }

    //

    let filter, allLi, titleValue, allTitle;

    // mettre en minuscule
    filter = inputL.value.toLowerCase();

    //recupere toutes les cartes
    allLi = document.querySelectorAll("li");

    //recupere tout les titres
    allTitle = document.querySelectorAll("li>p");

    //
    for(let i=0; i < allLi.length; i++){

        //recupere chaque titre
        titleValue = allTitle[i].innerHTML;

        //si recherche existe
        if(titleValue.toLocaleLowerCase().indexOf(filter) > -1){

            //affichage resultat
            allLi[i].style.display = "flex"
        }else{
            allLi[i].style.display = "none"
        }
    }
}
