$(function() {
  $(".tile-container").on('click', function(){
  	$('.is_open').removeClass('is_open');
  	$(this).addClass('is_open')
  })
  $(".close").on('click', function(e){
  	e.stopPropagation();
  	$(this).parent().parent().removeClass('is_open')
  })
});