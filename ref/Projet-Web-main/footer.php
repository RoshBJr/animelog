<footer id="contact" class="contact">
<div class="bande"><?php dynamic_sidebar('footer_ligne_1'); ?> </div>
</footer>
<?php wp_footer(); ?>
</body>
<script type="text/javascript" defer>
    let page = document.querySelector('main');
    // Ajout des ecouteurs d'evenements pour le bouton menu
    BtnMenu();
    if(page.className != "main_404")
    {
        // Ecouteurs d'evenements de la grille de cours
        GalerieCours();
        DropdownSession();
        FiltreCours();
        SelecteurSession();
        // Creation des differentes galeries
        CreerGalerie('galerie_projet');
        CreerGalerie('vie_etudiante');
        CreerGalerieEnseignant();

        // Ecouteur pour desktop
        ScrollDesktop();
    }
    // Affichage icone Faire Defiler pour page 404
    VerifierPage404();
</script>
</html> 