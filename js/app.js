document.addEventListener("DOMContentLoaded", function(){
    
    // MENU 
    var list = document.querySelector(".list");
    var listElements = list.children;
    
    for (var i = 0; i < listElements.length; i++) {
      listElements[i].addEventListener('mouseout', function() {
            this.firstElementChild.style.display = 'none';
      });
    }
    
    for (var i = 0; i < listElements.length; i++) {
      listElements[i].addEventListener('mouseover', function() {
          this.firstElementChild.style.display = 'block';
     });
   }
    
    
    
    // PHOTOS
    
    var photos = document.querySelectorAll(".second_section_photos") 
    
    for (var i = 0; i < photos.length; i++) {
        photos[i].addEventListener("mouseover",function() {
            var photoElement = this.children;
            this.firstElementChild.style.display = 'none';
        })
    }
   
    for (var i = 0; i < photos.length; i++) {
        photos[i].addEventListener("mouseout",function() {
            var photoElement = this.children;
            this.firstElementChild.style.display = 'block';
        })
    } 
    
    // SLIDER 
    
   var next = document.querySelector(".switch_right");
   var prev = document.querySelector(".switch_left");
   var list = document.querySelectorAll(".main_chair>ul>li");
   var counter = 0;
   list[0].classList.add("visible");

   next.addEventListener('click', function() {
       list[counter].style.display = 'none';
       counter++;
       if (counter >= list.length) counter = 0;
       list[counter].style.display = 'inline-block';
   });
 
    prev.addEventListener('click', function() {
        list[counter].style.display = 'none';
        counter--;
        if (counter < 0) counter = list.length - 1;
        list[counter].style.display = 'inline-block';
    });
    
});
