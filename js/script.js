$(document).ready(function(){

    $("#display").text("0");
    var number = "";
    var operator = "";
    var sumString = "";
    var wipe = false;
    var opCount = 0;

    function lastCharAnOperator() {
        if (sumString[sumString.length-1] == "*" || sumString[sumString.length-1] == "/" || sumString[sumString.length-1] == "%" || sumString[sumString.length-1] == "+" || sumString[sumString.length-1] == "-") {
            return true;
        }
    }

    function largeAnswerTrim(n) {
        if (n.toString().length > 15) {
            return n.toPrecision(10);
        } else {
            return n;
        }
    }

    function truncateIfTooLong(n) {
        if (n.toString().length > 15) {
            console.log("firing")
            return n.substring(0, 15);
        } else {
            return n;
        }
    }

  // decimal listener
    $("#point").click(function(){
        if (number.indexOf(".") === -1) {
            // no previous decimals, append
            number += "."
            $("#display").text(number);
        }
    });

    // Number listeners
    $(".numbers").not("#clear, #clearall, #point").click(function() {
        if (wipe) {
            number = "";
            $("#display").text("0");
            wipe = false;
        }
        number += $(this).html();
        number = truncateIfTooLong(number);
        $("#display").text(number);
    });

    // Operator listeners
    $(".operators").click(function() {
        try {
            opCount += 1;
            wipe = false;
            operator = $(this).text();
            sumString += number;
            number = "";
            // intermediate calc
            if (opCount > 1) {
                var answer = eval(sumString);
                answer = largeAnswerTrim(answer);
                $("#display").text(answer);
            }
            // if last item in item in sumString is an operator, replace with new opp
            if (lastCharAnOperator()) {
                sumString = sumString.slice(0, -1);
                sumString += operator;
            } else {
                sumString += operator;
            }
        }
        catch(err) {
            console.log("Incorrect operator placement")
        }
    });

    // Clear and clearall listeners
    $("#clear,#clearall").click(function(){
        number = "";
        operator = "";
        $("#display").text("0");
        if ($(this).attr("id") === "clearall") {
            sumString = "";
        }
    });

    // Equals listener
    $("#equals").click(function(){
        opCount = 0;
        sumString += number;
        if (lastCharAnOperator()) {
            sumString = sumString.slice(0, -1);
        }
        var answer = eval(sumString);
        // if answer.length > 13
        // exponent

        answer = largeAnswerTrim(answer);

        console.log(answer);
        $("#display").text(answer);
        // handle any division by zero
        if (answer == "Infinity") {
            $("#display").text("Error");
        }
        operator = "";
        sumString = "";
        number = answer;
        wipe = true;
    });

});