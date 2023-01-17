function IconeTitreCours()
{
    let toutLesCours = document.querySelectorAll('.les_cours .titre_cours');
    let infoUnCours = ('.un_cours');
    toutLesCours.forEach((unCours) => {
        let infoCours = unCours.nextElementSibling;
        console.log(infoCours.querySelector('.sujet'));
    })
}