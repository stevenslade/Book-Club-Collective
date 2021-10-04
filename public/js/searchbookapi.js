function bookSearch() {
    var search = document.getElementById('search').value;

    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
        dataType: "json",
        success: function(data) {
                        
            //This deletes any existing data that has been anchored so a new search gets a clean anchor point
            while (apiSearchAnchor.firstChild) {
                apiSearchAnchor.removeChild(apiSearchAnchor.firstChild);
              }

            for(i=0; i <data.items.length; i++){

                //create variables from returned data
                let title = data.items[i].volumeInfo.title;
                //Truncates the title to the length specified
                title = title.substring(0, 35);   
                let author = data.items[i].volumeInfo.authors;
                let imgsrchttp = data.items[i].volumeInfo.imageLinks.smallThumbnail;
                let isbn13 = data.items[i].volumeInfo.industryIdentifiers[0].identifier;
                let rating = data.items[i].volumeInfo.averageRating;

                //The following block is build code not needed in production
                //var isbnAt0 = data.items[i].volumeInfo.industryIdentifiers[0].identifier;
                //var isbnAt1 = data.items[i].volumeInfo.industryIdentifiers[1].identifier;
                // console.log("title: ", title);
                // if (rating) {
                //     console.log("rating: ", rating);
                // };
                // console.log("isbnAt0: ", isbnAt0);
                // console.log("isbnAt1: ", isbnAt1);
                // console.log("isbn13: ", isbn13);
                // end of build code
                

                //create the elements
                var col = document.createElement("div");
                var card = document.createElement("div");
                var body = document.createElement("div");
                
                var cardTitleHeader = document.createElement("h2");
                var cardTitle = document.createElement("a");
                var bookimg = document.createElement("img");
                var bookauthor = document.createElement("p");
                //var starRating = document.createElement("h2");

                //This element is to display actual image of Stars for the review
                //The code uses the work of Fred Genkin on css-tricks.com, but has been altered
                var starsActual = document.createElement("div");

                //append to html - need to append before attaching a class
                col.append(card);
                card.append(body);
                body.append(cardTitleHeader, bookimg, bookauthor, starsActual);
                cardTitleHeader.append(cardTitle);

                //attach a class - set attribute
                col.setAttribute('class', "col-4 mt-3 border border-3");
                //titleButton.setAttribute('class', "btn btn-primary");
                bookauthor.setAttribute('class', "authorstyle");
                //starRating.setAttribute('class', "starStyle");

                starsActual.setAttribute('class', "Stars");
                starsActual.setAttribute('style', "--rating:" + rating);

                //use text content to to assign content to html elements
                cardTitle.setAttribute('href', "/review/" + isbn13);
                cardTitle.textContent = title;
                bookimg.setAttribute('src', imgsrchttp);
                bookimg.setAttribute('class', 'mt-3');
                bookauthor.textContent = author;
            
                if (rating) {
                    //starRating.textContent = rating + "/5";
                } else {
                    //starRating.textContent = "Be the First To Review";
                };


                //titleButton.textContent = title;

                //appened the new container to the document
                apiSearchAnchor.append(col);

                //add eventlistner for new button

                //HTML drop of returned data - not formatted
                // var imageHttp = data.items[i].volumeInfo.imageLinks.smallThumbnail;               
                // results.innerHTML += "<h2>" + "Title: " + data.items[i].volumeInfo.title + "<h2>"
                // results.innerHTML += "<h3>" + "Image path: " + data.items[i].volumeInfo.imageLinks.smallThumbnail + "<h3>"
                // results.innerHTML += "<img src=" + imageHttp + "width=\"300px\" height=\"300px\">";  //"width=\"200px\" height=\"200px\         
                // results.innerHTML += "<h3>" + "Author: " + data.items[i].volumeInfo.authors + "<h3>"
                // results.innerHTML += "<h3>" + "Description: " + data.items[i].volumeInfo.description + "<h3>"
                // results.innerHTML += "<h3>" + "Page Count: " + data.items[i].volumeInfo.pageCount + "<h3>"
                // results.innerHTML += "<h3>" + "Maturity Rating: " + data.items[i].volumeInfo.maturityRating + "<h3>"
                // results.innerHTML += "<h3>" + "ISBN: " + data.items[i].volumeInfo.industryIdentifiers[0].type + ": " + data.items[i].volumeInfo.industryIdentifiers[0].identifier + "<h3>"
                // results.innerHTML += "<h3>" + "ISBN: " + data.items[i].volumeInfo.industryIdentifiers[1].type + ": " + data.items[i].volumeInfo.industryIdentifiers[1].identifier  + "<h3>"
            }
        },
        type: 'GET'
    });
}

//set document getelement to a variable then use as truthy, this prevents the event listener from giving errors on pages in which it is not present
const isSearchButton = document.getElementById('bookSearchButton');

if (isSearchButton) {
document.getElementById('bookSearchButton').addEventListener('click', bookSearch, false)
};
