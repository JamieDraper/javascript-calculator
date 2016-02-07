$(document).ready(function(){

	var display = $("#display");
	display.text("0");
	var number = "";
	var operator = "";
    var sumString = "";

	// Max nums on screen == 12
	// When numbers pressed, add to var number and update screen
	$(".numbers").not("#clear, #clearall").click(function() {
		if (number.length < 13) {
			number += $(this).html();
			$("#display").text(number);
            sumString += number;
            console.log("sumString = " + sumString);
		}
	});
	// When operators pressed
	$(".operators").click(function() {
		operator = $(this).text();
		number = "";
        sumString += operator;
	});
	// Clear and clear all
	$("#clear,#clearall").click(function(){
		number = "";
		operator = "";
		$("#display").text("0");
		if ($(this).attr("id") === "clearall") {
            sumString = "";
		}
    });

    // Equal listener
    $("#equals").click(function(){
        console.log(sumString);
    	var answer = eval(sumString);
        answer = "" + answer;
        console.log("Answer = " + answer)
    	$("#display").text(answer); // need to handle result length!
    	operator = ""; // reset operator and newnumber
    });

});

