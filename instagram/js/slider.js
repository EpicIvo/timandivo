sliderInt = 1;
sliderNext = 2;

$(document).ready(function() {

    $("#slider").find("img#1").fadeIn(1000);
    startSlider();

});

function startSlider() {

    count = $("#slider").find("img").size();

    loop = setInterval(function(){

        if(sliderNext > count){

            sliderNext = 1;
            sliderInt = 1;
        }

        $("#slider").find("img").fadeOut(1000);

        $("#slider").find("img#" + sliderNext).fadeIn(2000);

        sliderInt = sliderNext;
        sliderNext = sliderNext +1;

    }, 4000)

}
