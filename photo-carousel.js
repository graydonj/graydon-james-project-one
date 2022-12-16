// Grab all the photos in the carousel
const carousel = document.querySelectorAll('.carousel-item');
console.log(carousel);

// Put the images side-by-side. We do this using translateX for each carousel image
carousel.forEach( function(imageItem, i) {
    const imageItemStyle = imageItem.style;
    imageItemStyle.transform = `translateX(${i * 100}%)`;
})

// Select the "right arrow" & "left arrow" buttons
const rightArrow = document.getElementById('right-arrow');
const leftArrow = document.getElementById('left-arrow');
// console.log(rightArrow);

// Set the current image
let currImage = 0;

// Listen for a click on the right arrow
rightArrow.addEventListener('click', function() {
    // increment the image
    currImage++;

    // slide the images. If we go off the edge we get our currImage reset
    currImage = slideImages(carousel, currImage);
});

// Listen for a click on the left arrow
leftArrow.addEventListener('click', function () {
    // decrement the image
    currImage--;

    // Slide the images...if we go off the "edge", we get our currImage reset
    currImage = slideImages(carousel, currImage);
});

function slideImages(carousel, currImage) {

    // if we go "off the edge" past the last image, reset to last image (bump and stop)
    if (currImage === carousel.length) {
        console.log(currImage);

        // bump the image, but because of how image bump works, we have to loop the whole bunch of images and for each image in the carousel...bump
        carousel.forEach(function (imageItem, i) {
            const imageItemStyle = imageItem.style;
            imageItemStyle.transform = `translateX(${(i - currImage) * 100}%)`;
            console.log(imageItemStyle.transform);
        });

        // then reset each image
        currImage = carousel.length - 1;
        console.log(currImage);
        setTimeout( () => {
            carousel.forEach(function (imageItem, i) {
                const imageItemStyle = imageItem.style;
                imageItemStyle.transform = `translateX(${(i - currImage) * 100}%)`;
                console.log(imageItemStyle.transform);
            });
        });
    } else if (currImage === -1) {

        // bump the image
        carousel.forEach(function (imageItem, i) {
            const imageItemStyle = imageItem.style;
            imageItemStyle.transform = `translateX(${(i - currImage) * 50}%)`;

            // then reset
            currImage = 0;
            setTimeout(() => {
                imageItemStyle.transform = `translateX(${(i - currImage) * 100}%)`;
            }, 100);
        });
    } else {

        // slide the image over
        carousel.forEach(function (imageItem, i) {
            const imageItemStyle = imageItem.style;
            imageItemStyle.transform = `translateX(${(i - currImage) * 100}%)`;
        });
    }

    return currImage;
}