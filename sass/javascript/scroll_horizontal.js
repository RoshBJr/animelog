function ScrollDesktop()
{
      const scrollContainer = document.querySelector("html");
      let peutScroll = true;
      let descCours = document.querySelectorAll('.titre_cours');
      let boutonsRetour = document.querySelectorAll('.btns-bas .btn-retour');
      const timBarreLateral = document.querySelector('.titre_burger_menu');
      const faireDefile = document.querySelector('.container_icone_defile');
      let lienSection = document.querySelectorAll('a');
      let titreTimAffiche = false;

      descCours.forEach((uneDescCours) => {
        uneDescCours.addEventListener('click', () => {
          NepeutScroll();
        })
      })
      boutonsRetour.forEach((unBouton) => {
        unBouton.addEventListener('click', () => {
          PeutScroll();
        })
      })

      lienSection.forEach((unlien) => {
          unlien.addEventListener('click', AfficherTim);
      })

      let ScrollListener = function() {
        let y = window.scrollX;
        if (y >= window.innerWidth/4 && window.innerWidth >= 993) {
          AfficherTim();
        } else if(y <= 50 && titreTimAffiche) {
          CacherTim();
        }
        if(y > 0)
        {
          CacherDefiler();
        }
        else
        {
          AfficherDefiler();
        }
      };
      window.addEventListener("scroll", ScrollListener);
      function AfficherTim()
      {
        timBarreLateral.style.animation = 'slideTim 1s forwards';
        titreTimAffiche = true;
      }
      function CacherTim()
      {
        timBarreLateral.style.animation = 'slideoutTim 500ms forwards';
        titreTimAffiche = false;
      }
      function CacherDefiler()
      {
        faireDefile.style.animation = 'fadeOut 500ms forwards';
      }
      function AfficherDefiler()
      {
        faireDefile.style.animation = 'fadeIn 500ms forwards';
      }
      function NepeutScroll()
      {
        peutScroll = false;
      }
      function PeutScroll()
      {
        peutScroll = true;
      }
      scrollContainer.addEventListener("wheel", (evt) => {
        if(window.innerWidth >= 993 && peutScroll)
        {
          scrollContainer.style.scrollBehavior = 'auto';
          scrollContainer.scrollBy({
          left: evt.deltaY < 0 ? -100 : 100,
          });
        }
        scrollContainer.style.scrollBehavior = 'smooth';
    });
}