$(document).submit(function () {
    // prevent the default behavior of the submit

    // grab the show information from the form on the page
    var searchInformation  = $("#tvShow").val();


    // console.log the input

    console.log(searchInformation);
    // this is the api we are using add your search variable to end of the queryURL
    var queryURL = "http://api.tvmaze.com/search/shows?q=";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log the response
        console.log(response);
        // create a forloop and append the first 3 responses to the page
        for(var i=0; i<3; i++) {
            // console.log the image and then append it to the page.
            console.log(response[0].show.image.medium);

            // console.log the name of the show and append it to the page
            $(".shows").append("<img src=" + response[i].show.image.medium + ">");
            console.log(response[i].show.name)
            // console.log the genres of the show and append it to the page
            $(".shows").append("<div> <p>" + response[i].show.name + "</p></div>");

            console.log(response[i].show.genres);
            // console.log the summary of the show and append it to the page
            console.log(response[i].show.summary);
        }

    });

})
