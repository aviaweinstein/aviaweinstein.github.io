$(document).ready(function(){

  var frame = 0;

  $('.move').on('mousedown touchstart', function(e) {
    if (e.touches) {
      if (e.touches.length > 1) {
        e.preventDefault();
      } else {
        $('.move').css('opacity', 0.5);
        //TODO: add text about needign at least 2 fingers to interact
      }
    } else {
      e.preventDefault();
    }
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

    if (e.touches && e.touches.length > 1) {
      $('.move').on('touchmove',function(e) {
        e.preventDefault();
        changeFrame(e, 5);
      });
    }

    $('.move').on('mouseend touchend', function(e) {
      if (e.touches) {
        if (e.touches.length > 1) {
          e.preventDefault();
        } else {
          $('.move').css('opacity', 1);
          //TODO: remove text about needign at least 2 fingers to interact
        }
      } else {
        e.preventDefault();
      }
      $('.move').unbind('mousemove touchmove');
    });
    //if (e.touches) {
    //  if (e.touches.length > 1) {
    //    $('.move').on('touchend', function(e) {
    //      e.preventDefault();
    //      $('.move').unbind('touchmove');
    //    });
    //  } else {
    //    $('.move').on('touchend', function(e) {
    //      $('.move').css('opacity', 1);
    //    });
    //  }
    //} else {
    //  $('.move').on('mouseend', function(e) {
    //      e.preventDefault();
    //      $('.move').unbind('mousemove');
    //    });
    //}
  });
  
});
