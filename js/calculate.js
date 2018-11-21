//import {FrenchSystem} from './french-system.js';

function calculateInput(){
    var capitalValue = document.getElementById('capital').value;
    var monthlyInterestValue = monthlyInterest(document.getElementById('fixedType').value);
    document.getElementById("monthlyInterestValue").innerHTML = monthlyInterestValue;
    var numberOfQuotesValue = numberOfQuotes(document.getElementById('term').value);
    document.getElementById("numberOfQuotesValue").innerHTML = numberOfQuotesValue;
}