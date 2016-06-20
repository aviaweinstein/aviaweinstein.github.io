$(document).ready(function(){
  var originalYup = 0;
  var frameup = 12;

  $('.close').on('mousedown', function(e) {
    e.preventDefault();
    originalYup = e.pageY;
    var newYup = null;

    $('.close').mousemove(function(e) {
      e.preventDefault();
      newYup = e.pageY;
      if ((frameup < 23) & (newYup%2 == 0)) {
        frameup += 1;
      }
      $('.close').first().attr("src", "assets/images/tmp-"+frameup+".gif");
    });

    $('.close').mouseup(function(e) {
      e.preventDefault();
      $('.close').unbind('mousemove');
    });
  });
  $('.close').on('touchstart', function(e) {
    e.preventDefault();
    originalYup = e.originalEvent.touches[0].pageY;
    var newYup = null;

    $('.close').on('touchmove',function(e) {
      e.preventDefault();
      newYup = e.originalEvent.touches[0].pageY;
      if ((frameup < 23) & (newYup%5 == 0)) {
        frameup += 1;
      }
      $('.close').first().attr("src", "assets/images/tmp-"+frameup+".gif");
    });

    $('.close').on('touchend',function(e) {
      e.preventDefault();
      $('.close').unbind('touchmove');
    });
  });

});
