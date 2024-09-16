$('#github').click(function(){
    window.open('https://github.com/AndrewCrews3');
 })

 $('#linkedin').click(function(){
    window.open('https://www.linkedin.com/in/andrew-crews-23ba92210/');
 })

$('.aboutme').click(function() {
   $('html, body').animate({
       scrollTop: $(".aboutme-container").offset().top
   }, 1000);
});

$('.skill').click(function() {
   $('html, body').animate({
       scrollTop: $(".skills").offset().top - 120
   }, 1000);
});

$('.education').click(function() {
   $('html, body').animate({
       scrollTop: $(".skills-logo-container").offset().top
   }, 1000);
});

$('.connect').click(function() {
   $('html, body').animate({
       scrollTop: $(".skills-logo-container").offset().top
   }, 1000);
});