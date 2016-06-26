$(function() {
  $(".tile-container").on('click', function(){
  	$(this).addClass('is_open')
  })
  $(".close").on('click', function(e){
  	e.stopPropagation();
  	$(this).parent().parent().removeClass('is_open')
  })
});