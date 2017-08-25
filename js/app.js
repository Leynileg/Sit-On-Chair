$(function() {
    
    //----------- Menu navigation -----------
    
    let $otherNav = $('.list').find('li');
    let $navList = $('.list').find('li')[0];
    let $aboutList = $('.about_company');
    
    $($navList).mouseover(() => {
         $aboutList.show();
    });
    
    $($navList).mouseout(() => {
        $aboutList.hide();
    });
    
    //----------- Slider -----------
    
    let $leftBtn = $('.switch_left');
    let $rightBtn = $('.switch_right');
    let $slider_photos = $('.main_chair').find('li');
    console.log($slider_photos);
    let counter = 0;
    $($slider_photos[counter]).css('display', 'inline-block');
    
    $rightBtn.on('click', () => {
        counter++;
        $($slider_photos[counter-1]).fadeOut(0, function() {
            $($slider_photos[counter]).fadeIn(500);
            if (counter >= $slider_photos.length) {
                counter = 0;
                $($slider_photos[counter]).fadeIn(500);
            }
        });    
    })
    
    $leftBtn.on('click', () => {
        counter--;
        $($slider_photos[counter+1]).fadeOut(0, function(){
            $($slider_photos[counter]).fadeIn(500);
            
            if (counter < 0) {
                counter = $slider_photos.length - 1;
                $($slider_photos[counter]).fadeIn(500);
            }
        });
    })
    
    //----------- Gallery -----------
    
    let $photos = $('.gallery_section_photos');
    
    $photos.mouseover(function() {
        $(this).children().fadeOut(500, function(){
            $photos.mouseout(function() {
                $(this).children().fadeIn(500);
            })
        });
    });
    
});
