<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Alexis Leblanc, Danishar Casimir, Roshan Jr Bussun, Rémi Gervais">
    <meta name="keywords" content="TIM, Multimédia, Maisonneuve">
    <meta name="description" content="Site du TIM du Collège du Maisonneuve fait par des étudiants">
    <link rel="stylesheet" href="https://use.typekit.net/llo2exo.css">
    <title>TIM | Accueil</title>
    <?php wp_head(); ?>
</head>
<body>
<header class="">
    <div class="bordure_lateral"></div>
    <div class="bg_burger_menu">
        <div class="btn btn_menu">
            <div class="menu-icon">
                <input class="menu-icon__cheeckbox" type="checkbox" />
                    <div>
                        <span></span>
                        <span></span>
                    </div>
            </div>
        </div>
        <a href= "<?=$_SERVER['REQUEST_URI'].'#presentation'?>"><h1 class="titre_burger_menu">TIM</h1></a>
    </div>

    <div class="site">
            <div class="boiteRond">
                <div class="rond rond1a"></div>
            </div>
            <div class="boiteRond">
                <div class="rond rond1b"></div>
            </div>
            <div class="boiteRond">
                <div class="rond rond2a"></div>
            </div>
            <div class="boiteRond">
                <div class="rond rond2b"></div>
            </div>
            <div class="boiteRond">
                <div class="rond rond3a"></div>
            </div>
            <div class="boiteRond">
                <div class="rond rond3b"></div>
            </div>
    </div>
    <?php
        wp_nav_menu( array( 
        'container_class' => 'menu' ) );
    ?>
    <?php
            global $post;
            $args = array( 'category_name' => 'presentation' );
            $myposts = get_posts( $args );
            foreach( $myposts as $post ) :  setup_postdata($post);?>
            <?php $slugSection = get_the_permalink();?>
        <section id="<?=basename($slugSection);?>" class="page <?=basename($slugSection);?>">
            <div class="container">
                <?php the_content(); ?>
            </div>
            <?php endforeach; ?>
            <?php $_SERVER['REQUEST_URI'] ?>
            <a href= "<?=$_SERVER['REQUEST_URI'].'#diagramme'?>" class="container_icone_defile">
                    <h3 class="texte_defilement">Faire défiler</h3>
                    <div class="icone_defilement"></div>
            </a>
        </section>
</header>