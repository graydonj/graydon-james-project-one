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

    // Slide all the images. We do this by translating X by -100% for each
    carousel.forEach(function (imageItem, i) {
        const imageItemStyle = imageItem.style;
        imageItemStyle.transform = `translateX(${(i - currImage) * 100}%)`;
    })
});

// Listen for a click on the left arrow
leftArrow.addEventListener('click', function () {
    // decrement the image
    currImage--;

    // Slide all the images. We do this by translating X by 100% for each
    carousel.forEach(function (imageItem, i) {
        const imageItemStyle = imageItem.style;
        imageItemStyle.transform = `translateX(${(i - currImage) * 100}%)`;
    })
});