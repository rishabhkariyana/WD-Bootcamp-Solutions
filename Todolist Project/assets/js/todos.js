// Check off specific todo by clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed")
})

// delete todo
$("ul").on("click", "span", function (event) {
  $(this).parent().fadeOut(500, function () {
    $(this).remove();
  });
  event.stopPropagation();
});

//add new todo
$("input[type='text']").on("keypress", function (event) {
  if (event.which === 13) {
    console.log("Enter")
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i> </span> " + todoText + "</li>");
  }
});

//make input appear/disappear

$(".fa-plus").on("click", function () {
  $("input").fadeToggle();
});