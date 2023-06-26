//AOS
AOS.init({ 
  delay: 100,
  duration: 1000,
});
//lightbox
$(function () {
  lightbox.option({
    'disableScrolling': true,
  });
});
//ページ内リンク
$(function () {
  $('a[href^="#"].link').click(function () {
    var adjust = 0;
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });
});
//画像ズーム
$(function () {
  $('.img-box').click(function () {
    $(this).toggleClass('scale');
  });
});
//トップへ戻る
$(function(){
  var pagetop = $('#page-top');
  pagetop.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});
//追従ボタン
$(function () {
  var scrollEnd = $('.end_box-js').offset().top; //終わる位置
  var scrollStart = $('.in_box-js').offset().top; //始まる位置
  var distance = 0;

  $(document).scroll(function () {
    distance = $(this).scrollTop(); //スクロールした距離を取得

    if (scrollStart <= distance) {
      $('.fixed_banner-2').addClass('fixed'); //class『fixed』を追加
    } else if (scrollStart >= distance) {
      $('.fixed_banner-2').removeClass('fixed'); //class『fixed』を削除
    }

    if (scrollEnd <= distance) {
      $('.fixed_banner-1').addClass('none'); //class『none』を追加
    } else {
      $('.fixed_banner-1').removeClass('none'); //class『none』を削除
    }
  });
});
//タブ
$(function () {
  $('.tab-btn-js').on('click', function () {
    var tabWrap = $(this).parents('.tab-wrap-js');
    var tabBtn = tabWrap.find(".tab-btn-js");
    var tabContents = tabWrap.find('.tab-contents-js');
    tabBtn.removeClass('show');
    $(this).addClass('show');
    var elmIndex = tabBtn.index(this);
    tabContents.removeClass('show');
    tabContents.eq(elmIndex).addClass('show');
  });
});
