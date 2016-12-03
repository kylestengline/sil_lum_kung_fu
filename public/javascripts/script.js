"use strict";

$(document).ready(function() {

  $(".menu-btn").click(function(){
    $(".responsive-menu").toggleClass("expand");
  });

  setTimeout(function() {
    $("#welcome_sign").fadeOut(2000); 
    setTimeout(function() {
      var enter_text = $("#welcome_sign").text("ENTER HERE").css("color", "#222").fadeIn(1500);
      enter_text.css("font-size", "27px");
      // ends second setTimeout
    }, 1700);  
    // ends first setTimeout
  }, 3500);
});
