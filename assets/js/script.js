$(function () {

      // function submitForm() {
      // console.log("cpt", grecaptcha.getResponse())
      // var form = document.getElementById("contactForm");
      // if (validate_form(form)) {
      // // form.submit();
      // } else {
      // grecaptcha.reset();
      // }
      // }
      var v = document.getElementById("mainvideo");	
      v.playbackRate = 0.8;

      $('.form-default .form-control').blur(function () {
            if (this.value) {
                  $(this).addClass('filled');
            } else {
                  $(this).removeClass('filled');
            }
      });

      $('.nav li').click(function () {
            $('.nav-item').removeClass('active');
            $(this).addClass('active');
      });

      $(document).ready(function () {
            $('a[href*=#]').bind('click', function (e) {
                  e.preventDefault(); // prevent hard jump, the default behavior

                  var target = $(this).attr("href"); // Set the target as variable

                  // perform animated scrolling by getting top-position of target-element and set it as scroll target
                  $('html, body').stop().animate({
                        scrollTop: $(target).offset().top
                  }, 600, function () {
                        location.hash = target; //attach the hash (#jumptarget) to the pageurl
                  });

                  return false;
            });
      });

      // $(window).scroll(function () {
      // var scrollDistance = $(window).scrollTop();
      // $('.nav li').removeClass('active');
      // // Assign active class to nav links while scolling
      // $('section').each(function (i) {

      // if ($(this).position().top <= scrollDistance) {
      // $('.nav a.active').removeClass('active');
      // $('.nav a').eq(i).addClass('active');
      // }
      // });
      // }).scroll();

      var sections = $('section');
      var nav = $('nav');
      var nav_height = nav.outerHeight();

      $(window).on('scroll', function () {
            var cur_pos = $(this).scrollTop();
            $('.nav-item').removeClass('active');
            sections.each(function () {
                  var top = $(this).offset().top - nav_height,
                        bottom = top + $(this).outerHeight();

                  if (cur_pos >= top && cur_pos <= bottom) {
                        nav.find('a').removeClass('active');
                        sections.removeClass('active');

                        $(this).addClass('active');
                        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
                  }
            });
      });

      $('.service-wrap').slick();

      $("#sv1").click(function(){
            console.log("sv1");
            $("#svo1").show();
      });

      
});
$(document).ready(function(){
$("#submit_form").click(function(){
var dataString = 'first-name'+ first-name + '&last-name='+ last-name + '&email'+ email + '&subject='+ subject + '&message=' + message;
// AJAX Code To Submit Form.
$.ajax({
type: "POST",
url: "sendmail.php",
data: dataString,
cache: false,
success: function(){
var x = document.getElementById("snackbar");
x.className = "show";
setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
});
return false;
});
});
