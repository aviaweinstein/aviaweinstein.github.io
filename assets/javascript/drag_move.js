$(document).ready(function(){

  var frame = 0;

  $('.move').on('mousedown touchstart', function(e) {
    e.preventDefault();
    var newY = null;
    var oldY = null;

    function changeFrame(event, frameSpeed) {
      oldY = newY;
      newY = event.pageY || event.originalEvent.touches[0].pageY;
      if ((frame < 12) & (oldY < newY) & (Math.ceil(newY)%frameSpeed == 0)) {
        frame += 1;
      } else if ((frame > 0) & (oldY > newY) & (Math.ceil(newY)%frameSpeed == 0)) {
        frame -= 1;
      }
      $('.move').first().attr("src", "assets/images/tmp-"+frame+".gif");
    }

    $('.move').on('mousemove', function(e) {
      e.preventDefault();
      changeFrame(e, 2);
    });

    $('.move').on('touchmove',function(e) {
      e.preventDefault();
      changeFrame(e, 5);
    });

    $('.move').on('mouseup touchend', function(e) {
      e.preventDefault();
      $('.move').unbind('mousemove touchmove');
    });
  });
  
});
