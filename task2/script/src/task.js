'use strict';
$(function(){
  let html = $('#test-version').html();
  let test = {
      title : "Тест по программированию",
      questions : ['Вопрос №1','Вопрос №2', 'Вопрос №3'],
      answers : ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
      key : [1, 0 ,2]
  };

  localStorage.setItem('control', JSON.stringify(test));
  let data = localStorage.getItem('control');
  let dataObject = JSON.parse(data);
  let content = tmpl(html, dataObject);
  $('body').append(content);
});



function stopTest(){   
  let data = localStorage.getItem('control');
  let dataObject = JSON.parse(data);
  let rez = 0;
  for( let i=0; i < $("input[name$='listRadio1']").length; i++) {
    if($("input[name$='listRadio1']")[i].checked) {
      if(i==dataObject.key[0]){
        rez+=1;
      }      
    }
  }

  for( let i=0; i < $("input[name$='listRadio2']").length; i++) {
    if( $("input[name$='listRadio2']")[i].checked) {
      if(i==dataObject.key[1]){
        rez+=1;
      }
    }
  }

  for( let i=0; i< $("input[name$='listRadio3']").length; i++){
    if( $("input[name$='listRadio3']")[i].checked) {
      if(i==dataObject.key[2]){ 
        rez+=1;
      }      
    }
  }

  if (rez == 3) {
    $(".message").html("<p class='rezult'>Ваш результат - <span class='rezult-value'>" + rez + "</span>.</p><p>Вітаю, ви успішно пройшли цей тест.</p>");
  } else {
    $(".message").html("<p class='rezult'>Ваш результат - <span class='rezult-value'>" + rez + "</span>.</p><p>На жаль, цього недостатньо. Спробуйте ще раз.</p>");
  }



  $('.overlay').fadeIn(400, function(){ 
    $('.modal-form') .css('display', 'block') .animate({opacity: 1, top: '50%'}, 200); 
  });

  $('.modal-close, .overlay').click( function() { 
    $("input:radio:checked").prop('checked', false);
    $('.modal-form').animate({opacity: 0, top: '65%'}, 200,  function() { 
      $(this).css('display', 'none'); 
      $('.overlay').fadeOut(400); 
    });   
  });
}

