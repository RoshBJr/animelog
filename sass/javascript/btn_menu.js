function BtnMenu(){
    // Ouvrir/fermer le menu en cliquant sur bouton burger
    document.querySelector('.btn_menu').addEventListener('click', function(){
        document.querySelector('.menu ul').classList.toggle('open');
    })

    let menuLis = document.querySelectorAll('.menu li');

    // ajouter un event listener pour fermer le menu quand on clique sur une nav
    for(let li of menuLis){
        li.addEventListener('click', function(){
            document.querySelector('.menu ul').classList.remove('open');
            document.querySelector('.menu-icon__cheeckbox').checked = false;
        })
    }
}