// Permet d'afficher ou de masquer le mot de passe au clic
$("#displayPassword").click(function () {
    if ($("#password").attr('type') == "password") {
        $("#password").attr("type", "text");
        $("#optionView").text('Masquer');
    } else {
        $("#password").attr("type", "password");
        $("#optionView").text('Afficher');
    }
});

// Permet de montrer ou cacher le bouton pour afficher ou masquer le mot de passe
$("#displayPassword").focus(function () {
    $("#optionView").removeClass("hidden");
});
$("#displayPassword").blur(function () {
    $("#optionView").addClass("hidden");
});
$("#password").focus(function () {
    $("#optionView").removeClass("hidden");
});
$("#password").blur(function () {
    $("#optionView").addClass("hidden");
});


// Permet d'afficher les langages du dropdown
$("#languages").click(function () {
    if ($("#languagesLinks").is(":hidden")) {
        $("#languagesLinks").show();
    } else {
        $("#languagesLinks").hide();
    }
});
