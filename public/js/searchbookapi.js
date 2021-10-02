function bookSearch() {
    var search = document.getElementById('search').value;

    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
        dataType: "json",
        success: function(data) {
            console.log(data);
            //This deletes any existing data that has been anchored so a new search gets a clean anchor point
            while (apiSearchAnchor.firstChild) {
                apiSearchAnchor.removeChild(apiSearchAnchor.firstChild);
              }

            for(i=0; i <data.items.length; i++){

                //create variables from returned data
                let title = data.items[i].volumeInfo.title;     
                let author = data.items[i].volumeInfo.authors;
                let imgsrchttp = data.items[i].volumeInfo.imageLinks.smallThumbnail;
                var isbn13 = 0;
                var isbntype0 = data.items[i].volumeInfo.industryIdentifiers[0].type;

                //because sometimes they switch position
                if (isbntype0 === 'ISBN_13') {
                    isbn13 = data.items[i].volumeInfo.industryIdentifiers[0].identifier;
                } else {
                    isbn13 = data.items[i].volumeInfo.industryIdentifiers[1].identifier;
                }
                
                console.log("isbn13: ", isbn13);

                //create the elements
                var col = document.createElement("div");
                var card = document.createElement("div");
                var body = document.createElement("div");
                //var titleButton = document.createElement("button");
                var cardTitle = document.createElement("a");
                var bookimg = document.createElement("img");
                var bookauthor = document.createElement("p");

                //append to html - need to append before attaching a class
                col.append(card);
                card.append(body);
                body.append(cardTitle, bookimg, bookauthor);

                //attach a class - set attribute
                col.setAttribute('class', "col-4 border border-3");
                //titleButton.setAttribute('class', "btn btn-primary");

                //use text content to to assign content to html elements
                cardTitle.setAttribute('href', "/review/" + isbn13);
                cardTitle.textContent = title;
                bookimg.setAttribute('src', imgsrchttp);
                bookauthor.textContent = author;
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

//set document getelement to a variable then use as truthy

document.getElementById('bookSearchButton').addEventListener('click', bookSearch, false)

