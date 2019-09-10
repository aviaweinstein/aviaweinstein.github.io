function interactiveImage(pathToImage = 'assets/images/', fileName = 'image.jpg', totalFrames = 12, targetedImage = '#move') {
  var frame = 0;

  $(targetedImage).on('mousedown touchstart', function(e) {
    e.preventDefault();
    var newY = null;
    var oldY = null;

    function changeFrame(event, frameSpeed) {
      oldY = newY;
      newY = event.pageY || event.originalEvent.touches[0].pageY;
      if ((frame < totalFrames) & (oldY < newY) & (Math.ceil(newY)%frameSpeed == 0)) {
        frame += 1;
      } else if ((frame > 0) & (oldY > newY) & (Math.ceil(newY)%frameSpeed == 0)) {
        frame -= 1;
      }
      $(targetedImage).first().attr('src', pathToImage + frame + '-' + fileName);
    }

    $(targetedImage).on('mousemove', function(e) {
      e.preventDefault();
      changeFrame(e, 2);
    });

    $(targetedImage).on('touchmove',function(e) {
      e.preventDefault();
      changeFrame(e, 5);
    });

    $(targetedImage).on('mouseup touchend', function(e) {
      e.preventDefault();
      $(targetedImage).unbind('mousemove touchmove');
    });
  });
}
