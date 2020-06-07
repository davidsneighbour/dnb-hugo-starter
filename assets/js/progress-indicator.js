/*global l32n:true*/
jQuery(document).ready(function($) {

  var winHeight = $(window).height();
  var docHeight = $(document).height();
  var progressBar = $('#readingprogress .progress-bar');
  var max;
  var value;

  /* Set the max scrollable area */
  max = docHeight - winHeight;
  progressBar.attr('max', max);
  $(document).on('scroll', function(){
     value = $(window).scrollTop();
     val = (100 * value)/max;
     progressBar.attr('value', value);
     progressBar.attr('style', 'width: ' + val + '%');
  }).trigger('scroll');

  $(window).on('resize', function() {
    winHeight = $(window).height(),
    docHeight = $(document).height();
    max = docHeight - winHeight;
    progressBar.attr('max', max);
    $(document).trigger('scroll');
  });

  //var progressBar = document.getElementById('progressbar');
  //function updateProgress(newValue) {
  //  progressBar.value = newValue;
  //  progressBar.getElementsByTagName('span')[0].textContent = newValue;
  //}

});
