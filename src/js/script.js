/* $(document).ready(function(){
  $('.carousel__inner').slick({
    speed: 1200,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../src/icons/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../src/icons/right.svg"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });
}); */
var slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controlsText: [
    '<img src="../src/icons/left.svg">',
    '<img src="../src/icons/right.svg">'

  ]
});