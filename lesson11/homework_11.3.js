/*Homework3----------------------------------------------------------------------------------------------*/

const randomImages= ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];

function getRandomImage() {
    const random = Math.floor(Math.random() * randomImages.length);
    return randomImages[random];
}

const randomImg = document.querySelector('.random-image');
randomImg.src = `./lesson11/images/${getRandomImage()}`;

