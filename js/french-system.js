import {ExcelFormulas} from './excel_formulas.js'

function monthlyInterest(interest, decimals=3){
    return (quota/12).toFixed(decimals);
}

function quota(monthlyInterest, decimals=3){
    return ExcelFormulas.PMT(monthlyInterest, numberOfQuotes, capital);
}

function numberOfQuotes(term, decimals=3){
    return (term*12).toFixed(decimals);
}

function totalToPay(quota, numQuotas, decimals=3){
    return (quota*numQuotas).toFixed(decimals);
}

function interest(totalToPay, capital, decimals=3){
    return (capital-totalToPay).toFixed(decimals);
}