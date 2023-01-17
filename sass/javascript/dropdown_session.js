function DropdownSession()
{
    const dropdownSession = document.getElementById('ref_dropdown_session'); // va chercher le dropdown pour les sessions dans le fichier front-page.php
    const select = document.querySelector('select');
    const option = document.querySelector('select option');
    // va chercher tout les session avec leur cours pour le mettre dans un array
    const session1 = document.querySelector('.container_des_cours .session_1');
    const session2 = document.querySelector('.container_des_cours .session_2');
    const session3 = document.querySelector('.container_des_cours .session_3');
    const session4 = document.querySelector('.container_des_cours .session_4');
    const session5 = document.querySelector('.container_des_cours .session_5');
    const session6 = document.querySelector('.container_des_cours .session_6');
    // l'array des sessions pour naviguer dans chacune des sessions
    const lesSessions = [session1, session2, session3, session4, session5, session6];

    if(select !== null){
        select.addEventListener('change', changerSession); // EventListener pour detecter le changement lorsqu'on clique sur une autre session
    }
    // fonction pour changer l'information de la grille selon la session selectionner
    function changerSession()
    {
        const choixSession = select.value;
        for(let i = 0; i < lesSessions.length; i++)
        {
            if(lesSessions[i].className === choixSession)
            {
                lesSessions[i].style.display = 'flex';
            }
            else
            {
                lesSessions[i].style.display = 'none';
            }
        }
    }
}