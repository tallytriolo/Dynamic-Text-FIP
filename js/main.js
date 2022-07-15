(() => {
  //variables / DOM connections go here
  let
    sigils = document.querySelectorAll('.sigilContainer'),
    houseVid = document.querySelector('video'),
    lightBox = document.querySelector ('.lightbox'),
    closeBut = lightBox.querySelector('.close');

    function openLightbox() {
    lightBox.classList.add('show-lightbox');
    houseVid.currentTime = 0;
    houseVid.play();
}

function closeLightbox() {
    lightBox.classList.remove('show-lightbox');
    houseVid.currentTime = 0;
    houseVid.pause();
}

    //event handling here (how is the user going to interact with)
    sigils.forEach(sigil => sigil.addEventListener('click', openLightbox));
    
    houseVid.addEventListener('ended', closeLightbox);
    closeBut.addEventListener('click', closeLightbox);

})();
