<?php get_header(); ?>

<main class="">
<?php

global $post;
$post_slug = $post->post_name;
echo $post_slug;
 ?>
    <!-- singl-post.php -->
</main>

<?php get_footer(); ?>