// Grab all the photos in the carousel
const carousel = document.querySelectorAll('.carousel-item');
// console.log(carousel);

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

        // grab the current image (and it's style object)
        let imageElement = carousel.item(currImage - 1);
        let imageElementStyle = imageElement.style;

        // bump the image a bit to indicate we've hit the end
        imageElementStyle.transform = `translateX(-50%)`;

        // then reset
        setTimeout( () => {
            imageElementStyle.transform = `translateX(0%)`;
        }, 100);

        // and reset the currImage
        currImage = carousel.length - 1;

    } else if (currImage === -1) {

        // reset the currImage (there is no index of -1)
        currImage = 0;

        // grab the current image (and it's style object)
        let imageElement = carousel.item(currImage);
        let imageElementStyle = imageElement.style;

        // bump the image a bit to indicate we've hit the end
        imageElementStyle.transform = `translateX(50%)`;

        // then reset
        setTimeout(() => {
            imageElementStyle.transform = `translateX(0%)`;
        }, 100);
    } else {

        // slide the image over
        carousel.forEach(function (imageItem, i) {
            const imageItemStyle = imageItem.style;
            imageItemStyle.transform = `translateX(${(i - currImage) * 100}%)`;
        });
    }

    return currImage;
}