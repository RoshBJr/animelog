<?php 
/**
 * Template Name: Enseignant
 * 
 * @package WordPress
 * @subpackage cidw_4w4
*/
 ?>

 <?php get_header(); ?>
 <main class="site__main">
    <?php if(have_posts()):the_post(); ?>

    <h2><?php the_title(); ?></h2>
    <?php the_content(); ?>

    <?php endif; ?>
 </main>
 <?php get_footer(); ?>