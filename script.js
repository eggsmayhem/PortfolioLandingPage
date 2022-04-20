// $(document).ready(function(){
//     $('.carousel').slick({
//     slidesToShow: 3,
//     dots:true,
//     centerMode: true,
//     });
// });

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

$('#about-link').click(function() {
  $("#mainListDiv").toggleClass("show_list");
  $('.navTrigger').toggleClass('active');
});

$('#portfolio-link').click(function() {
  $("#mainListDiv").toggleClass("show_list");
  $('.navTrigger').toggleClass('active');
});

$('#services-link').click(function() {
  $("#mainListDiv").toggleClass("show_list");
  $('.navTrigger').toggleClass('active');
});

$('#contact-link').click(function() {
  $("#mainListDiv").toggleClass("show_list");
  $('.navTrigger').toggleClass('active');
});

// Function used to shrink nav bar removing paddings and adding black background 
    
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});

// jquery to make the owl carousel work 

jQuery("#carousel").owlCarousel({
    autoplay: true,
    rewind: true, /* use rewind if you don't want loop */
    margin: 20,
     /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 3
      },
  
      1024: {
        items: 4
      },
  
      1366: {
        items: 4
      }
    }
  });

  document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });

smoothScroll.init();