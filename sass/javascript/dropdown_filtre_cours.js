function FiltreCours()
{
    const labelSelect = document.querySelector('#grille h4'); // va chercher le titre h4 "Je suis"
    const filtreCoursSelect = document.createElement('Select'); // creer un element Select pour append au h4
    const logique = document.createElement('option'); // creer chacun des elements options pour append au Select filtreCoursSelect 'logique'
    const creatif = document.createElement('option'); // creer chacun des elements options pour append au Select filtreCoursSelect 'creatif'
    const parfait = document.createElement('option'); // creer chacun des elements options pour append au Select filtreCoursSelect 'parfait'
    logique.value = 'logique'; // on attribue un value a chacune des options pour les viser
    creatif.value = 'creatif'; // on attribue un value a chacune des options pour les viser
    parfait.value = 'parfait'; // on attribue un value a chacune des options pour les viser
    // on ajoute du texte pour le dropdown filtre
    logique.innerHTML = 'Logique';
    creatif.innerHTML = 'Créatif';
    parfait.innerHTML = 'Parfait';
    // on append les options au select filtreCoursSelect
    filtreCoursSelect.appendChild(parfait);
    filtreCoursSelect.appendChild(logique);
    filtreCoursSelect.appendChild(creatif);
    // finalement on append le select au h4 'Je suis'
    labelSelect.appendChild(filtreCoursSelect);
    // const btnBas = document.querySelector('.les_cours .btns-bas');
    // console.log(lesCoursArray[0].previousElementSibling);
    const dropdownSession = document.getElementById('ref_dropdown_session');
    const desktopSession = document.querySelectorAll('.bouton_session_desktop h4');
    let leTitre = desktopSession[0].className;
    filtreCoursSelect.addEventListener('change', filtrerCours);
    dropdownSession.addEventListener('change', filtrerCours);
    // let laSessionTitre
    desktopSession.forEach(unTitre => unTitre.addEventListener('click', () => {
        leTitre = unTitre.className;
        filtrerCours();
    }));
    
    let containerCoursAAfficher = document.querySelector('.grille .container_cours');
    function filtrerCours()
    {
        let carteCours = document.querySelectorAll('.grille .container_cours .un_cours');
        let lesCours;
        if(window.innerWidth >= 993)
        {
            lesCours = document.querySelectorAll(`.${leTitre} .les_cours .titre_cours`);
        }
        else
        {
            lesCours = document.querySelectorAll(`.${dropdownSession.value} .les_cours .titre_cours`);
        }
        // console.log(leTitre);
        const choixfiltre = filtreCoursSelect.value;
        for(let i = 0; i < lesCours.length; i++)
        {
            if(lesCours[i].nextElementSibling.className.includes(choixfiltre))
            {
                // if(lesCours[i].nextElementSibling.className.includes(choixfiltre) && lesCours[i].style.display == 'none')
                // {
                // lesCours[i].classList.remove("filtreFade");
                if(choixfiltre == "creatif")
                {
                    lesCours[i].classList.remove("filtreFade");
                    lesCours[i].classList.add("filtreFadeIn");
                    setTimeout(Appear, 1000)
                    function Appear()
                    {
                        lesCours[i].classList.remove("filtreFadeIn");
                    }
                }
                lesCours[i].style.display = 'flex';
                carteCours[i].style.display = 'flex';
                for(let j = 0; j < carteCours.length; j++)
                {
                    if(carteCours[j].firstElementChild.innerHTML == lesCours[i].innerHTML)
                    {
                        carteCours[j].style.display = 'none';
                    }
                }
                // }
            }
            else if (choixfiltre == 'parfait')
            {
                // btnBas.previousElementSibling.style.display = 'none';
                
                lesCours[i].classList.remove("filtreFade");
                lesCours[i].classList.add("filtreFadeIn");
                setTimeout(Appear, 1000)
                function Appear()
                {
                    lesCours[i].classList.remove("filtreFadeIn");
                }
                lesCours[i].style.display = 'flex';
                carteCours[i].style.display = 'flex';
                
                for(let j = 0; j < carteCours.length; j++)
                {
                    if(carteCours[j].firstElementChild.innerHTML == lesCours[i].innerHTML)
                    {
                        carteCours[j].style.display = 'flex';
                    }
                }
            }
            else
            {
                carteCours[i].style.display = 'none';
                if(lesCours[i].className.includes('filtreFade'))
                {
                    lesCours[i].classList.remove("filtreFade");
                }
                // lesCours[i].classList.remove("filtreFadeIn");
                lesCours[i].classList.add("filtreFade");
                setTimeout(Gone, 1000);
                function Gone()
                {
                    lesCours[i].style.display = 'none';
                    lesCours[i].classList.remove("filtreFade");
                       
                }
                
                for(let j = 0; j < carteCours.length; j++)
                {
                    if(carteCours[j].firstElementChild.innerHTML == lesCours[i].innerHTML)
                    {
                        carteCours[j].style.display = 'none';
                    }
                }
            }
        }
    }
}