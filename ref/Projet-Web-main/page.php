<?php get_header(); ?>

<main class="">
    <?php the_content(); ?>
    <!-- page.php -->
    <div class="galerie enseignant">
        <?php if ( get_post_gallery() ){
        echo '
        <div class="btns">
            <div class="btn btn-droit"></div>
            <div class="btn btn-gauche"></div>
        </div>';
        } 
        ?>
        <?php echo get_post_gallery(the_post(), true) ?>
    </div>
    
</main>

<?php get_footer(); ?>