function bookDataForReview() {

    //Need to get the isbn number
    const isbnNumber = document.getElementById("isbnNum");

    const isbn13 = isbnNumber.dataset.isbn13;

    //console.log("isbn13: ", isbn13);

    //Set search term to isbn13
    var search = isbn13;

    //Get all my elements byID should be Title, Author, image, description
    const titleEl = document.getElementById('booktitle');
    const authorEl = document.getElementById('author');
    const descriptionEl = document.getElementById('description');
    const imgsourceEl = document.getElementById('imgsource');

    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
        dataType: "json",
        success: function(data) {
            //console.log(data);

            const title = data.items[0].volumeInfo.title;
            const author = data.items[0].volumeInfo.authors;
            const imgsrc = data.items[0].volumeInfo.imageLinks.smallThumbnail;
            // This is a larger image
            // data.items[0].volumeInfo.imageLinks.thumbnail;
            const description = data.items[0].volumeInfo.description;

            //Set elements equal to variables
            titleEl.textContent = title;
            authorEl.textContent = author;
            descriptionEl.textContent = description;
            imgsourceEl.setAttribute('src', imgsrc);

        },
        type: 'GET'
    });
}


//need to call the function on page load
document.onload = init();

function init(){
    bookDataForReview();
}