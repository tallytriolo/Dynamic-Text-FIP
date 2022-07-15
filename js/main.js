(() => {
  //variables / DOM connections go here
let sigils = document.querySelectorAll('.sigilContainer'),
    houseVid = document.querySelector('video'),
    lightBox = document.querySelector ('.lightbox'),
    closeBut = lightBox.querySelector('.close'),


    // variables to change the content when clicked on the shield
    houseName = document.querySelector('.house-name'),
    houseInfo = document.querySelector('.house-desc'),

    bannerImages = document.querySelector(`#houseImages`);

const houseData = [
    //`stark.jpg`, //index 0 // add data-offset ="0" in theimagem into html
    [`stark`, `stark house info`], //index 0 => houseData[0][0], houseData[0][1]
    [`baratheon`, `baratheon house info`], //index 1
    [`lannister`, `lannister house info`], //index 2
    [`tully`, `tully house info`], //index 3
    [`greyjoy`, `greyjoy house info`], //index 4
    [`arryn`, `arryn house info`] //index 5
];

function showHouseData() {
    let currentHouse = this.dataset.offset;
    //debugger;
    // show the right house info on a sigil click
    //this refers to the shield you clicked on
    //dataset.offset is the dataa-offset property defined on thaat html tag

    //`House ${} this is for add the word "House" before the anothers words
    houseName.textContent = `House ${houseData[this.dataset.offset][0]}`; 
    houseInfo.textContent = houseData[this.dataset.offset][1];
    //houseName.src = 'images/houseData [0]; for image

    let animationTotal = 600 * this.dataset.offset;

    //each banner is 600px wide, so multiply that by a numerator

    bannerImages.style.right = `${animationTotal}px`;
        //actually change the CSS an animate the banner

    console.log('move the banner images', animationTotal);

}

//this function is for show the lightbox
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
    //sigils.forEach(sigil => sigil.addEventListener('click', openLightbox));

    sigils.forEach(sigil => sigil.addEventListener('click', showHouseData));
    
    houseVid.addEventListener('ended', closeLightbox);
    closeBut.addEventListener('click', closeLightbox);

})();
