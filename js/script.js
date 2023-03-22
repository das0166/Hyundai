$(document).ready(function () {
  // $('.show').click(function () {
  //   $('.card_none').toggleClass('active');
  // });
  $(window).resize(function(){ 
    if (window.innerWidth < 1030.9) {
    $(".sw_show1").click(function(){
      $('.none_1').toggleClass("active");
      $('.sw_show1 .card_show').toggleClass("dark");
    });
    $(".sw_show2").click(function(){
      $('.none_2').toggleClass("active");
      $('.sw_show2 .card_show').toggleClass("dark");
    });
    $(".sw_show3").click(function(){
      $('.none_3').toggleClass("active");
      $('.sw_show3 .card_show').toggleClass("dark");
    });
    $(".sw_show4").click(function(){
      $('.none_4').toggleClass("active");
      $('.sw_show4 .card_show').toggleClass("dark");
    });
    $(".sw_show5").click(function(){
      $('.none_5').toggleClass("active");
      $('.sw_show5 .card_show').toggleClass("dark");
    });
    $(".sw_show6").click(function(){
      $('.none_6').toggleClass("active");
      $('.sw_show6 .card_show').toggleClass("dark");
    });
    $(".sw_show7").click(function(){
      $('.none_7').toggleClass("active");
      $('.sw_show7 .card_show').toggleClass("dark");
    });
    $(".sw_show8").click(function(){
      $('.none_8').toggleClass("active");
      $('.sw_show8 .card_show').toggleClass("dark");
    });
    $(".sw_show9").click(function(){
      $('.none_9').toggleClass("active");
      $('.sw_show9 .card_show').toggleClass("dark");
    });
  }
  }).resize(); 
});

window.onload = function () {
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);
}

window.addEventListener('scroll', function () {
  console.log(window.scrollY)
  if (window.scrollY >= scroll2 && window.scrollY <= downto) {
    left.classList.add('perc-left')
    right.classList.add('perc-right')
  } else if(window.scrollY >= downto || window.scrollY <= scroll2){
    left.classList.remove('perc-left')
    right.classList.remove('perc-right')
  }
})

const sec3 = document.querySelector(".section_3")
const scroll2 = sec3.offsetTop-300
const downto = sec3.offsetTop+600
const left =document.querySelector(".left_per")
const right =document.querySelector(".right_per")
