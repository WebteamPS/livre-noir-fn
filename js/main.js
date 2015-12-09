// FUNCTION SCROLL
$('a[href^="#"]').click(function(){
  var the_id = $(this).attr("href");

  $('html, body').animate({
    scrollTop:$(the_id).offset().top
  }, 'slow');
  return false;
});
//bouton to top
$(document).ready( function () {
  // Add return on top button
  $('body').append('<div id="go_top" title="Retour en haut"><i class="glyphicon glyphicon-chevron-up"></i></div>');
  
  // On button click, let's scroll up to top
  $('#go_top').click( function() {
      $('html,body').animate({scrollTop: 0}, 'slow');
  });
});

$(window).scroll(function() {
    // If on top fade the bouton out, else fade it in
    if ( $(window).scrollTop() == 0 )
        $('#go_top').fadeOut();
    else
        $('#go_top').fadeIn();
});
//progress bar reading
var winHeight = $(window).height(), 
  docHeight = $(document).height(),
  progressBar = $('progress'),
  max, value;
/* Set the max scrollable area */
max = docHeight - winHeight;
progressBar.attr('max', max);

$(document).on('scroll', function(){
   value = $(window).scrollTop();
   progressBar.attr('value', value);
});