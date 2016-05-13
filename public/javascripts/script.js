"use strict";

$(document).ready(function() {
  console.log("loaded");


  setTimeout(function() {
    $("#welcome_sign").fadeOut(2000); 
    setTimeout(function() {
      var enter_text = $("#welcome_sign").text("Enter Here").css("color", "white").fadeIn(1500);
      enter_text.css("font-size", "30px");
      // ends second setTimeout
    }, 1700);  
    // ends first setTimeout
  }, 3500);

  

});