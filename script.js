$(document).ready(function() {
    $('.flip-container .flipper').click(function() {
        $(this).closest('.flip-container').toggleClass('click');
        $(this).css('transform, rotateY(180deg)');
    });
});    

AOS.init({
    easing: 'ease',
    duration: 1800
});

var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
}
// set initial side
changeSide();

radioGroup.addEventListener( 'change', changeSide );
