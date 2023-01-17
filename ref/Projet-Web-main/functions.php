<?php
    // Fonction pour avoir un menu
    function wpb_custom_new_menu() {
        register_nav_menus(
            array(
            'menu' => __( 'Menu' )
            )
        );
    }
    
    // Enqueue scripts
    function wpdocs_theme_name_scripts() {
        wp_enqueue_style( 'style.css', get_stylesheet_uri() );
        wp_enqueue_script( 'btn_menu', get_template_directory_uri() . '/sass/javascript/btn_menu.js', array(), true );
        wp_enqueue_script( 'galerie', get_template_directory_uri() . '/sass/javascript/galerie.js', array(), true );
        wp_enqueue_script( 'dropdown_session', get_template_directory_uri() . '/sass/javascript/dropdown_session.js', array(), true );
        wp_enqueue_script( 'dropdown_filtre_cours', get_template_directory_uri() . '/sass/javascript/dropdown_filtre_cours.js', array(), true );
        wp_enqueue_script( 'galerie_enseignant', get_template_directory_uri() . '/sass/javascript/galerie_enseignant.js', array(), true );
        wp_enqueue_script( 'galerie_cours', get_template_directory_uri() . '/sass/javascript/galerie_cours.js', array(), true );
        wp_enqueue_script( 'scroll_horizontal', get_template_directory_uri() . '/sass/javascript/scroll_horizontal.js', array(), true );
        wp_enqueue_script( 'sessions_selecteur_desktop', get_template_directory_uri() . '/sass/javascript/sessions_selecteur_desktop.js', array(), true );
        wp_enqueue_script( 'resize_events', get_template_directory_uri() . '/sass/javascript/resize_events.js', array(), true );
        wp_enqueue_script( 'onload_events', get_template_directory_uri() . '/sass/javascript/onload_events.js', array(), true );
        wp_enqueue_script( 'page_404', get_template_directory_uri() . '/sass/javascript/page_404.js', array(), true );
    }
    add_action( 'wp_enqueue_scripts', 'wpdocs_theme_name_scripts' );

    // Ajouter les widgets de footer
    add_action( 'widgets_init', 'my_register_sidebars' );
    function my_register_sidebars() {
        register_sidebar(
            array(
                'id'            => 'footer_ligne_1',
                'name'          => __( 'Footer ligne 1' ),
                'description'   => __( 'Ce sidebar s\'affiche dans une ligne du pied de page' ),
                'before_widget' => '<div id="%1$s" class="widget %2$s">',
                'after_widget'  => '</div>',
                'before_title'  => '<h3 class="widget-title">',
                'after_title'   => '</h3>',
            )
        );
    }

    // Recuperer les infos d'une image
    function get_post_gallery_images_with_info($postvar = NULL) {
        if(!isset($postvar)){
            global $post;
            $postvar = $post;//if the param wasnt sent
        }
    
    
        $post_content = $postvar->post_content;
        
        return $post_content;
    }
    function wp_get_attachment( $attachment_id ) {

        $attachment = get_post( $attachment_id );
        return array(
            'alt' => get_post_meta( $attachment->ID, '_wp_attachment_image_alt', true ),
            'caption' => $attachment->post_excerpt,
            'description' => $attachment->post_content,
            'href' => get_permalink( $attachment->ID ),
            'src' => $attachment->guid,
            'title' => $attachment->post_title
        );
    }

    // Enlever les styles par defaut de WordPress
    add_action(
        'wp_default_styles',
        function( $styles ) {
    
            /* Create an array with the two handles wp-block-library and
             * wp-block-library-theme.
             */
            $handles = [ 'wp-block-library', 'wp-block-library-theme' ];
    
            foreach ( $handles as $handle ) {
                // Search and compare with the list of registered style handles:
                $style = $styles->query( $handle, 'registered' );
                if ( ! $style ) {
                    continue;
                }
                // Remove the style
                $styles->remove( $handle );
                // Remove path and dependencies
                $styles->add( $handle, false, [] );
            }
        },
        PHP_INT_MAX
    );
    
    add_action( 'init', 'wpb_custom_new_menu' );
?>