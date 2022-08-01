// Permet d'afficher les langages du dropdown Haut de page
$("#languages1").click(function () {
  if ($("#languages1Links").is(":hidden")) {
    $("#languages1Links").show();
  } else {
    $("#languages1Links").hide();
  }
});
// Permet d'afficher les langages du dropdown Bas de page
$("#languages2").click(function () {
  if ($("#languages2Links").is(":hidden")) {
    $("#languages2Links").show();
  } else {
    $("#languages2Links").hide();
  }
});

// Permet d'afficher les éléments de l'accordéon
$(".accordion-question").click(function () {
  let isActive = $(this).parent().hasClass("is-active");

  if (isActive) {
    $(this).parent().find(".accordion-answer").slideUp();
    $(this).parent().removeClass("is-active");
  } else {
    $(this).parent().siblings().removeClass("is-active");
    $(this).parent().addClass("is-active");
    $(this).parent().siblings().find(".accordion-answer").slideUp();
    $(this).next().slideDown();
  }
});