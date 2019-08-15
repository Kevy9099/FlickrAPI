$(document).ready(function () {
    $("button").click(function () { //construct a button with a click event.
        $("div").empty();// empty the div of its elements.
        var searchTerm = $("input:text").val(); //users input text.
        var flickrApi = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"; //the link to the images the application grabs.
        $.getJSON(flickrApi, { //properties of the flickrAPI.
            tags: searchTerm,
            tagmode: "any",
            format: "json",
        })
        
            .done(function (data) {
                $.each(data.items, function (i, item) {
                    var anchor = $("<a>").attr("href", data.items[i].link); //anchor variable --> starts with an anchor tag and calls a link. 
                    anchor.appendTo("#images");//anchor is then appended to images.
                    $("<img>").attr("src", item.media.m).appendTo(anchor);//and src/images are appended to the anchor.
                    for (var i = 0; i < data.items.length; i++) {
                        console.log(data.items[i]); //loop on amount of images are being pulled.
                    }
                });
            });
    })

    //press ENTER after typing text.
    var input = document.getElementById("search"); 

    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("button").click();
        }
    });
})
