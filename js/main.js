
$(document).ready(function() {

var host = "YOURDOMAIN.org";
if ((host == window.location.host) && (window.location.protocol != 'https:')) {
  window.location = window.location.toString().replace(/^http:/, "https:");
}

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

});
