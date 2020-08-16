$(document).ready(function() {

    console.log("connected")

/* When your mouse cursor enter the background, the fading won't pause and keep playing */ 
  $('.carousel').carousel({
        pause: "false" /* Change to true to make it paused when your mouse cursor enter the background */
        
    });

    $(function() {
        var selectedClass = "";
        $(".filter").click(function(){
        selectedClass = $(this).attr("data-rel");
        $("#gallery").fadeTo(100, 0.1);
        $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
        setTimeout(function() {
        $("."+selectedClass).fadeIn().addClass('animation');
        $("#gallery").fadeTo(300, 1);
        }, 300);
        });
        });

});