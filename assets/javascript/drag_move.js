$(document).ready(function(){
  var originalY = 0;
  var frame = 0;

  $('.move').on('mousedown', function(e) {
    e.preventDefault();
    originalY = e.pageY;
    var newY = null;
    var oldY = null;

    $('.move').mousemove(function(e) {
      e.preventDefault();
      oldY = newY;
      newY = e.pageY;
      if ((frame < 12) & (oldY < newY) & (newY%2 == 0)) {
        frame += 1;
      } else if ((frame > 0) & (oldY > newY) & (newY%2 == 0)) {
        frame -= 1;
      }
      $('.move').first().attr("src", "assets/images/tmp-"+frame+".gif");
    });

    $('.move').mouseup(function(e) {
      e.preventDefault();
      $('.move').unbind('mousemove');
    });
  });
  $('.move').on('touchstart', function(e) {
    e.preventDefault();
    originalY = e.originalEvent.touches[0].pageY;
    var newY = null;
    var oldY = null;

    $('.move').on('touchmove',function(e) {
      e.preventDefault();
      oldY = newY;
      newY = e.originalEvent.touches[0].pageY;
      if ((frame < 12) & (oldY < newY) & (newY%5 == 0)) {
        frame += 1;
      } else if ((frame > 0) & (oldY > newY) & (newY%5 == 0)) {
        frame -= 1;
      }
      $('.move').first().attr("src", "assets/images/tmp-"+frame+".gif");
    });

    $('.move').on('touchend',function(e) {
      e.preventDefault();
      $('.move').unbind('touchmove');
    });
  });

});
