// for문 쓰는 법
// 복붙 하는 문법

// for(var i = 0; i<5;i++){
//   console.log(i);
// }

// .tab-button 이 세번 복붙이 됨
// for(let i = 0; i < 3; i++){
//   $('.tab-button').eq(i).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(i).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(i).addClass('show');
//   });  
// }

// 확장성 코드 : length 
for(let i = 0; i < $('.tab-button').length; i++){
  $('.tab-button').eq(i).on('click', function(){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(i).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(i).addClass('show');
  });  
}

