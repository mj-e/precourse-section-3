// $(document).ready(function(){
//     $('#header').mouseenter(function () {
//       $('.boxes').fadeTo('fast', 0.3);
//       $('#nav').fadeTo('fast', 0.3);
//     });
//     $('#header').mouseleave(function () {
//         $('.boxes').fadeTo('fast', 1);
//         $('#nav').fadeTo('fast', 1);
//     });

//    $('#nav').mouseenter(function () {
//       $('.boxes').fadeTo('fast', 0.3);
//       $('#header').fadeTo('fast', 0.3);

//     });
//     $('#nav').mouseleave(function () {
//         $('.boxes').fadeTo('fast', 1);
//         $('#header').fadeTo('fast', 1);
//     });

//     $('.boxes').mouseenter(function () {
//         $('#header').fadeTo('fast', 0.3);
//         $('#nav').fadeTo('fast', 0.3);
//     });
//     $('.boxes').mouseleave(function () {
//         $('#header').fadeTo('fast', 1);
//         $('#nav').fadeTo('fast', 1);
//     });
// });


$(document).ready(function(){

  $('#header' ).hover(
    function(){
    $(this).fadeTo('fast', 1);
    },
    function(){
    $(this).fadeTo('fast', 0.85);    
    });
  $('.boxes').hover(
    function(){
    $(this).fadeTo('fast', 1);
    },
    function(){
    $(this).fadeTo('fast', 0.85);    
    });

});

