//import {ExcelFormulas} from './excel_formulas.js';

function monthlyInterest(interest, decimals=3){
    return (interest/12).toFixed(decimals);
}

function quota(monthlyInterest, numberOfQuotes, capital, decimals=3){
    return ExcelFormulas.PMT(monthlyInterest, numberOfQuotes, -capital).toFixed(decimals);
}

function numberOfQuotes(term, decimals=0){
    return (term*12).toFixed(decimals);
}

function totalToPay(quota, numQuotas, decimals=3){
    return (quota*numQuotas).toFixed(decimals);
}

function interest(totalToPay, capital, decimals=3){
    return (capital-totalToPay).toFixed(decimals);
}

/* export const default_decimals = 3;
export var FrenchSystem = {
    monthlyInterest: function (interest, decimals=default_decimals) { monthlyInterest(interest, decimals); },
    quota: function (monthlyInterest, decimals=default_decimals) { quota(monthlyInterest, decimals); },
    numberOfQuotes: function (term, decimals=default_decimals) { numberOfQuotes(term, decimals); },
    totalToPay: function (quota, numQuotas, decimals=default_decimals) { totalToPay(quota, numQuotas, decimals); },
    interest: function (totalToPay, capital, decimals=default_decimals) { interest(totalToPay, capital, decimals); }
}; */