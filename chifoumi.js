let gagnant;

let titre = document.getElementById("titre");
let rejouer = document.getElementById("boutonRejouer");
let chifoumiTab = ["images-pfc/ciseau.jpg", "images-pfc/feuille.jpg", "images-pfc/pierre.jpg"];

let aleaGauche;
let aleaDroite;

let gauche = document.getElementById("gauche");
let imgGauche = document.getElementById('image-gauche');
let resultatGauche = document.getElementById("resultat-gauche");

let droite = document.getElementById("droite");
let imgDroite = document.getElementById("image-droite");
let resultatDroite = document.getElementById("resultat-droite");


window.addEventListener('load', (event) => {
    initialisation();
})

function initialisation() {
    rejouer.style.display = "none"
    titre.textContent = "CHIFOUMI"
    resultatDroite.textContent = 'none';
    droite.style.backgroundColor = "white";
    resultatGauche.textContent = 'none';
    gauche.style.backgroundColor = "white";
    imgGauche.style.backgroundImage = `url('images-pfc/depart.jpg')`;
    imgDroite.style.backgroundImage = `url('images-pfc/depart.jpg')`;
    droite.style.pointerEvents = 'auto';
    gauche.style.pointerEvents = 'auto';
}


function jouer(zone) {
    
    console.log([zone]);
    console.log(chifoumiTab)

    let random = chifoumiTab[Math.floor(Math.random()*chifoumiTab.length)];

    console.log(random);

    if([zone] == 'gauche') {
        imgGauche.style.backgroundImage = `url(${random})`;
    } else if ([zone] == 'droite') {
        imgDroite.style.backgroundImage = `url(${random})`;
    }
    document.getElementById(zone).style.pointerEvents = 'none';
   

    aleaDroite = chifouCheck(imgDroite.style.backgroundImage);
    aleaGauche = chifouCheck(imgGauche.style.backgroundImage);


    setTimeout(() => {


    if ( imgDroite.style.backgroundImage === imgGauche.style.backgroundImage ) {
        titre.textContent = "Aie, c'est l'egalite pas de chance";
        resultatDroite.textContent = "Egalite";
        droite.style.backgroundColor = "orange";
        resultatGauche.textContent = "Egalite";
        gauche.style.backgroundColor = "orange";

        rejouer.style.display = "initial";

    } else {
        if (aleaGauche == "ciseau" && aleaDroite == "feuille" || aleaGauche == "feuille" && aleaDroite == "pierre" || aleaGauche == "pierre" && aleaDroite == "ciseau") {

                resultatGauche.textContent = "Gagne";
                gauche.style.backgroundColor = "green";
                resultatDroite.textContent = "Perdu";
                droite.style.backgroundColor = "red";
                
                rejouer.style.display = "initial";
            } 
        else if(aleaDroite == "ciseau" && aleaGauche== "feuille" || aleaDroite == "feuille" && aleaGauche == "pierre" || aleaDroite == "pierre" && aleaGauche == "ciseau"){
                
                    resultatDroite.textContent = "Gagne";
                    droite.style.backgroundColor = "green";
                    resultatGauche.textContent = "Perdu";
                    gauche.style.backgroundColor = "red";

                    rejouer.style.display = "initial";
        } 
    
    }

    }, "1000");
}

function chifouCheck(image){

    let chifouCheckTab = ['url("images-pfc/ciseau.jpg")', 'url("images-pfc/feuille.jpg")', 'url("images-pfc/pierre.jpg")'];


    if (image == chifouCheckTab[0]) {
        return "ciseau";
    } else if (image == chifouCheckTab[1]) {
        return "feuille";
    } else if (image == chifouCheckTab[2]) {
        return "pierre";
    }
}

