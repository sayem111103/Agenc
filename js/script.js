$(function(){
    $('.counts').counterUp({
        delay: 10,
        time: 1000
    });

    $('.review-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
         responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                infinite: true,
                centerMode: false,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                centerMode: false,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                centerMode: false,
              }
            },
         ]
      });
});

$( window ).on('scroll', function(){
  let scroll = $( this ).scrollTop()
  if( scroll > 200 ){
    $( '#btt' ).fadeIn(100)
  }

  else{
    $( '#btt' ).fadeOut(100)        
  }
})

$('.btt').on('click', function(){
  $('html,body').animate({scrollTop: 0},1000)
})

$( window ).on( "scroll", function(){
  let sticky = $( this ).scrollTop()

  if( sticky > 200 ){
    $( ".navbar" ).addClass( "navbar-sticky" )
  }

  else{
    $( ".navbar" ).removeClass( "navbar-sticky" )
  }
});