$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        console.log('dddd');
      $('.top-navbar').toggleClass('collapse');
      $('.phone').toggleClass('d-none');
      $('.list-unstyled').toggleClass('d-flex');
      $('.get-a-quote').toggleClass('d-none');
      $('.quote').toggleClass('d-block');
      $('.quote').toggleClass('d-none');

    });
});

