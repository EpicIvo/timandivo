window.addEventListener('load', init);

function init() {
    ajaxRequest();
}

function ajaxRequest() {
    var data = {};
    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost/timandivo/instagram/includes/settings.php', true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            console.log("succes");
            data = JSON.parse(request.responseText);
            // Link to function
            showImage(data)
        } else {
            console.log("We reached our target server, but it returned an error")
        }
    };
    request.onerror = function () {
        console.log("There was a connection error of some sort");
    };
    request.send();
}

function showImage(data) {

    for (var i = 0; i < data.data.length; i++) {

        var image = document.createElement("img");
        image.setAttribute("src", data.data[i].images.standard_resolution.url);
        image.setAttribute("alt", "slider");
        image.setAttribute("id", i + 1);
        document.getElementById("slider").appendChild(image);

    }

    var slider = document.createElement("script");
    slider.setAttribute("src", "js/slider.js");
    document.getElementById("scripts").appendChild(slider);

}
