
function monthlyInterest(quota, decimals=3){
    return (quota/12).toFixed(decimals);
}

function numberOfQuotes(term, decimals=3){
    return (term*12).toFixed(decimals);
}

function totalToPay(quota, numQuotas){
    return (quota*numQuotas).toFixed
}