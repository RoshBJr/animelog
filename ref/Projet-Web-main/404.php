<?php get_header(); ?>
<main class="main_404">
            <?php
            global $post;
            $args = array( 'category_name' => 'not_found' );
            $myposts = get_posts( $args );
            foreach( $myposts as $post ) :  setup_postdata($post);?>
                <?php the_content(); ?>
            <?php endforeach; ?>
    </section>
</main>
<?php get_footer(); ?>