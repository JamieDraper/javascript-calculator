$(document).ready(function(){

	var display = $("#display");
	display.text("0");
	var number = "";
	var newnumber = "";
	var operator = "";

	// Max nums on screen == 12
	// When numbers pressed, add to var number and update screen
	$(".numbers").not("#clear, #clearall").click(function() {
		if (number.length < 13) {
			number += $(this).html();
			console.log(number);
			$("#display").text(number);
		}
	});
	// When operators pressed
	$(".operators").click(function() {
		// chain sum
		if (!operator == "") {
    		console.log("chain sum")
    	}


		operator = $(this).text();
		newnumber = number;
		number = "";
		$("#display").text("0");
		console.log(operator)
	});
	// Clear and clear all
	$("#clear,#clearall").click(function(){
		number = "";
		operator = "";
		$("#display").text("0");
		if ($(this).attr("id") === "clearall") {
			newnumber = "";
		}
    });

    // Equal listener
    $("#equals").click(function(){
    	var answer = 0;
    	number = parseFloat(number);
    	newnumber = parseFloat(newnumber);
    	// convert strings to numbers -- parseFloat(number)
    	// switch

    	switch(operator) {
    		case "X":
    			// Do multiplication
    			answer = newnumber * number;
    			console.log("newnumber = " + newnumber);
    			console.log("number = " + number); // WORKS!
    			break;
    		case "-":
    			// Do minus
    			answer = newnumber - number;
    			break;
    		case "+":
    			// Do plus
    			answer = newnumber + number;
    			break;
    		case "%":
    			// Do modulo
    			answer = newnumber % number;
    			break;
    		case "÷":
    			// Do division
    			answer = newnumber / number;
    			break;
    		default:
    			break;
    			// No operator so do nothing.
    	}
    	number = answer.toString(); //convert back to string first
    	$("#display").text(number); // need to handle result length!
    	operator = ""; // reset operator and newnumber

    });

});

