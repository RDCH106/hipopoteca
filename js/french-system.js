
function monthlyInterest(quota, precision=8){
    return (quota/12).toPrecision(precision);
}

function numberOfQuotes(term, precision=8){
    return (term*12).toPrecision(precision);
}