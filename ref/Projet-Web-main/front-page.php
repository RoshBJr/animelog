<?php get_header() ?>

<main class="toutes_les_sections"> 
        <?php
            global $post;
            $args = array( 'category_name' => 'sections', 
                            'numberposts' => 6
            );
            $myposts = get_posts( $args );
            foreach( $myposts as $post ) :  setup_postdata($post);
        ?>
        <?php $slugSection = get_the_permalink();?>
        

        <section id="<?=basename($slugSection);?>" class="page <?=basename($slugSection);?>">
            <div class="container_section">
                <div class="container_titre"><h1><?= the_title(); ?></h1></div>
                <div class="container_info"> 
                    <?= the_content(); ?>

                    <?php if(basename($slugSection) == 'grille') : ?>
                        <?php $les_sessions = acf_get_field('les_sessions');?>
                        <?php $grille = get_field('les_sessions');?>
                    <div class="container_cours_session">
                        <div class="bouton_session_desktop">
                            <?php for ($counter = 0; $counter < count($les_sessions['sub_fields']); $counter++): ?>
                                <?php $uneSession = $les_sessions['sub_fields'][$counter]['label'];?>
                                <?php $laClassSession = $les_sessions['sub_fields'][$counter]['wrapper']['class'];?>
                                <h4 class="<?= $laClassSession;?>"><?=$uneSession;?></h4>
                            <?php endfor;?>
                        </div>
                        <!-- faire apparaitre les sessions -->
                        <div class="container_des_cours">
                            <div class="dropdown_hover">Changer de session</div>
                            <select name="sessions" id="ref_dropdown_session">
                            <!-- boucle pour creer un dropdown menu des sessions -->
                            <?php for ($counter = 0; $counter < count($les_sessions['sub_fields']); $counter++): ?>
                                <?php $uneSession = $les_sessions['sub_fields'][$counter]['label'];?>
                                <?php $laClassSession = $les_sessions['sub_fields'][$counter]['wrapper']['class'];?>
                                <option value="<?= $laClassSession;?>"><?=$uneSession;?></option>
                            <?php endfor;?>
                            </select>
                            <a href= "<?=$_SERVER['REQUEST_URI'].'#grille'?>">
                            <!-- la premiere boucle est pour aller chercher chacune des Sessions -->
                            <!-- la deuxieme boucle est pour aller chercher chacun des cours d'une des sessions -->
                            <?php for ($counter = 0; $counter < count($les_sessions['sub_fields']); $counter++): ?> 
                                <?php $classSession = $les_sessions['sub_fields'][$counter]['wrapper']['class'];?>
                                <div class="<?= $classSession;?>">
                                    <div class="container_titre_session"><h1><?= $les_sessions['sub_fields'][$counter]['label'];?></h1></div>
                                    <div class="les_cours">
                                    <?php for ($counter2 = 0; $counter2 < count($les_sessions['sub_fields'][$counter]['sub_fields']); $counter2++): ?>
                                        <?php $chercherSousInfoCours = $les_sessions['sub_fields'][$counter]['sub_fields'][$counter2]['sub_fields'];?>
                                        <h4 class="titre_cours <?= $chercherSousInfoCours[1]['default_value'];?>"><?= $les_sessions['sub_fields'][$counter]['sub_fields'][$counter2]['label'];?></h4>
                                        <?php $classCours = $les_sessions['sub_fields'][$counter]['sub_fields'][$counter2]['wrapper']['class'];?>
                                        <div class=" un_cours <?= $classCours ?>">
                                            <h4 class="cours_titre"><?= $les_sessions['sub_fields'][$counter]['sub_fields'][$counter2]['label'];?></h4>
                                            <p class="cours_description"><?= $chercherSousInfoCours[0]['default_value'];?></p>
                                            <div class="icone"></div>
                                            <h4 class="sujet"><?= $chercherSousInfoCours[1]['default_value'];?></h4>
                                        </div>
                                    <?php endfor;?>
                                    <div class="btns-bas">
                                        <button onclick="RetourCours()" class="btn-retour">Retour</button>
                                        <button onclick="BtnProchain()" class="btn-prochain">Prochain Cours</button>
                                    </div> 
                                    </div>
                                </div>
                            <?php endfor;?>
                            </a>
                        </div>
                    </div>
                        <!-- fin faire apparaitre les sessions -->
                    <?php endif; ?>
                    
                    <?php if(basename($slugSection) == 'enseignants') : ?>
                        <!-- Pour recuperer les descriptions des enseignants -->
                        <?php 
                            $pods = pods( 'post' );
                            $pods->fetch( get_the_ID() );
                            $images = $pods->raw( 'image_enseignant' );
                            $imagesComiques = $pods->raw( 'image_comique' );
                            $noms = $pods->raw( 'nom_enseignant' );
                            $descriptions = $pods->raw( 'description_enseignant' );
                            
                            echo '<div class="galerie-prof">';
                                echo '<div class="btns-bas">';
                                echo '<button onclick="Retour()" class="btn-retour">Retour</button>';
                                echo '<button onclick="BtnGauche()" class="btn-prochain">Prochain prof</button>';
                                echo '</div>';
                                echo '<div class="btns">';
                                echo '<button onclick="BtnDroit()" class="btn btn-droit btn-droit-profs"></button>';
                                echo '<button onclick="BtnGauche()" class="btn btn-gauche btn-droit-profs"></button>';
                                echo '</div>';
                                for ($x = 0; $x < count($noms); $x++) {
                                    echo '<div class="un-prof" id="' . $x . '">';
                                    echo '<img alt="' . $images[$x]['post_title'] . '" src="' . $images[$x]['guid'] . '"></img>';
                                    echo '<img alt="' . $imagesComiques[$x]['post_title'] . '" class="comique" src="' . $imagesComiques[$x]['guid'] . '"></img>';
                                    echo '<div class="nom-prof">' . $noms[$x] . '</div>';
                                    echo '<div class="desc-prof">' . $descriptions[$x] . '</div>';
                                    echo '</div>';
                                }
                            echo '</div>';
                            echo '<div class="container_icone_defile">';
                                echo '<h3 class="texte_defilement">Faire défiler</h3>';
                                echo '<div class="icone_defilement"></div>';
                            echo '</div>';
                        ?>
                        
                    <?php endif; ?>
                </div>
                
            </div>
        </div>
        </section>
        <?php endforeach; ?>
</main>
<?php get_footer() ?>