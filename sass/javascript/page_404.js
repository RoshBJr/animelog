function VerifierPage404(){
    if(document.querySelector('.main_404') === null){
        document.querySelector('.presentation .container_icone_defile').style.opacity = "1";
        document.querySelector('.presentation .container_icone_defile').style.pointerEvents = "auto";
    }
    else{
        document.querySelector('.presentation .container_icone_defile').style.opacity = "0";
        document.querySelector('.presentation .container_icone_defile').style.pointerEvents = "none";
    }
}