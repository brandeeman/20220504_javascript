// 버튼 0누르면
// -모든버튼에 붙은 ornage 클래스명 제거
// -버튼 0에 orange 클래스명 추가
// -모든 div에 붙은 show 클래스명 제거
// -div0에 show 클래스명 추가 

$('.tab-button').eq(0).on('click', function(){
  // *태그에 클래스명 제거하는 법
  $('.tab-button').removeClass('orange');
  // *태그에 클래스명 추가하는 법
  $('.tab-button').eq(0).addClass('orange');

  $('.tab-content').removeClass('show');
  $('.tab-content').eq(0).addClass('show');
});

var 버튼 = $('.tab-button');

버튼.eq(1).on('click', function(){
  버튼.removeClass('orange');
  버튼.eq(1).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(1).addClass('show');
});

$('.tab-button').eq(2).on('click', function(){
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(2).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(2).addClass('show');
});