$(function() {
  var a = audiojs.createAll({
    trackEnded: function() {
      var next = $('.audio ol li.playing').next();
      if (!next.length) next = $('.audio-player ol li').first();
      next.addClass('playing').siblings().removeClass('playing');
      audio.load($('a', next).attr('data-src'));
      audio.play();
    }
  });
  var audio = a[0];
  if (audio) {
    first = $('.audio ol a').attr('data-src');
    $('.audio ol li').first().addClass('playing');
    audio.load(first);
    $('.audio ol li').click(function(e) {
      e.preventDefault();
      $(this).addClass('playing').siblings().removeClass('playing');
      audio.load($('a', this).attr('data-src'));
      audio.play();
    });
  }
});
