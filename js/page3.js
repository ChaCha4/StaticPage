$("section .products .input a:nth-child(2)").click(function() {
  var quantity = $(this)
    .siblings("input")
    .val();
  var price =
    $(this)
      .parent()
      .siblings(".price")
      .find("span")
      .text() * 1;
  quantity++;
  $(this)
    .siblings("input")
    .val(quantity);
  var result = (price * quantity).toFixed(2);
  $(this)
    .parent()
    .siblings(".total")
    .find("span")
    .text(result);
});
$("section .products .input a:nth-child(3)").click(function() {
  var quantity = $(this)
    .siblings("input")
    .val();
  var price =
    $(this)
      .parent()
      .siblings(".price")
      .find("span")
      .text() * 1;
  quantity--;
  $(this)
    .siblings("input")
    .val(quantity);
  if (quantity < 1) {
    $(this)
      .siblings("input")
      .val(0);
  }
  var result = (price * quantity).toFixed(2);
  $(this)
    .parent()
    .siblings(".total")
    .find("span")
    .text(result);
});
