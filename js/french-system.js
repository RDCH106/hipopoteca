import {ExcelFormulas} from './excel_formulas.js'

function monthlyInterest(quota, decimals=3){
    return (quota/12).toFixed(decimals);
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