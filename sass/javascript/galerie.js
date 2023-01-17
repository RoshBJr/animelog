// Objets pour les clics de galeries
let arrayNbClicks = {};
let arrayMaxClicks = {};

// fonction pour creer une galerie en fonction d'un nom donne (nom de la classe a selectionner)
function CreerGalerie(nomSection){
    // recuperer les galeries dans la section
    let mesGaleries = document.querySelectorAll('.' + nomSection + ' .wp-block-gallery');
    // pour chaque galerie dans la section
    for(let galerie of mesGaleries){
        console.log(galerie);
        if(galerie != null){
            // recuperer la galerie
            let maGalerie = galerie.children;
            let nomMaGalerie = galerie.classList[1];

            // Creer boutons
            // Creer un container pour les boutons et le placer dans la galerie
            let btns = document.createElement("div");
            btns.classList.add('btns');
            document.querySelector('.' + nomMaGalerie).parentNode.insertBefore(btns, document.querySelector('.' + nomMaGalerie).nextSibling);
            // Creer et ajouter dans le container le bouton droit
            let btnDroit = document.createElement("div");
            btnDroit.classList.add('btn-droit', 'btn');
            document.querySelector('.' + nomMaGalerie + ' + .btns').appendChild(btnDroit);
            // Creer et ajouter dans le container le bouton gauche
            let btnGauche = document.createElement("div");
            btnGauche.classList.add('btn-gauche', 'btn');
            document.querySelector('.' + nomMaGalerie + ' + .btns').appendChild(btnGauche);

            // Ajouter un event listener sur les boutons pour changer la galerie
            btnDroit.addEventListener('click', function(){
                ChangerSlide(false, nomMaGalerie, maGalerie);
            })
            btnGauche.addEventListener('click', function(){
                ChangerSlide(true, nomMaGalerie, maGalerie);
            })

            // si ma galerie contient au moins une image
            if(maGalerie.length > 0){
                // definir la taille de la galerie
                arrayNbClicks[nomMaGalerie] = 0;
                arrayMaxClicks[nomMaGalerie] = maGalerie.length - 1;

                // creer un container pour les onglets de la galerie
                let onglets = document.createElement('div');
                onglets.classList.add('onglets', nomMaGalerie);
                onglets.id = 'onglets_' + nomMaGalerie;
                document.querySelector('.' + nomMaGalerie).parentNode.insertBefore(onglets, document.querySelector('.' + nomMaGalerie).nextSibling);

                // inserer les onglets de la galerie dans le container
                for(let i = 0; i < maGalerie.length; i++){
                    let onglet = document.createElement('div');
                    onglet.classList.add('onglet', nomMaGalerie);
                    
                    // le premier onglet est celui actif par defaut
                    if(i == 0){
                        onglet.classList.add('active');
                    }

                    // ajuster la taille de l'onglet selon le nb d'onglet
                    onglet.style.width = (90 / (maGalerie.length - 1)) + '%';
                    document.getElementById('onglets_' + nomMaGalerie).append(onglet);
                }

                // definir les images active, precedente et prochaine (top/bottom)
                maGalerie[arrayNbClicks[nomMaGalerie]].classList.add('active');
                maGalerie[(arrayNbClicks[nomMaGalerie] + 1) > arrayMaxClicks[nomMaGalerie] ? 0 : (arrayNbClicks[nomMaGalerie] + 1)].classList.add('bottom');
                maGalerie[(arrayNbClicks[nomMaGalerie] - 1) < 0 ? arrayMaxClicks[nomMaGalerie] : (arrayNbClicks[nomMaGalerie] - 1)].classList.add('top');
            }
        }
    }
    
}

// fonction pour changer la slide selon la direction voulue
function ChangerSlide(direction, nomSection, maGalerie){
    // updater la position de la galerie (quelle image active)
    direction ? arrayNbClicks[nomSection]++ : arrayNbClicks[nomSection]--;
    if(arrayNbClicks[nomSection] > arrayMaxClicks[nomSection]){
        arrayNbClicks[nomSection] = 0
    }
    if(arrayNbClicks[nomSection] < 0){
        arrayNbClicks[nomSection] = arrayMaxClicks[nomSection]
    }

    // enlever les classes precedentes
    for(let image of maGalerie){
        image.classList.remove('active');
        image.classList.remove('top');
        image.classList.remove('bottom');
    }

    // attribuer les classes aux nouvelles positions d'images
    maGalerie[arrayNbClicks[nomSection]].classList.add('active');
    maGalerie[(arrayNbClicks[nomSection] + 1) > arrayMaxClicks[nomSection] ? 0 : (arrayNbClicks[nomSection] + 1)].classList.add('bottom');
    maGalerie[(arrayNbClicks[nomSection] - 1) < 0 ? arrayMaxClicks[nomSection] : (arrayNbClicks[nomSection] - 1)].classList.add('top');

    // selectionner les onglets et updater celui actif
    let mesOnglets = document.getElementById('onglets_' + nomSection).childNodes;
    for(let onglet of mesOnglets){
        onglet.classList.remove('active');
    }
    mesOnglets[arrayNbClicks[nomSection]].classList.add('active');
}