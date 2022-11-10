let gagnant;

let titre = document.getElementById("titre");
let rejouer = document.getElementById("boutonRejouer");
let chifoumiTab = ['images-pfc/ciseau.jpg', 'images-pfc/feuille.jpg', 'images-pfc/pierre.jpg'];

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

// gauche.addEventListener("click", (event) => {
//     rejouer.style.display = "initial";
//     imgGauche.style.backgroundImage = `url('images-pfc/ciseau.jpg')`;
// })

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
    verifEgalite();

    console.log(verifEgalite());


    if (verifEgalite() === true) {
        titre.textContent = "Aie, c'est l'egalite pas de chance";
        resultatDroite.textContent = "Egalite";
        droite.style.backgroundColor = "orange";
        resultatGauche.textContent = "Egalite";
        gauche.style.backgroundColor = "orange";

        rejouer.style.display = "initial";

    } else {
        if (imgGauche.style.backgroundImage == `url('images-pfc/ciseau.jpg')` && imgDroite.style.backgroundImage == `url('images-pfc/feuille.jpg')` ||
            imgGauche.style.backgroundImage == `url('images-pfc/pierre.jpg')` && imgDroite.style.backgroundImage == `url('images-pfc/ciseau.jpg')` ||
            imgGauche.style.backgroundImage == `url('images-pfc/feuille.jpg')` && imgDroite.style.backgroundImage == `url('images-pfc/pierre.jpg')`){

                resultatGauche.textContent = "Gagne";
                gauche.style.backgroundColor = "green";
                resultatDroite.textContent = "Perdu";
                droite.style.backgroundColor = "red";

            } 
        else if(imgDroite.style.backgroundImage == `url('images-pfc/ciseau.jpg')` && imgGauche.style.backgroundImage == `url('images-pfc/feuille.jpg')` ||
                imgDroite.style.backgroundImage == `url('images-pfc/pierre.jpg')` && imgGauche.style.backgroundImage == `url('images-pfc/ciseau.jpg')` ||
                imgDroite.style.backgroundImage == `url('images-pfc/feuille.jpg')` && imgGauche.style.backgroundImage == `url('images-pfc/pierre.jpg')`){
                
                    resultatDroite.textContent = "Gagne";
                    droite.style.backgroundColor = "green";
                    resultatGauche.textContent = "Perdu";
                    gauche.style.backgroundColor = "red";
        } 
        
        rejouer.style.display = "initial";
    }
    
}

function verifEgalite() {
    if (imgDroite.style.backgroundImage === imgGauche.style.backgroundImage) {
        return true;
    } else {
        return false;
    }
}