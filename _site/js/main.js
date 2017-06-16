$(document).ready(function() {
  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
  });

  // remove the focused state after click,
  // otherwise bootstrap will still highlight the link
  $("a").mouseup(function(){
      $(this).blur();
  })

  $('[data-toggle="tooltip"]').tooltip();

  // text animation
  $(function(){
      $(".skills").typed({
        strings: ["Vanilla JS", "React", "Redux", "Immutable.js", "AngularJS 1.x"],
        loop: 1,
        typeSpeed: 60,
      });
  });


  /**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
    var startY = $('.navbar').height();  //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}

});
