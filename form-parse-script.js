const formElement = document.querySelector('form');

// listen for a click
formElement.addEventListener('submit', function (event) {
    // stop the default form submit behaviour
    event.preventDefault();

    // put the elements of our comment into some unvarying variables
    // console.log(formElement);
    const userName = formElement[0].value;
    const userEmail = formElement[1].value;
    const userSubject = formElement[2].value;
    const userComment = formElement[3].value;

    // make our comment object
    const newComment = document.createElement('div');
    newComment.classList.add('comment-wrapper');

    // it contains two divs: an image and some text...
    // this is the image (with div wrapper)
    const newImageDiv = document.createElement('div');
    newImageDiv.classList.add('comment-image');
    const newImage = document.createElement('img');
    newImage.src = 'https://picsum.photos/70';
    newImage.alt = userName;
    newImageDiv.appendChild(newImage);
    // console.log(newImageDiv);

    // this is the text (with div wrapper). Includes <h4>userName</h4>, <a>userEmail</a>, <p>userComment</p>, and <p>today's date</p>
    const newTextDiv = document.createElement('div');
    newTextDiv.classList.add('comment-text');
    const newTextName = document.createElement('h4');
    if (userSubject) {
        newTextName.textContent = `${userName} - ${userSubject} - `;
    } else {
        newTextName.textContent = `${userName} - `;
    }
    const newTextEmail = document.createElement('a');
    newTextEmail.href = `mailto:${userEmail}`;
    newTextEmail.textContent = 'Reply';
    // console.log(newTextEmail);
    const newTextComment = document.createElement('p');
    newTextComment.textContent = userComment;
    const newTextDate = document.createElement('p');
    newTextDate.classList.add('date');
    let userDate = new Date().toDateString();
    userDate = `${userDate.split(' ')[1]} ${userDate.split(' ')[2]}, ${userDate.split(' ')[3]} at ${Math.floor(Math.random() * 20)} hours ago`
    newTextDate.textContent = userDate;
    // console.log(newTextDate);

    // put all the parts into the text wrapper
    newTextDiv.appendChild(newTextName);
    newTextDiv.appendChild(newTextEmail);
    newTextDiv.appendChild(newTextComment);
    newTextDiv.appendChild(newTextDate);

    // finally, add the image div and text div to the comment wrapper
    newComment.appendChild(newImageDiv);
    newComment.appendChild(newTextDiv);

    // grab the comment <section> of the page
    const commentSection = document.querySelector('.comments');

    // find the number of comments, this is located in the header
    const commentSectionHeader = commentSection.querySelector('h3');

    // we know the header will be "## Comments" so we grab the first "word"
    let numComments = commentSectionHeader.textContent.split(' ')[0];

    // add 1 then make it a string and put it back in the header
    numComments++;
    if (numComments === 1) {
        headerString = `0${numComments.toString()} Comment`;
    } else if (numComments < 10) {
        headerString = `0${numComments.toString()} Comments`;
    } else {
        headerString = `${numComments.toString()} Comments`;
    }
    commentSectionHeader.textContent = headerString;

    // append the current comment at the end
    commentSection.appendChild(newComment);

    // to simulate the form updating, we force the focus to shift (reset?)
    const focusElement = document.querySelector('input');
    focusElement.focus();
});
