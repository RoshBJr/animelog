addEventListener("resize", (event) => {
    if(document.body.clientWidth >= 993){
        document.body.scrollTop = 0; // Pour Safari
        document.documentElement.scrollTop = 0; // Pour Chrome, Firefox, IE et Opera
        document.querySelector('html').style.scrollBehavior = "auto";
    }
});