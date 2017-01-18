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

});
