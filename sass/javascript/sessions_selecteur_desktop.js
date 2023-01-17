function SelecteurSession()
{
    const titresSessions = document.querySelectorAll('.bouton_session_desktop h4');
    const lesSessions = document.querySelectorAll('.container_des_cours a > div');
    if(typeof titresSessions[0] !== 'undefined'){
        titresSessions[0].classList.add('selected');
    }
    // console.log(titresSessions);
    let lesBaliseIcone = document.querySelectorAll('.container_cours .un_cours .icone');
    let lesBaliseCours = document.querySelectorAll('.les_cours .titre_cours');
    let lesSujetCours = document.querySelectorAll('.container_cours .un_cours .sujet');
    let cloneIcone;
    let lesTitreCours;
    const lesIconesCours = document.querySelectorAll('figure');

    for(let i = 0; i < lesBaliseCours.length; i++)
        {
            for(let j = 0; j < lesIconesCours.length; j++)
            {
                if(lesBaliseCours[i].classList.contains(lesIconesCours[j].id))
                {
                    cloneIcone = lesIconesCours[j].cloneNode(true);
                    lesBaliseCours[i].append(cloneIcone);
                }
            }
        }
    // lesIconesCours.forEach(unIcone => console.log(unIcone.id));
    // console.log(lesIconesCours);
    // console.log(lesBaliseIcone);
    // console.log(lesSujetCours);
    console.log(lesIconesCours.length);
    // console.log(lesBaliseTitre.length);
    for(let i = 0; i < lesBaliseIcone.length; i++)
        {
            for(let j = 0; j < lesIconesCours.length; j++)
            {
                if(lesSujetCours[i].innerHTML == lesIconesCours[j].id)
                {
                    cloneIcone = lesIconesCours[j].cloneNode(true);
                    lesBaliseIcone[i].append(cloneIcone);
                }
            }
        }
        if(document.querySelector('.grille') !== null){
            document.querySelector('.grille').addEventListener('click', () => {
                lesBaliseIcone = document.querySelectorAll('.container_cours .un_cours .icone');
                lesSujetCours = document.querySelectorAll('.container_cours .un_cours .sujet');
                for(let i = 0; i < lesBaliseIcone.length; i++)
                {
                    for(let j = 0; j < lesIconesCours.length; j++)
                    {
                        if(lesSujetCours[i].innerHTML == lesIconesCours[j].id && lesBaliseIcone[i].childElementCount == 0)
                        {
                            cloneIcone = lesIconesCours[j].cloneNode(true);
                            lesBaliseIcone[i].append(cloneIcone);
                        }
                    }
                }
            })
        }
    SpawnLesTitresSession();
    
    function SpawnLesTitresSession()
    {
        titresSessions.forEach(unTitre => unTitre.addEventListener('click', () => {
            unTitre.style.cursor = 'pointer';
            let laBoiteCours = document.querySelectorAll(".les_cours");
            laBoiteCours.forEach((uneBoite) =>
            {
                uneBoite.style.animation = "animGrilleTitre 1s ease";
            })
            let titreTemp = document.querySelector('.bouton_session_desktop .selected');
            if(titreTemp != unTitre)
            {
                titreTemp.classList.remove('selected');
            }
            unTitre.classList.add('selected');
            
            const choixSession = unTitre.className;
            for(let i = 0; i < lesSessions.length; i++)
            {
                if(choixSession.includes(lesSessions[i].className))
                {
                    
                    lesSessions[i].style.display = 'flex';
                }
                else
                {
                    lesSessions[i].style.display = 'none';
                }
            }
        }));
    }
}