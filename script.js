// JavaScript Document
$(function(){
//start
    
　setTimeout(function(){
       

          // 繰り返し処理
        $('.topVisual').animate({ opacity: 1}, { duration: 1000, easing: 'swing'});
                 
     
},400);    
    
  $(window).on('load scroll', function(){

    if ($(window).scrollTop() > 500) {
      $('footer').fadeIn(400);       
    } else if($(window).scrollTop() < 500){
      $('footer').fadeOut(400);  
    }
  });
    
//scroll  

    $(window).on('load scroll',function(){
       
        if ($(window).scrollTop() > 1300) {

          // 繰り返し処理
          $('.card-fadeInBox li').each(function(i) {
          // 遅延させてフェードイン
          $(this).delay(300 * i).animate({ opacity: 1}, { duration: 1000, easing: 'swing'});
          });
        
        }
    });
 
        $(window).on('load scroll',function(){
       
        if ($(window).scrollTop() > 2600) {
          // 繰り返し処理
          $('.card-fadeInBox2 li').each(function(i) {
          // 遅延させてフェードイン
          $(this).delay(300 * i).animate({ opacity: 1}, { duration: 1000, easing: 'swing'});
          });
        
        }
    });
    
    
    $('.menu-btn').click(function(){
        winnScrollTop = $(window).scrollTop();
           var target = $(this).data('target');
           var modal = document.getElementById(target);
        $('.modal-right').addClass('active');
        $('.menu-btn').css('display','none');
        $('.batu-btn').css('display','block');
        $(this).toggleClass("close");
        return false;
    });
    
    $('.batu-btn').click(function(){
        winnScrollTop = $(window).scrollTop();
           var target = $(this).data('target');
           var modal = document.getElementById(target);
        $('.modal-right').removeClass('active');
        $('.batu-btn').css('display','none');
        $('.menu-btn').css('display','block');
        return false;
    });    

    
});