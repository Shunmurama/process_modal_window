// <!--動作内容を記述-->
window.addEventListener('DOMContentLoaded', function() {
  // <div class="modal-start">をクリックすると起動
  $('.modal-start').on('click',function(){
    $('.modal,.mask').fadeIn();
  });
  // <i class="fa-sharp fa-solid fa-xmark modal-close"></i>をクリックすると消える
  $('.modal-close,.mask').on('click',function(){
    $('.modal,.mask').fadeOut();
  });
})