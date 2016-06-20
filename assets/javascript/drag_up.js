$(document).ready(function(){
  var originalY = 0;
  var frame = 0;

  $('.open').on('mousedown', function(e) {
    e.preventDefault();
    originalY = e.pageY;
    var newY = null;

    $('.open').mousemove(function(e) {
      e.preventDefault();
      newY = e.pageY;
      if ((frame < 12) & (newY%2 == 0)) {
        frame += 1;
      }
      $('.open').first().attr("src", "assets/images/tmp-"+frame+".gif");
    });

    $('.open').mouseup(function(e) {
      e.preventDefault();
      $('.open').unbind('mousemove');
    });
  });
  $('.open').on('touchstart', function(e) {
    e.preventDefault();
    originalY = e.originalEvent.touches[0].pageY;
    var newY = null;

    $('.open').on('touchmove',function(e) {
      e.preventDefault();
      newY = e.originalEvent.touches[0].pageY;
      if ((frame < 12) & (newY%5 == 0)) {
        frame += 1;
      }
      $('.open').first().attr("src", "assets/images/tmp-"+frame+".gif");
    });

    $('.open').on('touchend',function(e) {
      e.preventDefault();
      $('.open').unbind('touchmove');
    });
  });

});
