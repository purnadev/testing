let ttl = gsap.timeline();
ttl.from('#road',{
  opacity:0,
     y: 25,
    duration:2
}).from('#house',{
  opacity:0,
     y: 25,
    duration:2
}).from('#branch1',{
  opacity:0,
     x: 25,
    duration:2
}).from('#branch2',{
  opacity:0,
     x: -25,
    duration:2
}).from('#month',{
    opacity:0,
     onStart: function () {
        $('#month').textillate({
            in: {
                effect: 'fadeInLeft' 
            }
            
        });
    },
    duration:1

}).from('#date_d',{
    opacity:0,
     onStart: function () {
        $('#date_d').textillate({
            in: {
                effect: 'fadeInLeft' 
            }
            
        });
    },
    duration:1

}).from('#gcect_text',{
    opacity:0,
    x:-20,
    duration:1
}).from('#gcect_ev',{
    opacity:0,
    
    x:-20,
    duration:1

    
}).from('#btn_play',{
  opacity:0,
  y:20,
  duration:2
})



gsap.from('#bat',{
opacity:0,
duration:2.5,
repeat:-1

})


var swiper = new Swiper('.blog-slider', {
    autoplay: {
    delay: 5000,
  }, 
     spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
       //autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });

