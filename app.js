// ページ内リンク
$('#page-link a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href'); 
  var pos = $(elmHash).offset().top;  
  $('body,html').animate({scrollTop: pos}, 500); 
  return false;
});

// グローバルナビ固定
function FixedAnime() {
  var headerH = $('#header').outerHeight(true);
  var scroll = $(window).scrollTop();
  if (scroll >= headerH){
      $('#header').addClass('fixed');
    }else{
      $('#header').removeClass('fixed');
    }
}

//ナビゲーションをクリックした際のスムーススクロール
$('#g-navi a').click(function () {
  var elmHash = $(this).attr('href'); 
  var pos = Math.round($(elmHash).offset().top-120);  
  $('body,html').animate({scrollTop: pos}, 500);
  return false;
});

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  FixedAnime();
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  FixedAnime();
});