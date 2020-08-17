jQuery(document).ready(function(){ 
    jQuery("#gallery").unitegallery(); 
}); 





// const current = document.querySelector('#current');
// const imgs = document.querySelectorAll('.imgs img', '#caption');
// const opacity = 0.6;

//Set first image opacity
// imgs[0].style.opacity = opacity;

// imgs.forEach(img => img.addEventListener('click', imgClick)); 


//     function imgClick(e){
//         //Reset the opacity
//         imgs.forEach(img => img.style.opacity = 1)
//         //change current image to sc of clicked image
//         current.src = e.target.src;

//         //Add fade in class
//         current.classList.add('fade-in');

//         //remove fade-in class after .5 seconds

//         setTimeout(() => current.classList.remove('fade-in'),500);

//         //change the opacity to ovacity var
//         e.target.style.opacity = opacity;
//     }


    // function switchStyle() {
    //     if (document.getElementById('styleSwitch').checked) {
    //       document.getElementById('gallery').classList.add("custom");
    //       document.getElementById('exampleModal').classList.add("custom");
    //     } else {
    //       document.getElementById('gallery').classList.remove("custom");
    //       document.getElementById('exampleModal').classList.remove("custom");
    //     }
    //   }