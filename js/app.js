$(function() {
    
    //----------- Slider -----------

    $('.slide:gt(0)').hide();
    
    setInterval(function() {
      $('.slide:first').fadeOut('slow').next().fadeIn('slow').end().appendTo('.main_chair');
    }, 5000)
    
});
