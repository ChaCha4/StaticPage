$(".country ul li").mouseenter(function() {
  $(".country ul li .box").css("display", "none");
  $(this)
    .find(".box")
    .css("display", "block");
});
$(".country ul li").mouseleave(function() {
  $(this)
    .find(".box")
    .fadeOut(500);
});
$(".help ul li:eq(4) a").mouseenter(function() {
  $(this)
    .siblings(".box")
    .css("display", "block");
});
$(".help ul li:eq(4) .box").mouseleave(function() {
  $(this).fadeOut(500);
});
$(".search ul li:eq(0)").mouseenter(function() {
  $(this)
    .find(".box")
    .css("display", "block");
});
$(".search ul li .box").mouseleave(function() {
  $(this).fadeOut(500);
});
$(".head-bottom nav ul li .navgator").mouseenter(function() {
  $(".head-bottom nav ul li .box").css("display", "none");
  $(this)
    .next()
    .css("display", "block");
});
$(".head-bottom nav ul li .box").mouseleave(function() {
  $(this).css("display", "none");
});
$(".head-bottom nav ul li:eq(1) .box div .fu").mouseenter(function() {
  $(".head-bottom nav ul li:eq(1) .box div .box1").css("display", "none");
  $(this)
    .next()
    .css("display", "block");
});
$(".head-bottom nav ul li:eq(1) .box .box1").mouseleave(function() {
  $(this).css("display", "none");
});
$("section .people div").mouseenter(function() {
  $(this)
    .stop()
    .animate({ "background-size": "380px" }, 400);
});
$("section .people div").mouseleave(function() {
  $(this)
    .stop()
    .animate({ "background-size": "360px" }, 400);
});
$("section .summer .left").mouseenter(function() {
  $(this)
    .find("p:last-child")
    .css("color", "#3bb18f");
});
$("section .summer .left").mouseleave(function() {
  $(this)
    .find("p:last-child")
    .css("color", "#000");
});
$("section .summer .right").mouseenter(function() {
  $(this)
    .find("p:first-child")
    .css("color", "#3bb18f");
});
$("section .summer .right").mouseleave(function() {
  $(this)
    .find("p:first-child")
    .css("color", "#000");
});
$("section .blog .mask").mouseenter(function() {
  $(this)
    .parent()
    .css({
      "background-size": "117%",
      "background-position": "7%"
    });
});
$("section .blog .mask").mouseleave(function() {
  $(this)
    .parent()
    .css({
      "background-size": "128%",
      "background-position": "20%"
    });
});
$(window).scroll(function() {
  var ind = $(window).scrollTop();
  if (ind > 100) {
    $("footer .toTop")
      .stop()
      .fadeIn(500);
  } else {
    $("footer .toTop")
      .stop()
      .fadeOut(500);
  }
});
$("footer .toTop").click(function() {
  $("html,body").animate({ scrollTop: "0" }, 5000);
});
var selected = 0;
$("footer .up2 .box:nth-child(2) div a").click(function() {
  if (selected == 0) {
    selected = 1;
    $("footer .up2 .box:nth-child(2) div a")
      .next(".list")
      .css("display", "none");
    $(this)
      .next(".list")
      .css("display", "block");
  } else {
    selected = 0;
    $(this)
      .next(".list")
      .css("display", "none");
  }
});
