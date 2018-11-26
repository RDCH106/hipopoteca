//import {FrenchSystem} from './french-system.js';

function calculateInput(){
    if($("#form-input")[0].checkValidity()){
        document.getElementById("form-result").style.display = "initial";
    }    
    var capitalValue = document.getElementById('capital').value;
    var monthlyInterestValue = monthlyInterest(document.getElementById('fixedType').value);
    document.getElementById("monthlyInterestValue").innerHTML = monthlyInterestValue;
    var numberOfQuotesValue = numberOfQuotes(document.getElementById('term').value);
    document.getElementById("numberOfQuotesValue").innerHTML = numberOfQuotesValue;
    var quotaValue = quota(monthlyInterestValue, numberOfQuotesValue, capitalValue, 2);
    document.getElementById("quotaValue").innerHTML = format("##0.##0,#0", quotaValue);
    var totalToPayValue = totalToPay(quotaValue, numberOfQuotesValue, 2);
    document.getElementById("totalToPayValue").innerHTML = format("##0.##0,#0", totalToPayValue);
    var interestValue = interest(totalToPayValue, capitalValue, 2);
    document.getElementById("interestValue").innerHTML = format("##0.##0,#0", interestValue);
}

// On LOAD events
function init(){
    document.getElementById("form-result").style.display = "none";
    document.getElementById('form-input').onsubmit = function() { return false; };  // Disable on submit reload
}