// Objets pour les clics de galeries
let arrayNbClicksEnseignants = {};
let arrayMaxClicksEnseignants = {};

// nom des classes de galerie pour les query selectors
let nomMaGalerie = 'galerie-prof';
let nomUnDivProf = 'un-prof';

// position du scroll dans la galerie
let positionScroll = 0;

// fonction pour changer la slide en appuyant sur le bouton droit
function BtnDroit(){
    ChangerSlideEnseignant(false, nomMaGalerie, document.querySelectorAll('.' + nomUnDivProf));
}
// fonction pour changer la slide en appuyant sur le bouton gauche
function BtnGauche(){
    ChangerSlideEnseignant(true, nomMaGalerie, document.querySelectorAll('.' + nomUnDivProf));
}
// fonction pour quitter la galerie mode plein ecran
function Retour(){
    document.querySelector('.' + nomMaGalerie).classList.remove('actif');
    document.querySelector('.' + nomMaGalerie).scrollLeft = positionScroll;

    // enlever les classes des images actives (prochain et precedent aussi)
    let mesProfs = document.querySelectorAll('.' + nomUnDivProf);
    for(let prof of mesProfs){
        prof.classList.remove('active', 'bottom', 'top');
    }
}

// fonction pour creer les interactions dans la galerie de profs
function CreerGalerieEnseignant(){
    if(document.querySelector('.' + nomMaGalerie) !== null){
        // garder en memoire la position du scroll dans la galerie
        document.querySelector('.' + nomMaGalerie).addEventListener('scroll', function(){
            if(this.scrollLeft != 0){
                positionScroll = this.scrollLeft;
            }
        })

        // initialiser le nb de clicks dans l'objet
        let mesProfs = document.querySelectorAll('.' + nomUnDivProf);
        arrayNbClicksEnseignants[nomMaGalerie] = 0;
        arrayMaxClicksEnseignants[nomMaGalerie] = mesProfs.length - 1;

        // ajouter un event listener sur les images de profs pour basculer la galerie en plein ecran
        for(let prof of mesProfs){
            prof.addEventListener('click', function(){
                // si la galerie n'est pas deja en mode actif, la rendre en mode actif
                if(!document.querySelector('.' + nomMaGalerie).classList.contains('actif')){
                    document.querySelector('.' + nomMaGalerie).classList.add('actif');
                    arrayNbClicksEnseignants[nomMaGalerie] = this.id;
                    
                    // glisser la galerie au debut
                    document.querySelector('.' + nomMaGalerie).scrollLeft = 0;

                    // attribuer aux images appropriees la classe active, top et bottom (prochaine et precedente)
                    mesProfs[arrayNbClicksEnseignants[nomMaGalerie]].classList.add('active');
                    mesProfs[(Number(arrayNbClicksEnseignants[nomMaGalerie]) + 1) > arrayMaxClicksEnseignants[nomMaGalerie] ? 0 : (Number(arrayNbClicksEnseignants[nomMaGalerie]) + 1)].classList.add('bottom');
                    mesProfs[(Number(arrayNbClicksEnseignants[nomMaGalerie]) - 1) < 0 ? arrayMaxClicksEnseignants[nomMaGalerie] : (Number(arrayNbClicksEnseignants[nomMaGalerie]) - 1)].classList.add('top');
                }
            })
        }
    }
}

// fonction pour changer la slide avec les boutons gauche droite (selon direction)
function ChangerSlideEnseignant(direction, nomSection, mesProfs){
    direction ? arrayNbClicksEnseignants[nomSection]++ : arrayNbClicksEnseignants[nomSection]--;
    if(arrayNbClicksEnseignants[nomSection] > arrayMaxClicksEnseignants[nomSection]){
        arrayNbClicksEnseignants[nomSection] = 0
    }
    if(arrayNbClicksEnseignants[nomSection] < 0){
        arrayNbClicksEnseignants[nomSection] = arrayMaxClicksEnseignants[nomSection]
    }

    let maGalerie = document.querySelector('.' + nomMaGalerie);
    for(let image of maGalerie.children){
        image.classList.remove('active');
        image.classList.remove('top');
        image.classList.remove('bottom');
    }
    mesProfs[arrayNbClicksEnseignants[nomSection]].classList.add('active');
    mesProfs[(arrayNbClicksEnseignants[nomSection] + 1) > arrayMaxClicksEnseignants[nomSection] ? 0 : (arrayNbClicksEnseignants[nomSection] + 1)].classList.add('bottom');
    mesProfs[(arrayNbClicksEnseignants[nomSection] - 1) < 0 ? arrayMaxClicksEnseignants[nomSection] : (arrayNbClicksEnseignants[nomSection] - 1)].classList.add('top');
}
