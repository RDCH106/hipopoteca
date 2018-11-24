//import {FrenchSystem} from './french-system.js';

function calculateInput(){
    var capitalValue = document.getElementById('capital').value;
    var monthlyInterestValue = monthlyInterest(document.getElementById('fixedType').value);
    document.getElementById("monthlyInterestValue").innerHTML = monthlyInterestValue;
    var numberOfQuotesValue = numberOfQuotes(document.getElementById('term').value);
    document.getElementById("numberOfQuotesValue").innerHTML = numberOfQuotesValue;
    var quotaValue = quota(monthlyInterestValue, numberOfQuotesValue, capitalValue, 0, 1);
    document.getElementById("quotaValue").innerHTML = quotaValue;
    var totalToPayValue = totalToPay(quotaValue, numberOfQuotesValue);
    document.getElementById("totalToPayValue").innerHTML = totalToPayValue;
}