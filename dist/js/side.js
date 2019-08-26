$('.menuswitch').click(function(){
   $('.menuswitch').toggleClass('hidden');
});
$('.apps2').click(function(){
  $('.menuswitch').toggleClass('hidden');
});
function domino(selector,add,dur){
  selector = $(String(selector));
  selector.each(function(){
    var index = $(this).index();
    var that = $(this);
    dur = dur || 100;
    index = index*dur;
    setTimeout(function(){
      if (add == 'add'){
        that.addClass('shown');
      } else {
        that.removeClass('shown');
      }
    },index);
  });
}
$('.apps2').click(function(){
  domino('nav ul li','add');
});
$('.menuswitch').click(function(){
  domino('nav ul li','remove');
});


// $(document).ready(function () {
//
//     $("#toggle").on('click', function () {
//         $("#page").toggleClass('open_drawer');
//         });
//
//     });
