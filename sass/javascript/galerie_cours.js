function GalerieCours()
{
    const dropdownSession = document.getElementById('ref_dropdown_session'); // va chercher le dropdown pour les sessions dans le fichier front-page.php
    const laSectionGrille = document.querySelector('.grille');
    const containerCoursAAfficher = document.createElement('section');
    const btnBas = document.querySelector('.btns-bas');
    containerCoursAAfficher.classList.add('container_cours');
    laSectionGrille.appendChild(containerCoursAAfficher);
    containerCoursAAfficher.style.display = 'none';
    btnBas.style.display = 'none';
    laSectionGrille.appendChild(btnBas);
    const desktopSession = document.querySelectorAll('.bouton_session_desktop h4');
    let leTitre = desktopSession[0].className;
    desktopSession.forEach(unTitre => unTitre.addEventListener('click', () => {
        leTitre = unTitre.className;
        ChangerCours();
    }));
    
    let burger = document.querySelector('input');
    burger.addEventListener('click', () => {
        RetourCours();
    })

    if(window.innerWidth >= 993)
    {
        chercherBonCours = (`.${leTitre} .les_cours .titre_cours`)
        titreCours = document.querySelectorAll(chercherBonCours);
    }
    else
    {
        chercherBonCours = (`.${dropdownSession.value} .les_cours .titre_cours`);
        titreCours = document.querySelectorAll(chercherBonCours);
    }

    dropdownSession.addEventListener('change', ChangerCours);

    for(let i =0; i < titreCours.length; i++)
    {
        titreCours[i].addEventListener('click',() => { AfficherCours(titreCours[i]) });
        const cloneBalise = titreCours[i].nextElementSibling.cloneNode(true);
        containerCoursAAfficher.appendChild(cloneBalise);
    }
    
    function ChangerCours()
    {
        if(window.innerWidth >= 993)
        {
            chercherBonCours = (`.${leTitre} .les_cours .titre_cours`)
            titreCours = document.querySelectorAll(chercherBonCours);
        }
        else
        {
            chercherBonCours = (`.${dropdownSession.value} .les_cours .titre_cours`);
            titreCours = document.querySelectorAll(chercherBonCours);
        }
        
        let lesCours = document.querySelectorAll(`.grille > .container_cours .un_cours`);
        if(lesCours.length != 0)
        {
            lesCours.forEach(cours => cours.remove());
            for(let i =0; i < titreCours.length; i++)
            {
                titreCours[i].addEventListener('click',() => { AfficherCours(titreCours[i]) });
                const cloneBalise = titreCours[i].nextElementSibling.cloneNode(true);
                containerCoursAAfficher.appendChild(cloneBalise);
            }
        }
    }

    function AfficherCours(leCours)
    {
        containerCoursAAfficher.style.display = 'flex'
        let lesCoursAAfficher = document.querySelectorAll(`.grille section .un_cours`);
        for(let i=0; i < lesCoursAAfficher.length; i++)
        {
            if(lesCoursAAfficher[i].className.includes(leCours.nextElementSibling.className))
            {
                lesCoursAAfficher[i].style.zIndex = '91';
                btnBas.style.display = 'flex';
            }
        }
    }
}

function RetourCours()
{
    document.querySelectorAll('.grille .container_cours .un_cours').forEach(unCours => unCours.style.zIndex = '90');
    document.querySelector('.grille section').style.display = 'none';
    document.querySelector('.grille > .btns-bas').style.display = 'none';
}

function BtnProchain()
{
    let lesCoursAfiltrer = document.querySelectorAll('.grille .container_cours .un_cours');
    let filtered = [].filter.call(lesCoursAfiltrer, function(el) {
    let style = window.getComputedStyle(el);
    return (style.display !== 'none')
    });
    for(let i = 0; i < filtered.length; i++)
    {
        // document.querySelectorAll('.grille .container_cours .un_cours')
        if(filtered[i].style.zIndex == '91')
        {
            filtered[i].style.zIndex = '90';
            filtered[i].style.display = 'flex'
            if(i == (filtered.length - 1))
            {
                filtered[0].style.zIndex = '91';
                filtered[0].style.display = 'flex';
                return;
            }
            else
            {
                filtered[i+1].style.zIndex = '91';
                filtered[i+1].style.display = 'flex'
                return;
            }
        }
    }
}