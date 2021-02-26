jQuery(document).ready(function($){
  const $grid = $('.product-grid').isotope({
    itemSelector: '.product',
    layoutMode: 'fitRows',
  });

  $('.filter-item').click(function(e) {
    e.preventDefault();
    $grid.isotope({ filter: $(this).attr('data-filter') });
  });

  $('.product').click(function(){
    $('.service').hide()
    $($(this).attr('data-target')).show(300);
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#massage-fitness").offset().top
    }, 500);
  });
  $('.close').click(function(){
    $(this).parents('.service').hide(300);
  });
  $('.next').click(function(){
    $('.service').hide();
    $(this).parents('.service').next().show();
  });
  $('.prev').click(function(){
    $('.service').hide();
    $(this).parents('.service').prev().show();
  });
  $(window).scroll(function(){
    let top = $(window).scrollTop();
    $('.parallax').css('transform', 'translate3d(0, -' + top / 4 + 'px, 0)')
  });
})